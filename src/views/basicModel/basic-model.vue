/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2019/3/5
 * 
 */

 <template>
  <div class="basic_model">
    <!-- <a-breadcrumb class="index_breadcrumb" separator=">">
      <a-breadcrumb-item>
        <a-icon type="home" class="mrR10"/>首页
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{breadcrumb}}</a-breadcrumb-item>
    </a-breadcrumb> -->
    <div class="basic_model_content">
      <!-- 管理系统操作按钮 -->
      <div class="search_input">
        <searchInput :searchInput="searchInput" @handleSearch="handleSearch" v-if="searchInput"/>
        <component
          v-for="typeOperate in typeComponent"
          :is="typeOperate.components"
          class="mrL10 mrB10"
          :params="typeOperate.params"
        />
      </div>
      <!-- 操作模块 -->
      <div class="basic_model_operate">
        <!-- 搜索表单 -->
        <searchForm v-if="SearchComponent" :SearchComponent="SearchComponent"/>
      </div>
      <!-- 搜索结果 -->
      <div class="mrT10 mrB10">
        <searchResult
          v-if="searchResultMsg"
          :searchResultMsg="searchResultMsg"
          :searchData="searchData"
        />
      </div>

      <!-- 表格 -->
      <a-table
        :columns="columns"
        :dataSource="tableData"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      >
        <template v-for="tablecomponent in tableOperate" class="tableOperate">
          <a-button
            slot="action"
            type="primary"
            :key="tablecomponent.title"
            @click="handleTableOperate(tablecomponent.title)"
          >{{tablecomponent.title}}</a-button>
        </template>
        <span slot="tags" slot-scope="type" v-if="type!==undefined">
          <a-tag
            :color="type == 0 ? 'blue' : (type == 1 ? 'green' : 'red')"
          >{{type == 0 ? '目录' : (type == 1 ? '菜单' : '按钮')}}</a-tag>
        </span>
      </a-table>

      <!-- 新增表单 -->
      <new-form
        :newFormTitle="`新增` + breadcrumb"
        :newFormVisible="newFormVisible"
        @closeNewForm="closeNewForm"
        :newComponent="newComponent"
        @submitNew="submitNew"
      />
      <!-- 编辑表单 -->
      <edit-form
        :editFormTitle="`编辑` + breadcrumb"
        :editFormVisible="editFormVisible"
        @closeEditForm="closeEditForm"
        :fields="fields"
        :editComponent="editComponent"
        v-if="editFormVisible"
        @submitEdit="submitEdit"
      />
    </div>
    <a-button type="primary" @click="open">按钮</a-button></router-link>
  </div>
</template>

<script>
import computed from "../basicMsg/computed";
import searchForm from "@/components/public/searchForm";
import searchResult from "@/components/public/searchResult";
import searchInput from "@/components/public/searchInput";
import newForm from "@/components/public/newForm";
import editForm from "@/components/public/editForm";
import { constants } from "fs";

