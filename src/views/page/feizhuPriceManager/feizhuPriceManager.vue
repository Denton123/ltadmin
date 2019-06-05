/
* @description 飞猪加价策略
* @author 舒丹彤 
* @date 2019/5/22
* */

<template>
  <div class="feizhuPriceManager">
    <div class="feizhuPriceManager_title whiteblock">
      <h2>飞猪-御道店-加价策略管理</h2>
    </div>
    <div class="mrT10">
      <div v-for="(item, index) in priceData" :key="index" class="listblock">
        <div class="firstTitle">
          <h3>{{item.firstTitle}}</h3>
        </div>
        <div v-for="(subitem, subIdx) in item.subData" :key="subIdx">
          <div class="secondTitle">
            <h4>{{subitem.title}}</h4>
          </div>
          <div class="pushPrice mrT10">
            <a-table
              bordered
              :columns="columns(subitem.theads, subitem.props)"
              :dataSource="subitem.data"
              :pagination="false"
            >
              <template slot="inputNum" slot-scope="text, record">
                <a-input-number :min="1" :max="200" v-model="record.priceMin"/>
                <span class="mrL10 mrR10">至</span>
                <a-input-number :min="1" :max="200" v-model="record.priceMax"/>
              </template>
              <template slot="ration" slot-scope="text, record">
                <a-input-number :min="1" :max="200" v-model="record.priceration"/>
                <span class="mrL10 mrR10">%</span>
              </template>
              <template slot="switch" slot-scope="text, record">
                <a-switch
                  :defaultChecked="text === 1 || text === '金牌' ?  true : false"
                  @change="swicthChange"
                  :checkedChildren="text === '金牌' || text === '普通' ? '金牌' : '开启'"
                  :unCheckedChildren="text === '金牌' || text === '普通' ? '普通' : '关闭'"
                />
              </template>
              <template slot="input" slot-scope="text, record">
                <a-input v-model="record.fixedValue"/>
              </template>
              <template slot="select" slot-scope="text, record">
                <a-select :defaultValue="text">
                  <a-select-option value="酒店">酒店</a-select-option>
                  <a-select-option value="美团">美团</a-select-option>
                  <a-select-option value="第三方">第三方</a-select-option>
                </a-select>
              </template>
              <template slot="action" slot-scope="text, record">
                <a-popconfirm
                  title="确定删除吗？"
                  v-if="subitem.data.length"
                  @confirm="() => onDelete(subIdx, index, record.key)"
                >
                  <a-button type="danger">删除</a-button>
                </a-popconfirm>
              </template>
            </a-table>
          </div>
          <a-button
            v-for="(btn, idx) in subitem.operationBtn"
            :key="btn.title"
            :class="btn.btnStyle"
            class="mrT10 mrR10"
            @click="handleBtn(btn.title,subIdx, index)"
          >{{btn.title}}</a-button>
        </div>
        <!-- 策略测试 -->
        <div class="mrT10" style="display: flex;">
          <div class="tableFooter inlineBlock">
            <div class="inlineBlock tableFooter_left">
              <h4>
                <a-icon type="pushpin"/>
                {{item.footer.title}}：
              </h4>
              <div class="inlineBlock originalPrice">
                <span>原始价格：</span>
                <a-input v-model="item.footer.originalPrice" width="100"/>
              </div>
            </div>
            <div class="inlineBlock respectiveprice">
              <p v-for="tagitem in item.footer.priceTag" :key="tagitem.tag">
                <a-tag v-if="tagitem.tag" color="#108ee9">{{tagitem.tag}}</a-tag>
                <span
                  v-for="(key, value) in tagitem.tagKey"
                  class="respectiveprice_span"
                  :key="value"
                >
                  <span>{{key}}：</span>
                </span>
              </p>
            </div>
          </div>
          <a-button
            type="primary"
            class="inlineBlock mrL10"
            @click="submitStrategy(item.subData, item.label)"
          >提交{{item.footer.btnTitle}}策略</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./data";
