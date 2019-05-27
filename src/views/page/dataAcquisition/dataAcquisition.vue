/**
 *  
 * 数据收集页面
 * @description 数据收集页面
 * @author 舒丹彤
 * @date 2019/5/27
 * 
 */ 

 <template>
  <div class="profitMonitor">
    <div class="profitMonitor_title whiteblock">
      <h2>飞猪-御道店-订单利润监控</h2>
    </div>
    <div class="profitMonitor_content whiteblock">
      <div class="profitMonitor_date">
        <a-date-picker
          format="YYYY-MM-DD"
          v-model="startValue"
          placeholder="开始时间"
          @openChange="handleStartOpenChange"
          @change="handleStartChange"
          class="mrR10"
        />
        <a-date-picker
          :disabledDate="disabledEndDate"
          format="YYYY-MM-DD"
          v-model="endValue"
          placeholder="结束时间"
          :open="endOpen"
          @openChange="handleEndOpenChange"
          @change="handleEndChange"
          class="mrL10"
        />
      </div>
      <div class="profitMonitor_card">
        <a-timeline>
          <a-timeline-item v-for="(item, idx) in profitData" :key="item.title">
            <a-card :title="item.title">
              <div v-for="(subitem, subIdx) in item.data" :key="subIdx">
                <a-row :gutter="24" class="profit_row">
                  <a-col :span="12" class="profit_all">
                    <div>
                      <p v-for="(key, value) in subitem.tag" :key="key">
                        <span>{{key}}:</span>
                        <span>
                          <span v-if="key.indexOf('数') == -1">￥</span>
                          {{getData(item.label)[value]}}
                        </span>
                      </p>
                    </div>
                  </a-col>
                  <a-col :span="12" class="tag_col">
                    <p v-for="(key, value) in subitem.tagKey" :key="key">
                      <span>{{key}}:</span>
                      <span>
                        <span v-if="key.indexOf('数') == -1">￥</span>
                        {{getData(item.label)[value]}} 
                      </span>
                    </p>
                  </a-col>
                </a-row>
              </div>
            </a-card>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

 <script>
import moment from "moment";
import data from "./data";
export default {
  name: "dataAcquisition",
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false
    };
  },
  mixins: [data],
  methods: {
    // 结束日期不可选
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
    // 开始日期选择事件
    handleStartChange(date, dateString) {
      console.log("startValue");
      console.log(date);
      console.log(dateString);
    },
    // 结束日期选择事件
    handleEndChange(endValue) {
      console.log(endValue, "endValue");
    },
    // 结束日期打开事件
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    // 获取数据
    getData(label) {
      const feizhuData = {
        orderAmount: "111",
        roomNightAmount: "2324",
        subPriceAmount: "2222",
        paymentAmount: "1111",
        avgAmount: "14234",
        profitAmount: "76894"
      };
      return feizhuData;
    }
  },
  watch: {},
  mounted() {
    console.log(this.profitData);
  }
};
</script>

 <style lang="scss">
.profitMonitor {
  &_title {
    h2 {
      font-size: 30px;
      text-align: center;
    }
  }
  &_content {
    margin-top: 10px;
  }
  &_card {
    width: 50%;
    margin-top: 30px;
  }
  .ant-calendar-picker {
    margin-right: 10px;
  }
  .profit_row {
    margin: 1px !important;
  }
  .profit_all {
    background: #4ba4dd;
    border-radius: 5px;
    line-height: 56px;
  }
  .tag_col {
    padding-left: 2px !important;
    padding-right: 0px !important;
    p {
      margin-bottom: 2px !important;
      // height: 34px;
      line-height: 34px;
      border-radius: 5px;
    }
    p:first-child {
      background: #6bd99f;
    }
    p:last-child {
      background: #f3c184;
    }
  }
  .ant-card {
    &-body {
      padding: 0;
      color: #ffffff;
      text-align: center;
    }
    &-head-title {
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>
 