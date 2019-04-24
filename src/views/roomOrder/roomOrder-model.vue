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
    <div class="roomOrder_head">
      <h2 class="roomOrder_title">{{title}}-{{}}-预定页</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <a-divider/>
    </div>
    <!-- 预订页头部表格 -->
    <div class="roomOrder_thead">
      <h4 class="roomOrder_thead_title">供应商-酒店信息</h4>
      <a-table
        :columns="supplierColumns"
        :dataSource="supplierData"
        bordered
        class="mrB10"
        :pagination="false"
      ></a-table>
      <h4 class="roomOrder_thead_title">房型信息</h4>
      <a-table
        :columns="roomColumns"
        :dataSource="roomData"
        bordered
        :pagination="false"
        class="mrB10"
      ></a-table>
    </div>
    <!-- 预定信息表单 -->
    <div class="roomOrder_form">
      <h4 class="roomOrder_form_title">预订信息</h4>
      <order-form :orderComponent="orderComponent"></order-form>
    </div>
    <!-- 价格日历 -->
    <div class="roomOrder_list">
      <a-table :columns="listColumns" :dataSource="listData" bordered>
      </a-table> 
    </div>
  </div>
</template>

<script>
import computed from "../roomOrderMsg/computed";
import orderForm from './component/orderForm'
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
      listData: []
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
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("room");
    this.handleTableColumns("list");
  },
  components:{
    orderForm
  }
};
</script>

<style lang="scss">
.roomOrder {
  h4 {
    font-size: 18px;
  }
  .roomOrder_head {
    .roomOrder_title {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>