export default {
  name: "feizhuPriceManager",
  mixins: [data],
  methods: {
    // 处理表格列
    columns(data, props) {
      let columnsdata = [];
      data.forEach(i => {
        columnsdata.push({
          title: i
        });
      });
      for (let i in props) {
        columnsdata[i].dataIndex = props[i];
        switch (props[i]) {
          case "priceMin":
            columnsdata[i].scopedSlots = { customRender: "inputNum" };
            break;
          case "priceration":
            columnsdata[i].scopedSlots = { customRender: "ration" };
            break;
          case "rationevidence":
          case "integer":
          case "hoteltype":
            columnsdata[i].scopedSlots = { customRender: "switch" };
            break;
          case "fixedValue":
            columnsdata[i].scopedSlots = { customRender: "input" };
            break;
          case "action":
            columnsdata[i].scopedSlots = { customRender: "action" };
            break;
          case "invoice":
            columnsdata[i].scopedSlots = { customRender: "select" };
            break;
        }
      }
      return columnsdata;
    },
    // 开关操作
    swicthChange(checked) {
      console.log(checked);
    },
    // 删除操作
    onDelete(subIdx, index, key) {
      const dataSource = [...this.priceData[index].subData[subIdx].data];
      this.priceData[index].subData[subIdx].data = dataSource.filter(
        item => item.key !== key
      );
    },
    // 操作添加策略按钮
    handleBtn(title, subIdx, index) {
      if (title === "添加策略") {
        let dataSource = [...this.priceData[index].subData[subIdx].data];
        let count = dataSource.length;
        let newData = {};
        for (let i in dataSource[0]) {
          newData[i] = 0;
        }
        newData["key"] = count;
        newData["num"] = count + 1;
        this.priceData[index].subData[subIdx].data = [...dataSource, newData];
        count = count + 1;
        console.log(this.priceData[index].subData[subIdx].data);
      }
    },
    // 提交策略操作
    submitStrategy(data, label) {
      let form = {};
      data.forEach(v => {
        v.title === "推送价格策略"
          ? (form.postPriceStrategys = [...v.data])
          : (form.validatePriceStrategys = [...v.data]);
      });
      form.enumDistributors = "FliggyYD";
      form.enumGds = label;
      console.log(form);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.feizhuPriceManager {
  padding: 10px;
  .feizhuPriceManager_title {
    h2 {
      font-size: 30px;
      text-align: center;
      margin-bottom: 0;
    }
  }
  .firstTitle {
    font-size: 20px;
    height: 30px;
    width: 100%;
    background: #ebf5ff;
    border-left: 4px solid rgba(26, 188, 156, 1);
    padding-left: 10px;
    h3 {
      color: #199ed8;
    }
  }
  .secondTitle {
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    width: 100%;
    border-left: 4px solid rgba(26, 188, 156, 1);
    padding-left: 10px;
    margin: 10px 0 0 20px;
    h4 {
      color: #199ed8;
    }
  }
  .orangeBtn {
    color: #fff;
    background: #ffa847;
    border-color: #ffa847;
    &:hover {
      border-color: #ffa847;
    }
  }
  .greenBtn {
    color: #fff;
    background: #2ecc71;
    border-color: #2ecc71;
    &:hover {
      border-color: #2ecc71;
    }
  }
  .tableFooter {
    width: 80%;
    border: 1px solid rgba(214, 235, 255, 1);
    background: #ebf5ff;
    border-radius: 10px;
    padding-left: 10px;
    display: table;
    h4 {
      font-size: 16px;
      color: #199ed8;
      font-weight: bold;
      display: inline-block;
    }
    p {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  .listblock {
    margin-bottom: 20px;
    background: #fff;
    padding: 10px;
  }
  .originalPrice {
    margin-left: 60px;
    .ant-input {
      width: 100px;
    }
  }
  .respectiveprice {
    display: table-cell;
    vertical-align: middle;
    .respectiveprice_span {
      margin-right: 60px;
    }
  }
  .ant-table-thead > tr > th {
    font-weight: bold;
  }
  .tableFooter_left {
    display: table-cell;
    vertical-align: middle;
  }
  .ant-tag {
    margin-top: 10px;
  }
  .ant-tag:last-of-type {
    margin-bottom: 10px;
  }
}
</style>