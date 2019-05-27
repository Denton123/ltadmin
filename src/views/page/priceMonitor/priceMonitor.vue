/**
 * 
 * 飞猪御道监控中心页面
 * @author 舒丹彤 
 * @date 2019/5/24
 * 
 */

 <template>
  <div class="priceMonitor">
    <div class="priceMonitor_title whiteblock">
      <h2>飞猪-御道店-监控中心</h2>
    </div>
    <div class="priceMonitor_content whiteblock">
      <a-row :gutter="24">
        <a-col :span="12">
          <div class="priceMonitor_content_feizhu">
            <a-card :title="priceMonitor.feizhu.title">
              <p v-for="item in priceMonitor.feizhu.data" :key="item.tag">
                <a-row :gutter="24" class="feizhu_row">
                  <a-col :span="12" class="feizhu_all" :class="item.conversion ? 'pad' : 'rowHeight'">
                    <div>
                      <p>{{item.tag}}：</p>
                      <p class="size12">{{item.conversion}}</p>
                    </div>
                  </a-col>
                  <a-col :span="12" class="tag_col">
                    <p v-for="(key, value) in item.tagKey" :key="key">{{key}}：{{getData(item.tab)[value]}}</p>
                  </a-col>
                </a-row>
              </p>
            </a-card>
          </div>
        </a-col>
        <a-col :span="12">
          <a-timeline>
            <a-timeline-item v-for="(item, index) in priceMonitor.supplyData" :key="item.title">
              <a-card :title="item.title">
                <div v-for="(subitem, index) in item.data" :key="subitem.tag">
                  <a-row :gutter="24" class="feizhu_row">
                    <a-col
                      :span="12"
                      class="feizhu_all"
                      :class="subitem.conversion ? 'pad' : 'rowHeight'"
                    >
                      <div>
                        <p>{{subitem.tag}}：</p>
                        <p class="size12">{{subitem.conversion}}</p>
                      </div>
                    </a-col>
                    <a-col :span="12" class="tag_col">
                      <p
                        v-for="(key, value) in subitem.tagKey"
                        :key="key"
                      >{{key}}：{{getData(item.tab)[value]}}</p>
                    </a-col>
                  </a-row>
                </div>
              </a-card>
            </a-timeline-item>
          </a-timeline>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import data from "./data";
export default {
  name: "priceMonitor",
  mixins: [data],
  methods: {
    // 获取数据
    getData(tab) {
      // console.log(tab);
      const data = {
        success: "2",
        failure: "3"
      };
      return data;
    }
  }
};
</script>

<style lang="scss">
.priceMonitor {
  p {
    margin-bottom: 0px;
  }
  .priceMonitor_title {
    h2 {
      font-size: 30px;
      text-align: center;
    }
  }
  .priceMonitor_content {
    margin-top: 10px;
    padding: 18% !important;
    padding-top: 64px !important;
  }
  .ant-card-head-title {
    font-weight: 600;
  }
  .feizhu_all {
    background: #4ba4dd;
    // height: 70px;
    border-radius: 5px;
  }
  .ant-card-body {
    color: #fff;
    text-align: center;
  }
  .feizhu_row {
    margin: 1px !important;
  }
  .ant-card-body {
    padding: 0px;
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
  .pad {
    padding: 13px;
  }
  .rowHeight {
    line-height: 70px;
  }
}
</style>
 