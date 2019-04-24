/**
 * 
 * 预定表单模块组件
 * @author 舒丹彤 
 * @date 2019/4/17
 * 
 */

 <template>
  <div class="orderForm">
    <a-form :form="form" @submit="handleOrderSubmit">
      <template v-for="item in orderComponent">
        <!-- 时间 -->
        <a-form-item v-if="item.type=='time'">
          <a-form-item label="入住时间" class="checkTime">
            <a-date-picker
              :disabledDate="disabledStartDate"
              format="YYYY-MM-DD"
              placeholder="入住时间"
              @openChange="handleStartOpenChange"
              @change="handleStartChange"
              v-decorator="[`${item.checkInName}`]"
            />
          </a-form-item>
          <a-form-item label="离店时间" class="checkTime mrR10">
            <a-date-picker
              :disabledDate="disabledEndDate"
              format="YYYY-MM-DD"
              placeholder="离店时间"
              :open="endOpen"
              @openChange="handleEndOpenChange"
              @change="handleEndChange"
              v-decorator="[`${item.checkOutName}`]"
            />
          </a-form-item>
        </a-form-item>
        <!-- 数量 -->
        <a-form-item v-else-if="item.type == 'num'" :label="item.label">
          <a-select
            v-decorator="[`${item.name}`, {
                  initialValue: `${item.options[0].value}`
              }]"
            class="orderSelect"
            @change="handleSelectChange"
          >
            <template v-for="selectItem in item.options">
              <a-select-option :key="selectItem.key" :value="selectItem.value">{{selectItem.value}}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <!-- 姓名 -->
        <a-form-item
          v-else-if="item.type=='name'"
          label="入住人姓名"
          v-for="(input,index) in inputArr"
          :key="index"
        >
          <a-input placeholder="入住人姓名"/>
        </a-form-item>
        <!-- input -->
        <a-form-item v-else-if="item.type=='text'" :label="item.label">
          <a-input :placeholder="item.placeholder" v-decorator="[`${item.name}`]"/>
        </a-form-item>
      </template>
      <a-form-item class="fr">
        <a-button type="primary" class="mrR10">验单</a-button>
        <a-button type="primary" html-type="submit">提交订单</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

 <script>
import moment from "moment";
export default {
  name: "orderForm",
  data() {
    return {
      form: this.$form.createForm(this),
      startValue: null,
      endValue: null,
      endOpen: false,
      formItemLayout: {
        labelCol: {
          xs: { span: 16 },
          sm: { span: 2 }
        },
        wrapperCol: {
          xs: { span: 16 },
          sm: { span: 16 }
        }
      },
      inputArr: 1
    };
  },
  props: {
    orderComponent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    // 开始不可选择日期
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return startValue < moment().endOf("day");
      }
      return (
        startValue.valueOf() > endValue.valueOf() ||
        startValue < moment().endOf("day")
      );
    },
    // 结束不可选择日期
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
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
      this.startValue = date;
    },
    // 结束日期选择事件
    handleEndChange(date, dateString) {
      this.endValue = date;
    },
    // 提交预定订单
    handleOrderSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (values["checkInTime"] || values["checkOutTime"] !== undefined) {
          const fields = {
            ...values,
            checkInTime: values["checkInTime"].format("YYYY-MM-DD"),
            checkOutTime: values["checkOutTime"].format("YYYY-MM-DD")
          };
          console.log(fields);
        }
      });
    },
    // 下拉选择入住人数
    handleSelectChange(value) {
      this.inputArr = value;
    }
  },
  mounted() {}
};
</script>

 <style lang="scss">
.orderForm {
  .checkTime {
    display: inline-block;
  }
  .orderSelect {
    width: 200px;
  }
}
</style>
 