/**
 * 
 * 房间预订模块组件
 * @author 舒丹彤 
 * @date 2019/4/17
 * 
 */
<template>
  <div class="roomOrder">
    <!-- 头部 -->
    <div class="roomOrder_head whiteblock">
      <h2 class="roomOrder_title">{{title}}-{{}}-预定页</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <!-- <a-divider/> -->
    </div>
    <!-- 预订页头部表格 -->
    <div class="roomOrder_thead">
      <div class="detail_thead_wrap whiteblock">
        <h4 class="roomOrder_thead_title">供应商-酒店信息</h4>
        <a-table
          :columns="supplierColumns"
          :dataSource="supplierData"
          bordered
          class="mrB10"
          :pagination="false"
        ></a-table>
      </div>
      <div class="detail_thead_wrap whiteblock">
        <h4 class="roomOrder_thead_title">房型信息</h4>
        <a-table
          :columns="roomColumns"
          :dataSource="roomData"
          bordered
          :pagination="false"
          class="mrB10"
        ></a-table>
      </div>
    </div>
    <a-row :gutter="24" class="whiteblock order-form-row">
      <a-col :span="12">
        <!-- 预定信息表单 -->
        <div class="roomOrder_form">
          <h4 class="roomOrder_form_title">预订信息</h4>
          <order-form :orderComponent="orderComponent" @transferTime="transferTime"></order-form>
        </div>
      </a-col>
      <a-col :span="12">
        <!-- 价格日历 -->
        <div class="roomOrder_list" v-if="priceColumns.length !== 0">
          <h4>价格日历</h4>
          <a-table :columns="priceColumns" :dataSource="priceData" bordered :pagination="false"></a-table>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import computed from "../roomOrderMsg/computed";
import orderForm from "./component/orderForm";
import moment from "moment";
export default {
  name: "roomOrderModel",
  data() {
    return {
      // 供应商列
      supplierColumns: [],
      // 供应商数据
      supplierData: [],
      // 房型列
      roomColumns: [],
      // 房型数据
      roomData: [],
      // 列表列
      listColumns: [],
      // 列表数据
      listData: [],
      priceColumns: [],
      priceData: [
        {
          "06-07周五": "￥234",
          key: "1",
          "06-08周六": "￥34234",
          "06-09周日": "￥989"
        }
      ]
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
          // 订单操作按钮
          orderComponent: []
        };
      }
    }
  },
  methods: {
    //   返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    // 处理表格列
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
        }
      }
    },
    transferTime(date) {
      const begin = moment(date.startValue).format("YYYY/MM/DD/ddd");
      const end = moment(date.endValue).format("YYYY/MM/DD/ddd");
      const allTime = this.$getTimeRange(begin, end);
      this.theads.priceTheads = allTime;
      this.props.priceProps = allTime;
      this.handleTableColumns("price");
    },
    doSomething(){
      console.log('iii')
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("room");
    this.handleTableColumns("list");
  },
  components: {
    orderForm
  }
};
</script>

<style lang="scss">
.roomOrder {
  h4 {
    font-size: 20px;
  }
  .roomOrder_head {
    .roomOrder_title {
      font-size: 30px;
      text-align: center;
    }
    height: 110px;
    margin-bottom: 10px;
  }
  .detail_thead_wrap {
    // background: #ffffff;
    margin-bottom: 10px;
    // padding: 10px;
  }
  .roomOrder_form {
    overflow-x: auto;
    margin-bottom: 15px;
  }
  .roomOrder_list {
    overflow-x: auto;
    h4 {
      margin-bottom: 10px !important;
    }
  }
  .order-form-row {
    margin-left: 2px !important;
  }
}
</style>