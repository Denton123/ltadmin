/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2019/3/5
 * 
 */

 <template>
  <div class="basic_model">
    <div class="basic_model_content">
      <!-- 管理系统操作按钮 -->
      <div class="search_input">
        <searchInput :searchInput="searchInput" @handleSearch="handleSearch" v-if="searchInput"/>
        <component
          :key="index"
          v-for="(typeOperate,index) in typeComponent"
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
        bordered
        :columns="columns"
        :dataSource="tableData"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :pagination="pagination"
        @change="handleTableChange"
        :loading="loading"
      >
        <template class="tableOperate" slot="action" slot-scope="text, record">
          <a-button
            v-for="tablecom in tableOperate"
            type="primary"
            :key="tablecom.title"
            class="block mrB10"
            @click="handleTableOperate(tablecom.type, tablecom.model, record.key)"
          >{{tablecom.title}}</a-button>
        </template>
        <span slot-scope="status" slot="status">
          <a-tag
            :color="status == '0' ? (tag == 'user' ? 'red' : 'green') : (tag == 'user' ? 'green' : 'red')"
          >{{status == '0' ? (tag == 'user' ? '禁用' : '正常') : (tag == 'user' ? '正常' : '暂停')}}</a-tag>
        </span>
        <span slot-scope="type" slot="type">
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
        v-if="newFormVisible"
      />
      <!-- 编辑表单 -->
      <edit-form
        :editFormTitle="`编辑` + breadcrumb"
        :editFormVisible="editFormVisible"
        @closeEditForm="closeEditForm"
        :fields="fields"
        :editComponent="editComponent"
        @submitEdit="submitEdit"
      />
    </div>
  </div>
</template>

<script>
import computed from "../basicMsg/computed";
import searchForm from "@/components/public/searchForm";
import searchResult from "@/components/public/searchResult";
import searchInput from "@/components/public/searchInput";
import newForm from "@/components/public/newForm";
import editForm from "@/components/public/editForm";

