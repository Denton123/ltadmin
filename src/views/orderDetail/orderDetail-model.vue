/**
 * 
 * 订单详情模块组件
 * @author 舒丹彤 
 * @date 2019/4/11
 * 
 */
<template>
  <div class="orderDetail">
    <!-- 头部 -->
    <div class="orderDetail_head">
      <h2 class="orderDetail_title">订单详情信息</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <a-divider/>
    </div>
    <!-- 操作 -->
    <div class="orderDetail_operate">
      <a-select defaultValue="全部" style="width: 200px;" @change="handleChange">
        <a-select-option
          v-for="(item,index) in selectOptions"
          :key="index"
          :value="item.value"
        >{{item.value}}</a-select-option>
      </a-select>
      <a-button type="primary" class="mrL10" @click="handleSubmit">提交</a-button>
      <a-button type="primary" class="mrL10">刷新</a-button>
    </div>
    <!-- 表格 -->
    <div class="orderDetail_record mrT10">
      <div id="orderDetail_table_head">
        <span>订单备注记录</span>
        <a-icon
          :type="tableShow ? 'up-circle' : 'down-circle'"
          class="fr mrT10"
          @click="handleFold"
        />
      </div>
      <a-table
        v-if="tableShow"
        class
        bordered
        :columns="listColumns"
        :dataSource="tableData"
        :pagination="false"
        :rowSelection="{onchange: onSelectChange}"
      ></a-table>
    </div>

    <!-- 添加描述 -->
    <div class="addStatement mrT10">
      <a-input class="inlineBlock" v-model="statementValue"/>
      <a-button type="primary" class="mrL10" @click="addStatement">添加描述</a-button>
    </div>
    <!-- 卡片数据 -->
    <div class="orderDetail_card">
      <a-row>
        <a-col :span="8" v-for="(item,index) in cardTag" :key="index">
          <h4>{{item.title}}</h4>
          <a-card>
            <template v-for="(value, key) in item.tag">
              <p>
                <strong>{{value}}：</strong>
                <span></span>
              </p>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import computed from "../orderDetailMsg/computed";
export default {
  name: "orderDetailModel",
  data() {
    return {
      selectOptions: [
        {
          value: "全部"
        },
        {
          value: "等待全部供应商确认"
        },
        {
          value: "供应商已确认"
        },
        {
          value: "已发货至供销商"
        },
        {
          value: "订单异常"
        },
        {
          value: "人工处理中"
        },
        {
          value: "人工预订失败"
        },
        {
          value: "客人已离店"
        },
        {
          value: "NoShow"
        },
        {
          value: "取消单"
        },
        {
          value: "客户申请退款"
        }
      ],
      selectValue: undefined,
      listColumns: [],
      tableData: [
        {
          time: "1",
          source: "John Brown",
          person: 32,
          statement: "New York No. 1 Lake Park"
        }
      ],
      tableShow: true,
      statementValue: ""
    };
  },
  props: {
    models: {
      type: Object,
      default() {
        return {
          theads: [],
          props: [],
          cardTag: []
        };
      }
    }
  },
  methods: {
    //   返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    handleSubmit() {
      console.log(this.selectValue);
    },
    handleChange(value) {
      console.log(value);
    },
    handleTableColumns() {
      this.listColumns = [];
      this.theads &&
        this.theads.forEach(item => {
          this.listColumns.push({
            title: item
          });
        });
      for (let i in this.props) {
        this.listColumns[i].dataIndex = this.props[i];
        if (this.props[i] == "actions") {
          this.listColumns[i].scopedSlots = { customRender: "action" };
        }
      }
    },
    handleFold() {
      this.tableShow = !this.tableShow;
      let tableHead = document.getElementById("orderDetail_table_head");
      tableHead.style.borderBottom = !this.tableShow
        ? "1px solid #e8e8e8"
        : "none";
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    addStatement() {
      console.log(this.statementValue);
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns();
  }
};
</script>

<style lang="scss">
.orderDetail {
  .orderDetail_title {
    font-size: 30px;
    text-align: center;
  }
  #orderDetail_table_head {
    line-height: 30px;
    padding: 0 10px;
    height: 33px;
    border: 1px solid #e8e8e8;
    border-bottom: none;
  }
  .addStatement {
    .ant-input {
      width: 200px;
    }
  }
  .orderDetail_card {
    margin-top: 30px;
    h4 {
      font-size: 18px;
      text-align: center;
    }
  }
}
.ant-divider {
  background: #e8e8e8;
}
</style>