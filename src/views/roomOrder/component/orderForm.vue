/**
 * 
 * 预定表单模块组件
 * @author 舒丹彤 
 * @date 2019/4/17
 * 
 */

 <template>
  <div class="orderForm whiteblock">
    <a-form :form="form" @submit="handleOrderSubmit">
      <template v-for="item in orderComponent">
        <!-- 时间 -->
        <a-form-item v-if="item.type=='time'">
          <a-form-item label="入住时间" class="checkTime" v-bind="dateItemLayout">
            <a-date-picker
              :disabledDate="disabledStartDate"
              format="YYYY-MM-DD"
              placeholder="入住时间"
              v-model="startValue"
              @openChange="handleStartOpenChange"
              @change="handleStartChange"
            />
          </a-form-item>
          <a-form-item label="离店时间" class="checkTime mrL10" v-bind="dateItemLayout">
            <a-date-picker
              :disabledDate="disabledEndDate"
              format="YYYY-MM-DD"
              placeholder="离店时间"
              v-model="endValue"
              :open="endOpen"
              @openChange="handleEndOpenChange"
              @change="handleEndChange"
            />
          </a-form-item>
        </a-form-item>
        <!-- 数量 -->
        <a-form-item v-else-if="item.type == 'num'" :label="item.label" v-bind="formItemLayout">
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
          :label="item.label"
          v-for="(input,index) in inputArr"
          :key="input.name"
          v-bind="formItemLayout"
        >
          <a-input placeholder="入住人姓名" 
          v-decorator="[`${item.name}${index+1}`]"/>
        </a-form-item>
        <!-- input -->
        <a-form-item v-else-if="item.type=='text'" :label="item.label" v-bind="formItemLayout">
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
          span: 4
        },
        wrapperCol: {
          span: 6
        }
      },
      dateItemLayout: {
        labelCol: {
          span: 10
        },
        wrapperCol: {
          span: 10
        }
      },
      inputArr: 1,
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
    },
    // 结束日期选择事件
    handleEndChange(date, dateString) {
    },
    // 提交预定订单
    handleOrderSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (this.startValue !== null || this.endValue !== null) {
          const fields = {
            ...values,
            checkInTime: this.startValue.format("YYYY-MM-DD"),
            checkOutTime: this.endValue.format("YYYY-MM-DD")
          };
          console.log(fields);
        }
      });
    },
    // 下拉选择入住人数
    handleSelectChange(value) {
      this.inputArr = value;
    },
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
        // this.operateDate();
        this.$emit('transferTime', {startValue, endValue})
      }
    }
  },
  mounted() {
  }
};
</script>

 <style lang="scss">
.orderForm {
  // width: 50%;
  overflow: hidden;
  .checkTime {
    display: inline-block;
  }
  .orderSelect {
    width: 200px;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-input {
    width: 200px;
  }
}
</style>
 