export default {
  name: "BasicModel",
  data() {
    return {
      modelIndex: 0,
      // 列
      columns: [],
      // 表格数据
      tableData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          lowPrice: 23
        }
      ],
      // 搜索结果
      searchData: {
        hotelMatchTotal: 115215,
        hotelOpenTotal: 5458787,
        hotelSyncTotal: 87815,
        hotelTotal: 458712,
        hotelUsableTotal: 478812389
      },
      // 表格选中的行的全部key数组
      selectedRowKeys: [],
      // 新增表单是否可见
      newFormVisible: false,
      // 编辑表单是否可见
      editFormVisible: false,
      // 表格返回数据
      fields: {},
      // 表格选中的行的数据
      selectedRows: {},
      // 表格选中的行的key数组
      selectedRowKey: [],
      // 表格分页
      pagination: {},
      // 表格渲染loading
      loading: false
    };
  },
  props: {
    models: {
      type: Array,
      default() {
        return [
          {
            // 表格头
            theads: [],
            // 表格字段
            props: [],
            // 操作按钮：新增编辑等
            typeComponent: [],
            // 搜索表单
            SearchComponent: [],
            // 搜索结果字段
            searchResultMsg: [],
            // 表格操作
            tableOperate: [],
            // 搜索组件
            searchInput: {},
            // 新建
            newComponent: [],
            // 编辑
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
      let tagsArr = ["type", "status"];
      for (let i in this.props) {
        this.columns[i].dataIndex = this.props[i];
        if (this.props[i] == "action") {
          this.columns[i].scopedSlots = { customRender: "action" };
        } else if (
          this.$route.params.model !== "dictionaryManage" &&
          tagsArr.indexOf(this.props[i]) !== -1
        ) {
          this.columns[i].scopedSlots = { customRender: `${this.props[i]}` };
        }
      }
    },
    // 表格操作按钮
    handleTableOperate(type, model, key) {
      this.$router.push(`/hotelMenus/${type}/${model}/${key}`);
    },
    // 查询
    handleSearch(item) {
      let searchParams = {};
      searchParams[`${this.searchInput.searchName}`] = `${item}`;
      this.getListData({ ...searchParams });
    },
    // 处理表格选中id
    handleSelectedKeys() {
      if (this.selectedRowKeys.length > 1) {
        this.$message.warning("只能选择一条记录");
      } else if (this.selectedRowKeys.length == 0) {
        this.$message.warning("请选择一条记录");
      }
    },
    // 新增
    handleNew() {
      this.newFormVisible = true;
    },
    // 编辑
    handleEdit() {
      this.handleSelectedKeys();
      if (this.selectedRowKeys.length == 0 || this.selectedRowKeys.length > 1) {
        this.editFormVisible = false;
      } else {
        this.editFormVisible = true;
        this.$nextTick(() => {
          let url,
            ajaxType,
            urlArr = [
              "menu",
              "schedule",
              "dict",
              "config",
              "user",
              "scheduleLog"
            ],
            urlParams;
          if (urlArr.indexOf(this.tag) !== -1) {
            ajaxType = "$dataPost";
            if (this.tag == "dict" || this.tag == "config") {
              url = `sys/${this.tag}/infoV2?id=${this.selectedRows[`id`]}`;
            } else if (this.tag == "user") {
              url = `sys/${this.tag}/findInfoV2?${this.tag}Id=${
                this.selectedRows[`${this.tag}Id`]
              }`;
            } else {
              urlParams =
                this.tag == "menu"
                  ? "menu"
                  : this.tag == "scheduleLog"
                  ? "log"
                  : "job";
              url = `sys/${this.tag}/infoV2?${urlParams}Id=${
                this.selectedRows[`${urlParams}Id`]
              }`;
            }
          } else {
            url = `/sys/${this.tag}/info/v2/${
              this.selectedRows[`${this.tag}Id`]
            }`;
            ajaxType = "$dataGet";
          }
          this[ajaxType](this, url).then(res => {
            if (res.data.code == 200) {
              this.fields = res.data.data;
            }
          });
        });
      }
    },
    // 删除
    handleDelete() {
      this.handleSelectedKeys();
      let that = this;
      if (this.selectedRowKeys.length == 1) {
        this.$confirm({
          title: "信息",
          content: "确定要删除记录吗？",
          okText: "确定",
          okType: "danger",
          cancelText: "取消",
          onOk() {
            let params = {};
            let paramsKey, url, flag;
            let urlArr = ["role", "schedule", "config", "user", "dict"];
            if (urlArr.indexOf(that.tag) !== -1) {
              if (that.tag == "schedule") {
                flag = "job";
                url = `/sys/${that.tag}/deleteV2`;
              } else if (that.tag == "user" || that.tag == "dict") {
                flag = that.tag;
                url = `/sys/${that.tag}/deleteV2`;
              } else {
                flag = that.tag;
                url = `sys/${that.tag}/delete/v2`;
              }
              paramsKey = `${flag}Ids`;
              params[`${paramsKey}`] = [that.selectedRows[`${flag}Id`]];
              that.$dataPost(that, url, params).then(res => {
                if (res.data.code == 200) {
                  that.$message.success("删除成功");
                  that.getListData();
                  that.selectedRowKeys = [];
                }
              });
            } else {
              let url, ajaxType;
              if (that.tag == "menu") {
                url = `/sys/${that.tag}/deleteV2?${that.tag}Id=${
                  that.selectedRows[`${that.tag}Id`]
                }`;
                ajaxType = "$dataPost";
              } else {
                url = `sys/${that.tag}/delete/v2`;
                ajaxType = "$dataGet";
              }
              paramsKey = `${that.tag}Id`;
              params[`${paramsKey}`] = that.selectedRows[`${that.tag}Id`];
              that[ajaxType](that, url, params).then(res => {
                if (res.data.code == 200) {
                  that.$message.success("删除成功");
                  that.getListData();
                  that.selectedRowKeys = [];
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
      if (this.selectedRowKeys.length == 1) {
        let params = { jobIds: [`${this.selectedRows[`jobId`]}`] };
        this.$dataPost(this, `sys/${this.tag}/pauseV2`, params).then(res => {
          if (res.data.code == 200) {
            this.$message.success("暂停成功");
            this.getListData();
            this.selectedRowKeys = [];
          } else {
            this.$message.error(res.data.msg);
          }
        });
      } else {
        return;
      }
    },
    // 恢复
    handleRenew() {
      this.handleSelectedKeys();
      if (this.selectedRowKeys.length == 1) {
        let params = { jobIds: [`${this.selectedRows[`jobId`]}`] };
        this.$dataPost(this, `sys/${this.tag}/resumeV2`, params).then(res => {
          if (res.data.code == 200) {
            this.$message.success("恢复成功");
            this.getListData();
            this.selectedRowKeys = [];
          } else {
            this.$message.error(res.data.msg);
          }
        });
      } else {
        return;
      }
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
    handleRunNow() {
      this.handleSelectedKeys();
      if (this.selectedRowKeys.length == 1) {
        let params = { jobIds: [`${this.selectedRows[`jobId`]}`] };
        this.$dataPost(this, `sys/${this.tag}/runV2`, params).then(res => {
          if (res.data.code == 200) {
            this.$message.success("执行成功");
            this.getListData();
            this.selectedRowKeys = [];
          } else {
            this.$message.error(res.data.msg);
          }
        });
      } else {
        return;
      }
    },
    // 关闭新增表单
    closeNewForm() {
      this.newFormVisible = false;
      this.selectedRowKeys = [];
    },
    // 关闭编辑表单
    closeEditForm() {
      this.editFormVisible = false;
      this.selectedRowKeys = [];
    },
    // 获取表格列表数据
    getListData(params = {}) {
      let tagArr = [
        "role",
        "schedule",
        "config",
        "dict",
        "log",
        "user",
        "scheduleLog",
        "dept"
      ];
      let searchParams = { ...params, limit: 10 };
      if (tagArr.indexOf(this.tag) !== -1) {
        let url;
        url =
          this.tag == "role" || this.tag == "dept"
            ? `sys/${this.tag}/list/v2`
            : `sys/${this.tag}/listV2`;
        // this.loading = true;
        this.$dataPost(this, url, searchParams, false).then(res => {
          if (res.data.code == 200) {
            let resData;
            let pager = { ...this.pagination };
            if (this.tag == "role") {
              resData = res.data.data.list;
              pager.total = res.data.data.totalCount;
              pager.current = res.data.data.currPage;
              pager.pageSize = res.data.data.pageSize;
              this.pagination = pager;
            } else if (this.tag == "log") {
              resData = res.data.page.list;
              pager.total = res.data.page.totalCount;
              pager.current = res.data.page.currPage;
              pager.pageSize = res.data.page.pageSize;
              this.pagination = pager;
            } else {
              resData = res.data.list;
              pager.total = res.data.totalCount;
              pager.current = res.data.currPage;
              pager.pageSize = res.data.pageSize;
              this.pagination = pager;
            }
            resData.forEach((item, index) => {
              item.key = index;
            });
            if (this.tag === "dept") {
              let resetData = this.$setTreeData(resData, `${this.tag}Id`, true);
              this.tableData = resetData;
            } else {
              this.tableData = resData;
            }
            // this.loading = false;
          }
        });
      } else {
        // this.loading = true;
        this.$dataGet(this, this.url).then(res => {
          if (res && res.data.code == 200) {
            let resData = res.data.data;
            let resetData = this.$setTreeData(resData, `${this.tag}Id`, true);
            this.tableData = resetData;
            // this.loading = false;
          }
        });
      }
    },
    // 提交编辑表单
    submitEdit(form) {
      form[`${this.tag}Id`] = this.selectedRows[`${this.tag}Id`];
      let urlArr = ["menu", "schedule", "config", "dict", "user"],
        url;
      if (urlArr.indexOf(this.tag) !== -1) {
        url = `sys/${this.tag}/updateV2`;
      } else {
        url = `sys/${this.tag}/update/v2`;
      }
      if (this.tag == "schedule") {
        form["jobId"] = this.selectedRows[`jobId`];
        form["status"] = this.selectedRows["status"];
      } else if (this.tag == "config" || this.tag == "dict") {
        form["id"] = this.selectedRows[`id`];
      }
      this.$dataPost(this, url, form, false).then(res => {
        if (res.data.code == 200) {
          this.$message.success("编辑数据成功");
          this.editFormVisible = false;
          this.getListData();
          this.selectedRowKeys = [];
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    // 提交新增表单
    submitNew(form) {
      let urlArr = ["menu", "schedule", "config", "dict", "user"];
      let url;
      if (urlArr.indexOf(this.tag) !== -1) {
        url = `/sys/${this.tag}/saveV2`;
      } else {
        url = `/sys/${this.tag}/save/v2`;
      }
      this.$dataPost(this, url, form, false).then(res => {
        if (res.data.code == 200) {
          this.$message.success("新增数据成功");
          this.newFormVisible = false;
          this.getListData();
          this.selectedRowKeys = [];
        } else {
          this.$message.warning(res.data.msg);
        }
      });
    },
    // 表格多选框
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRowKey = selectedRowKeys;
      if (this.selectedRowKey.length == 1) {
        this.selectedRowKey = this.selectedRowKey.join("");
        Object.assign(this.selectedRows, ...selectedRows);
      }
    },
    // 点击分页
    handleTableChange(pagination) {
      this.getListData({ page: pagination.current });
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.handleTabelColumns();
        this.pagination = {};
        this.tableData = [];
      },
      deep: true
    },
    models() {
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
  overflow-x: auto;
  .basic_model_content {
    padding: 16px;
    // background: #fff;
    min-height: 280px;
  }
  .search_input {
    overflow: hidden;
  }
}
</style>
 
 