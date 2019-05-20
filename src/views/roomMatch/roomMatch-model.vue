/**
 * 
 * 房型匹配模块组件
 * @author 舒丹彤 
 * @date 2019/4/11
 * 
 */
<template>
  <div class="roomMatch">
    <div class="roomMatch_head whiteblock">
      <h2 class="roomMatch_title">{{title}}-{{}}-详情信息</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <!-- <a-divider/> -->
    </div>
    <!-- 房型匹配头部表格 -->
    <div class="roomMatch_thead">
      <div class="detail_thead_wrap whiteblock mrB10">
        <h4 class="roomMatch_thead_title">供应商-酒店信息</h4>
        <a-table
          :columns="supplierColumns"
          :dataSource="supplierData"
          bordered
          class="mrB10"
          :pagination="false"
        ></a-table>
      </div>
      <div class="detail_thead_wrap whiteblock mrB10">
        <h4 class="roomMatch_thead_title">标准库-酒店信息</h4>
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

    <div class="roomMatchList whiteblock">
      <h4 class="roomMatch_thead_title">供应商-酒店房型</h4>
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
      </a-table>
    </div>
  </div>
</template>

<script>
import computed from "../roomMatchMsg/computed";
export default {
  name: "roomMatchModel",
  data() {
    return {
      // 供应商列
      supplierColumns: [],
      // 标准列
      standardColumns: [],
      // 列表列
      listColumns: [],
      // 列表数据
      listData: [
        {
          key: "1",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号"
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
          // 标准操作
          standardOperate: [],
          // 列操作
          listOperate: []
        };
      }
    }
  },
  methods: {
    // 返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
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
        }
      }
    },
    // 标准库表格操作
    hanldeStandardOperate(type, model, key) {
      this.$router.push(`/hotelMenus/${type}/${model}/${key}`);
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("standard");
    this.handleTableColumns("list");
  }
};
</script>

<style lang="scss">
.roomMatch {
  .roomMatch_head {
    height: 110px;
    margin-bottom: 10px;
  }
  .roomMatch_title {
    font-size: 30px;
    text-align: center;
  }
  .roomMatch_thead_title {
    font-size: 18px;
  }
  .ant-table-thead > tr > th {
    font-weight: bold;
  }
}
</style>