export default {
  name: "BasicModel",
  data() {
    return {
      modelIndex: 0,
      activeName: "index0",
      loading: false,
      columns: [],
      tableData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"]
        }
      ],
      searchData: {
        hotelMatchTotal: 115215,
        hotelOpenTotal: 5458787,
        hotelSyncTotal: 87815,
        hotelTotal: 458712,
        hotelUsableTotal: 478812389
      },
      selectedRowKeys: [],
      newFormVisible: false,
      editFormVisible: false,
      fields: {},
      // 表格选中的行的数据
      selectedRows: {},
      test: [],
      selectedRowKey: []
    };
  },
  props: {
    models: {
      type: Array,
      default() {
        return [
          {
            theads: [],
            props: [],
            widths: [],
            typeComponent: [],
            SearchComponent: [],
            breadcrumb: "",
            searchResultMsg: [],
            tableOperate: [],
            searchInput: {},
            newComponent: [],
            editComponent: [],
            tag: "",
            url: ""
          }
        ];
      }
    }
  },
  mixins: [computed],
  methods: {
    // 表格数据处理
    handleTabelColumns() {
      this.columns = [];
      this.theads.forEach(v => {
        this.columns.push({
          title: v
        });
      });
      for (let i in this.props) {
        this.columns[i].dataIndex = this.props[i];
        if (this.props[i] == "action") {
          this.columns[i].scopedSlots = { customRender: "action" };
        } else if (this.props[i] == "type") {
          this.columns[i].scopedSlots = { customRender: "tags" };
        }
      }
      // console.log(this.columns);
    },
    // 表格操作按钮
    handleTableOperate(title) {
    },
    // 查询
    handleSearch(item) {
      this.getListData({ roleName: item });
    },
    // 处理表格选中id
    handleSelectedKeys() {
      if (this.selectedRowKey.length > 1) {
        this.$message.warning("只能选择一条记录");
      } else if (this.selectedRowKey.length == 0) {
        this.$message.warning("请选择一条记录");
      }
    },
    // 新增
    handleNew() {
      this.newFormVisible = true;
      // console.log(this.selectedRowKeys);
      // this.handleSelectedKeys();
    },
    // 编辑
    handleEdit() {
      if (this.selectedRowKey.length == 0 || this.selectedRowKey.length > 1) {
        this.editFormVisible = false;
      } else {
        this.editFormVisible = true;
      }
      this.handleSelectedKeys();
      this.$nextTick(() => {
        this.$dataGet(
          this,
          `/sys/${this.tag}/info/v2/${this.selectedRows[`${this.tag}Id`]}`
        ).then(res => {
          if (res.data.code == 200) {
            this.fields = res.data.data;
          }
        });
      });
    },
    // 删除
    handleDelete() {
      this.handleSelectedKeys();
      let that = this;
      if (this.selectedRowKey.length == 1) {
        this.$confirm({
          title: "信息",
          content: "确定要删除记录吗？",
          okText: "确定",
          okType: "danger",
          cancelText: "取消",
          onOk() {
            let params = {};
            let paramsKey;
            if (that.tag === "role") {
              paramsKey = `${that.tag}Ids`;
              params[`${paramsKey}`] = [that.selectedRows[`${that.tag}Id`]];
              that
                .$dataPost(that, `sys/${that.tag}/delete/v2`, params)
                .then(res => {
                  if (res.data.code == 200) {
                    that.$message.success("删除成功");
                    that.getListData();
                  }
                });
            } else {
              paramsKey = `${that.tag}Id`;
              that
                .$dataGet(that, `sys/${that.tag}/delete/v2`, {
                  deptId: that.selectedRows[`${that.tag}Id`]
                })
                .then(res => {
                  if (res.data.code == 200) {
                    that.$message.success("删除成功");
                    that.getListData();
                  }
                });
            }
          },
          onCancel() {
            // console.log("Cancel");
          }
        });
      }
    },
    // 暂停
    handlePause() {
      this.handleSelectedKeys();
    },
    // 恢复
    handleRenew() {
      this.handleSelectedKeys();
    },
    // 日志列表按钮
    handleShowLog() {
      this.$router.push("/companyMenus/logList");
    },
    // 文件上传
    hanldeUpload() {},
    // 云存储配置
    handleCloudConfig() {},
    // 立即执行
    handleRunNow() {},
    // 关闭新增表单
    closeNewForm() {
      this.newFormVisible = false;
    },
    // 关闭编辑表单
    closeEditForm() {
      this.editFormVisible = false;
    },
    // 获取表格列表数据
    getListData(params = {}) {
      if (this.tag == "role") {
        let searchParams = { ...params, limit: 10, page: 1 };
        this.$dataPost(
          this,
          `sys/${this.tag}/list/v2`,
          searchParams,
          false
        ).then(res => {
          let resData = res.data.data.list;
          resData.forEach((item, index) => {
            item.key = index;
          });
          this.tableData = resData;
        });
      } else {
        this.$dataGet(this, this.url).then(res => {
          // console.log(res.data.data);
          if (res.data.code == 200) {
            let resData = res.data.data;
            let resetData = this.$setTreeData(resData, `${this.tag}Id`, true);
            this.tableData = resetData;
          }
        });
      }
    },
    // 提交编辑表单
    submitEdit(form) {
      form[`${this.tag}Id`] = this.selectedRows[`${this.tag}Id`];
      this.$dataPost(this, `sys/${this.tag}/update/v2`, form, false).then(
        res => {
          if (res.data.code == 200) {
            this.$message.success("编辑数据成功");
            this.editFormVisible = false;
            this.getListData();
            console.log(this.test);
            this.selectedRowKeys = [];
          }
        }
      );
    },
    // 提交新增表单
    submitNew(form) {
      this.$dataPost(this, `/sys/${this.tag}/save/v2`, form, false).then(
        res => {
          if (res.data.code == 200) {
            this.$message.success("新增数据成功");
            this.newFormVisible = false;
            this.getListData();
            this.selectedRowKeys = [];
          }
        }
      );
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRowKey = selectedRowKeys;
      if (this.selectedRowKey.length == 1) {
        this.selectedRowKey = this.selectedRowKey.join("");
        Object.assign(this.selectedRows, ...selectedRows);
      }
    },
    open() {
      window.location.href="/api/druid/sql.html"
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.handleTabelColumns();
        // console.log(this.tableData);
      },
      deep: true
    },
    models() {
      this.tableData = [];
      this.getListData();
      this.selectedRowKeys = [];
    }
  },
  mounted() {
    this.handleTabelColumns();
    this.getListData();
  },
  components: {
    searchForm,
    searchResult,
    searchInput,
    newForm,
    editForm
  }
};
</script>

 <style lang="scss">
@import "@/sass/mixins/_mixins.scss";

.basic_model {
  .basic_model_content {
    padding: 16px;
    background: #fff;
    min-height: 280px;
  }
  .tableOperate {
  }
  .search_input {
    // height: 50px;
    overflow: hidden;
  }
}
</style>
 
 