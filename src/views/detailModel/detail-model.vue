/**
 * 
 * 详情基础模块组件
 * @author 舒丹彤 
 * @date 2019/4/9
 * 
 */

 <template>
  <div class="detail">
    <!-- 头部 -->
    <div class="detail_head whiteblock">
      <h2 class="detail_title">{{title}}-{{}}-详细信息</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <!-- <a-divider/> -->
    </div>
    <!-- 详情页头部表格 -->
    <div class="detail_thead">
      <div class="detail_thead_wrap whiteblock">
        <h4 class="detail_thead_title">供应商-酒店信息</h4>
        <a-table
          :columns="supplierColumns"
          :dataSource="supplierData"
          bordered
          class="mrB10"
          :pagination="false"
        ></a-table>
      </div>
      <div class="detail_thead_wrap whiteblock">
        <h4 class="detail_thead_title">标准库-酒店信息</h4>
        <a-table
          :columns="standardColumns"
          :dataSource="standardData"
          bordered
          :pagination="false"
          class="mrB10"
        >
          <template slot="action" slot-scope="text, record">
            <a-button
              v-for="item in standardOperate"
              type="primary"
              :key="item.title"
              class="block mrB10"
              @click="hanldeStandardOperate(item.type, item.model, record.key)"
            >{{item.title}}</a-button>
          </template>
        </a-table>
      </div>
    </div>
    <!-- 搜索 -->
    <div class="detai_search whiteblock">
      <h4 class="detai_search_title">{{listTitle}}</h4>
      <span>入住时间：</span>
      <a-date-picker
        :disabledDate="disabledStartDate"
        format="YYYY-MM-DD"
        v-model="startValue"
        placeholder="入住时间"
        @openChange="handleStartOpenChange"
        @change="handleStartChange"
        class="mrR10"
      />
      <span class="mrL10">离店时间：</span>
      <a-date-picker
        :disabledDate="disabledEndDate"
        format="YYYY-MM-DD"
        v-model="endValue"
        placeholder="离店时间"
        :open="endOpen"
        @openChange="handleEndOpenChange"
        @change="handleEndChange"
      />
      <a-button type="primary" @click="handleSearchDate" class="mrL10">搜索</a-button>
    </div>

    <!-- 展示列表 -->
    <!-- <div class="detail_list mrT10">
      <a-table :columns="listColumns" :dataSource="listData" bordered>
        <template slot="action" slot-scope="text, record">
          <a-button
            v-for="item in listOperate"
            type="primary"
            :key="item.title"
            class="block mrB10"
            @click="hanldeListOperate(item.type, item.model, record.key)"
          >{{item.title}}</a-button>
        </template>
        <a-table
          slot="expandedRowRender"
          slot-scope="text"
          :columns="innerColumns"
          :dataSource="innerData"
          :pagination="false"
        ></a-table>
      </a-table>
    </div>-->
    <!-- 展示列表 -->
    <a-list
      itemLayout="vertical"
      :dataSource="listData"
      :pagination="pagination"
      class="whiteblock mrT10"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        key="item.name"
        @click="toggleListDetail(item)"
      >
        <a-list-item-meta>
          <a slot="title" class="listTitle">
            {{item.name}}
            <a-icon :type="activeIndex===item.key ? 'up': 'down'"/>
          </a>
          <a-avatar slot="avatar" :src="item.logo"></a-avatar>
          <template slot="description">
            <template v-for="(value, key) in listTag">
              <span>{{value}}:</span>
              <span>{{item[key]}}</span>
              <span class="mrL10 mrR10 separate">|</span>
            </template>
          </template>
        </a-list-item-meta>

        <div v-if="activeIndex===item.key">
          <a-table :columns="innerColumns" :dataSource="innerData" :pagination="false">
            <template slot="action" slot-scope="text, record">
              <a-button
                v-for="item in listOperate"
                type="primary"
                :key="item.title"
                class="block mrB10"
                @click="hanldeListOperate(item.type, item.model, record.key)"
              >{{item.title}}</a-button>
            </template>
            <template slot="price" slot-scope="text, record">
              <a-popover v-if="startValue && endValue !== null">
                <template slot="content">
                  <a-table
                    bordered
                    :columns="priceColumns"
                    :dataSource="priceData"
                    :pagination="false"
                  ></a-table>
                </template>
                <span>{{record.price}}</span>
              </a-popover>
              <span v-else>{{record.price}}</span>
            </template>
          </a-table>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import moment from "moment";
