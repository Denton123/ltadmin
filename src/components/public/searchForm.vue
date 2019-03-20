/**
 * 
 * @description 搜索表单,关联message.js修改组件数据
 * @author 舒丹彤 
 * @date 2019/3/14
 * 
 */
<template>
  <div id="search_components">
    <a-form class="search_form" :form="form" @submit="handleSearch">
      <a-row :gutter="24">
        <a-col :span="8" v-for="item in SearchComponent">
          <!-- 文本框 -->
          <a-form-item v-if="item.type=='text'" :label="item.label">
            <a-input :placeholder="item.placeholder" v-decorator="[`${item.name}`]"/>
          </a-form-item>

          <!-- 数字框 -->
          <a-form-item
            v-else-if="item.type=='num'"
            :label="item.label"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-item style="{display: 'inline'}">
              <a-input-number
                :min="1"
                v-decorator="[`${item.startName}`, {
                  initialValue: 0
              }]"
              />
            </a-form-item>
            <span class="desperate">-</span>
            <a-form-item style="{display: 'inline'}">
              <a-input-number
                :min="1"
                v-decorator="[`${item.endName}`, {
                  initialValue: 0
              }]"
              />
            </a-form-item>
          </a-form-item>

          <!-- 下拉筛选框 -->
          <a-form-item v-else-if="item.type=='select'" :label="item.label">
            <a-select
              v-decorator="[`${item.name}`, {
                  initialValue: `${item.options[0].value}`
              }]"
            >
              <template v-for="selectItem in item.options">
                <a-select-option :value="selectItem.value">{{selectItem.value}}</a-select-option>
              </template>
            </a-select>
          </a-form-item>

          <!-- 日期 -->
          <a-form-item
            v-else-if="item.type=='date'"
            :label="item.label"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-item :style="{ display: 'inline-block'}">
              <a-date-picker v-decorator="[`${item.startDate}`]"/>
            </a-form-item>
            <span class="desperate">-</span>
            <a-form-item :style="{ display: 'inline-block'}">
              <a-date-picker v-decorator="[`${item.endDate}`]"/>
            </a-form-item>
          </a-form-item>
        </a-col>

        <a-col :span="24" :style="{textAlign: 'right'}">
          <a-button type="primary" html-type="submit">查询</a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="handleReset">重置</a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: {
        span: 6
        // xs: { span: 8},
        // sm: { span: 8, offset: 1}
      },
      wrapperCol: {
        span: 6
        // xs: { span: 8, offset: 2 },
        // sm: { span: 8, offset: 1 }
      }
    };
  },
  props: {
    SearchComponent: {
      type: Array,
      default: []
    }
  },
  methods: {
    // 搜索
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (values["startDate"] || values["endDate"] !== undefined) {
          const fields = {
            ...values,
            startDate: values["startDate"].format("YYYY-MM-DD"),
            endDate: values["endDate"].format("YYYY-MM-DD")
          };
          console.log(fields);
        }
        console.log(values);
      });
    },
    // 重置
    handleReset() {
      this.form.resetFields();
    }
  }
};
</script>

<style lang="scss">
#search_components {
  .ant-calendar-picker-input {
    width: 130px;
  }
  .search_form .ant-form-item {
    display: flex;
    margin-bottom: 14px;
  }
  .ant-form-item-children {
    display: flex;
  }

  .desperate {
    line-height: 32px;
    text-align: center;
    margin: 0 5px;
  }
  .ant-form-item-label {
    line-height: 32px;
  }
}
</style>