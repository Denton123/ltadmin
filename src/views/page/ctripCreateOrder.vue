/
* @description 携程下单页面
* @author 舒丹彤 
* @date 2019/3/25
* */

<template>
  <div class="ctripOrder">
    <div class="ctripOrder_title whiteblock">
      <h2>携程-预定页</h2>
    </div>
    <div class="whiteblock mrT10">
      <a-row :gutter="24">
        <a-col :span="12">
          <div class="orderForm">
            <h2>预订信息</h2>
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item label="携程预订链接" v-bind="formItemLayout">
                <a-row :gutter="24">
                  <a-col :span="16">
                    <a-input v-decorator="['link']"/>
                  </a-col>
                  <a-col :span="8">
                    <a-button type="primary">解析链接</a-button>
                  </a-col>
                </a-row>
              </a-form-item>
              <a-row :gutter="24">
                <a-col :span="12">
                  <a-form-item label="酒店ID" v-bind="formItemLayout">
                    <a-input v-decorator="['hotelId']"/>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="酒店名称" v-bind="formItemLayout">
                    <a-input v-decorator="['hotelName']"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="12">
                  <a-form-item label="房型ID" v-bind="formItemLayout">
                    <a-input v-decorator="['roomId']"/>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="房型名称" v-bind="formItemLayout">
                    <a-input v-decorator="['roomName']"/>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="12">
                  <a-form-item label="入住时间" v-bind="formItemLayout">
                    <a-date-picker
                      :disabledDate="disabledStartDate"
                      format="YYYY-MM-DD"
                      v-model="startValue"
                      placeholder="入住时间"
                      @openChange="handleStartOpenChange"
                      @change="handleStartChange"
                      class="mrR10"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="离店时间" v-bind="formItemLayout">
                    <a-date-picker
                      :disabledDate="disabledEndDate"
                      format="YYYY-MM-DD"
                      v-model="endValue"
                      placeholder="离店时间"
                      :open="endOpen"
                      @openChange="handleEndOpenChange"
                      @change="handleEndChange"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-form-item label="房间数量" v-bind="formItemLayout">
                <a-select v-decorator="['roomnum', {initialValue: 1}]" @change="handleSelectChange">
                  <template v-for="selectItem in selectoptions">
                    <a-select-option
                      :key="selectItem.key"
                      :value="selectItem.value"
                    >{{selectItem.value}}</a-select-option>
                  </template>
                </a-select>
              </a-form-item>
              <a-form-item
                label="入住人姓名"
                v-bind="formItemLayout"
                v-for="(input,index) in inputArr"
                :key="index"
              >
                <a-input placeholder="入住人姓名" v-decorator="[`stayman${index}`]"/>
              </a-form-item>
              <a-form-item label="联系人姓名" v-bind="formItemLayout">
                <a-input placeholder="联系人姓名" v-decorator="['person']"/>
              </a-form-item>
              <a-form-item label="手机号码" v-bind="formItemLayout">
                <a-input placeholder="手机号码" v-decorator="['phone']"/>
              </a-form-item>
              <a-form-item label="销售价格" v-bind="formItemLayout">
                <a-input placeholder="销售价格" v-decorator="['price']"/>
              </a-form-item>
              <a-form-item class="fr">
                <a-button type="primary" class="mrR10">试单</a-button>
                <a-button type="primary" html-type="submit">提交订单</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col :span="12" v-if="priceColumns.length !== 0">
          <div class="pricecalendar">
            <h2>价格日历</h2>
            <a-table bordered :columns="priceColumns" :dataSource="priceData" :pagination="false"/>
          </div>
          <div class="ctripSum">
            <span>携程结算总额: ￥{{}}</span>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ctripOrder",
  data() {
    let selectArr = [];
    for (let i = 1; i <= 9; i++) {
      selectArr.push({
        value: i,
        key: i
      });
    }
    return {
      form: this.$form.createForm(this),
      // formItemLayout: {
      //   labelCol: {
      //     span: 6
      //   },
      //   wrapperCol: {
      //     span: 18
      //   }
      // },
      selectoptions: selectArr,
      // 入住人
      inputArr: 1,
      // 开始时间
      startValue: null,
      // 结束时间
      endValue: null,
      // 结束时间是否打开
      endOpen: false,
      priceColumns: [],
      priceTheads: [],
      priceData: [
        {
          "05-22周三": "￥234",
          key: "1",
          "05-23周四": "￥34234",
          "05-24周五": "￥989"
        }
      ],
      priceProps: []
    };
  },
  methods: {
    // 下拉选择事件
    handleSelectChange(value) {
      this.inputArr = value;
    },
    // 提交表单
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.startValue || this.endValue !== null) {
            const fields = {
              ...values,
              startTime: this.startValue.format("YYYY-MM-DD"),
              endTime: this.endValue.format("YYYY-MM-DD")
            };
            console.log(fields);
          }
        }
      });
    },
    // 开始不可选择日期
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return startValue < moment().startOf("day");
      }
      return startValue < moment().startOf("day");
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
    operateDate() {
      const begin = moment(this.startValue).format("YYYY/MM/DD/ddd");
      const end = moment(this.endValue).format("YYYY/MM/DD/ddd");
      const allTime = this.$getTimeRange(begin, end);
      this.priceTheads = allTime;
      this.priceProps = allTime;
      this.handleTableColumns();
    },
    // 处理表格头数据
    handleTableColumns() {
      this.priceColumns = [];
      this.priceTheads &&
        this.priceTheads.forEach(v => {
          this.priceColumns.push({
            title: v
          });
        });
      for (let i in this.priceProps) {
        this.priceColumns[i].dataIndex = this.priceProps[i];
      }
    }
  },
  mounted() {
    this.$getTimeRange("2019/5/22/周三", "2019/05/31/周五");
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
      if (startValue !== null && endValue !== null) {
        this.operateDate();
      }
    }
  }
};
</script>

<style lang="scss">
.ctripOrder {
  padding: 10px;
  .ctripOrder_title {
    h2 {
      font-size: 30px;
      text-align: center;
    }
  }
  .orderForm,
  .pricecalendar {
    overflow-x: auto;
    padding: 50px;
    h2 {
      font-size: 20px;
    }
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  .ctripSum {
    width: 100%;
    border-top: 1px solid #ddd;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
