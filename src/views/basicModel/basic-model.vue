/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2019/3/5
 * 
 */

 <template>
  <div class="basic_model">
    <!-- tab栏 -->
    <el-tabs v-model="activeName" @tab-click="tabClick" type="card">
      <el-tab-pane
        v-for="(model, index) in models"
        :label="model.tab"
        :key="model.tab"
        :name="'index'+index"
      ></el-tab-pane>
    </el-tabs>

    <!-- 操作模块 -->
    <div class="basic_model_operate">
      <!-- 搜索框 -->
      <!-- <div class="operate_search_wrap">
            <el-input class="operate_search_input" placeholder="请输入搜索内容"/>
            <el-button type="primary" @click="handleSearch">
                搜索
            </el-button>
      </div>-->
      <!-- <div>
          <component 
            v-for="typeOperate in typeComponent"
            :is="typeOperate.component"
            :inputSearch="typeOperate.inputSearch"
            class="fl operate_slefComponent"
          />
          <el-button type="primary" @click="handleSearch">
                查询
          </el-button>
          <el-button>重置</el-button>
      </div>-->
      <!-- 搜索表单 -->
      <searchForm v-if="SearchComponent" :SearchComponent="SearchComponent"/>
    </div>

    <!-- 列表 -->
    <el-table :data="tableData" border>
      <el-table-column type="selection" width="55"/>
      <el-table-column label="序号" width="80" type="index"/>
      <template v-for="(item, index) in theads">
        <el-table-column
          :label="item"
          :prop="props[index]"
          :min-width="widths[index]"
          :sortable="true"
          show-overflow-tooltip
          :key="props[index]"
        >
          <template slot-scope="scope">{{scope.row[props[index]]}}</template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 表格 -->
    <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection">
      <a-button slot="action" type="primary">酒店详情</a-button>
    </a-table>
  </div>
</template>

<script>
import computed from "../basicMsg/computed";
import searchForm from "@/components/public/searchForm";
export default {
  name: "BasicModel",
  data() {
    return {
      tableData: [],
      modelIndex: 0,
      activeName: "index0",
      loading: false,
      columns: [],
      data: [
        {
          date: "2018",
          name: "ckc",
          address: "红红火火恍恍惚惚",
          key: 1
        }
      ]
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
            SearchComponent: []
          }
        ];
      }
    }
  },
  mixins: [computed],
  methods: {
    tabClick(tab) {
      this.modelIndex = tab.$data.index;
    },
    showSkeleton() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    handleSearch() {
      console.log(this.typeComponent);
      let searchForm = {};
      this.typeComponent.forEach(element => {
        console.log(element.inputSearch.label);
        searchForm[element.inputSearch.label] = element.inputSearch.value;
      });
      console.log(searchForm);
      // 测试ajax请求
      this.$dataGet(this, 'https://segmentfault.com/api/notice/newest?', {_: '1119745598a1c045b9044b2e43496270'}).then((responce) => {
        console.log(responce)
      })
    },
    handleTabelColumns() {
      this.columns = [];
      this.theads.forEach(v => {
        this.columns.push({
          title: v
        });
      });
      for (let i in this.props) {
        this.columns[i].dataIndex = this.props[i];
      }
      this.columns[this.props.length].scopedSlots = { customRender: "action" };
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.handleTabelColumns();
      },
      deep: true
    },
    key() {}
  },
  mounted() {
    console.log(this.models);
    this.handleTabelColumns();
    this.$dataGet(this, 'https://segmentfault.com/api/notice/newest?', {_: '1119745598a1c045b9044b2e43496270'}).then((responce) => {
        console.log(responce)
      })
  },
  components: {
    searchForm
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  }
};
</script>

 <style lang="scss">
@import "@/sass/mixins/_mixins.scss";

.basic_model {
  .basic_model_operate {
    .operate_search_wrap {
      float: left;
    }
    .operate_search_input {
      width: 160px;
      @include mgR(10px);
    }
    .operate_slefComponent {
      @include mgR(10px);
      //  width: 500px;
    }
  }
}
</style>
 
 