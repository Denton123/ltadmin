/**
 * 
 * 房型匹配模块组件
 * @author 舒丹彤 
 * @date 2019/4/11
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
  </div>
</template>

<script>
import computed from "../roomOrderMsg/computed";
export default {
  name: "roomOrderModel",
  data() {
    return {
      supplierColumns: [],
      supplierData: [],
      roomColumns: [],
      roomData: []
    };
  },
  props: {
    models: {
      type: Object,
      default() {
        return {
          title: "",
          theads: {},
          props: {}
        };
      }
    }
  },
  methods: {
    //   返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
  },
  mixins: [computed],
  mounted() {
  }
};
</script>

<style lang="scss">
.roomOrder_head {
  .roomOrder_title {
    font-size: 30px;
    text-align: center;
  }
}
</style>