import computed from "../detailMsg/computed";
export default {
  name: "detailModel",
  data() {
    return {
      // 供应商表格列
      supplierColumns: [],
      // 标准表格列
      standardColumns: [],
      // 列表列
      listColumns: [],
      // 列表展开表格
      innerColumns: [],
      // 价格日历列
      priceColumns: [],
      // 列表数据
      listData: [
        {
          key: "1",
          id: "1134234",
          name: "单人房",
          roomname: "kk",
          bedname: "cc",
          condition: "西湖区湖底公园1号",
          statement: "床型： 大床2米 ",
          logo: "http://pavo.elongstatic.com/i/Hotel120_120/nw_FXQ8JLibJK.jpg"
        },
        {
          key: "2",
          id: "1134234",
          name: "单人房",
          roomname: "kk",
          bedname: "cc",
          condition: "西湖区湖底公园1号",
          statement: "床型： 大床2米 ",
          logo: "http://pavo.elongstatic.com/i/Hotel120_120/nw_FXQ8JLibJK.jpg"
        }
      ],
      // 列表展开表格数据
      innerData: [
        {
          key: "1",
          supplycode: "胡彦祖",
          roomcode: 42,
          productcode: "西湖区湖底公园1号",
          price: "￥520",
          test: "价格"
        },
        {
          key: "2",
          supplycode: "胡彦祖",
          roomcode: 42,
          productcode: "西湖区湖底公园1号",
          price: "￥520",
          test: "可用状态"
        }
      ],
      // 价格日历数据
      priceData: [
        {
          key: "1",
          "05-31周五": "￥2222"
        }
      ],
      // 供应商数据
      supplierData: [],
      // 标准数据
      standardData: [
        {
          key: "1",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号"
        }
      ],
      // 开始时间
      startValue: null,
      // 结束时间
      endValue: null,
      // 结束时间是否打开
      endOpen: false,
      // 分页
      pagination: {},
      activeIndex: -1
    };
  },
  props: {
    models: {
      type: Object,
      default() {
        return {
          // 标题
          title: "",
          // 表头
          theads: {},
          // 表格字段
          props: {},
          // 标准操作
          standardOperate: [],
          // 列表操作
          listOperate: [],
          // 房间预订
          roomOrder: "",
          // 列表标题
          listTitle: "",
          listTag: {}
        };
      }
    }
  },
  mixins: [computed],
  methods: {
    // 处理表格头数据
    handleTableColumns(type) {
      this[`${type}Columns`] = [];
      this.theads[`${type}Theads`] &&
        this.theads[`${type}Theads`].forEach(v => {
          this[`${type}Columns`].push({
            title: v
          });
        });
      for (let i in this.props[`${type}Props`]) {
        this[`${type}Columns`][i].dataIndex = this.props[`${type}Props`][i];
        if (this.props[`${type}Props`][i] == "action") {
          this[`${type}Columns`][i].scopedSlots = { customRender: "action" };
        } else if (this.props[`${type}Props`][i] == "price") {
          this[`${type}Columns`][i].scopedSlots = { customRender: "price" };
        }
      }
    },
    // 标准库表格操作
    hanldeStandardOperate(type, model, key) {
      this.$router.push(`/hotelMenus/${type}/${model}/${key}`);
    },
    // 开始不可选择日期
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return startValue < moment().startOf("day");
      }
      return (
        // startValue.valueOf() > endValue.valueOf() ||
        startValue < moment().startOf("day")
      );
    },
    // 结束不可选择日期
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return endValue < moment().startOf("day");
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    // 开始日期打开事件
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    // 结束日期打开事件
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    // 开始日期选择事件
    handleStartChange(date, dateString) {
      console.log(dateString);
    },
    // 结束日期选择事件
    handleEndChange(date, dateString) {
      console.log(dateString);
    },
    // 点击搜索按钮
    handleSearchDate() {
      this.operateDate();
    },
    operateDate() {
      const begin = moment(this.startValue).format("YYYY/MM/DD");
      const end = moment(this.endValue).format("YYYY/MM/DD");
      const allTime = this.$getTimeRange(begin, end);
      this.theads.priceTheads = allTime;
      this.props.priceProps = allTime;
      this.handleTableColumns("price");
    },
    // 返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    // 展示表格操作按钮
    hanldeListOperate(type, model, key) {
      this.$router.push(`/hotelMenus/${type}/${model}/${key}`);
    },
    // 切换显示日历表格
    toggleListDetail(item) {
      console.log(item);
      this.activeIndex = this.activeIndex == item.key ? -1 : item.key;
    }
  },
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("standard");
    // this.handleTableColumns("list");
    this.handleTableColumns("inner");
  },
  computed: {
    dateChange() {
      const { startValue, endValue } = this;
      return { startValue, endValue };
    }
  },
  watch: {
    // 同时监听开始时间和结束时间两个属性
    dateChange(val) {
      const { startValue, endValue } = val;
      if (startValue && endValue !== null) {
        this.operateDate();
      }
    }
  }
};
</script>

<style lang="scss">
.detail {
  .detail_head {
    .detail_title {
      font-size: 30px;
      text-align: center;
    }
    height: 110px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
  }
  .ant-table-thead > tr > th {
    font-weight: bold;
  }
  .mrL10 {
    margin-left: 10px;
  }
  .detail_thead_wrap {
    margin-bottom: 10px;
  }
  .ant-table-wrapper {
    background: #ffffff;
  }
  .ant-avatar {
    border-radius: 0%;
    width: 80px;
    height: 100px;
  }
  .listTitle {
    color: #37d;
    cursor: pointer;
  }
  .ant-list-item {
    cursor: pointer;
  }
  .ant-list-item-content {
    .ant-table-wrapper {
      margin-left: 80px !important;
    }
  }
  .ant-list-item-meta-description {
    color: #555;
  }
  .separate:last-child {
    display: none;
  }
}
</style>
 
