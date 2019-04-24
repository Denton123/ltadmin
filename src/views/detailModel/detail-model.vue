/**
 * 
 * 详情基础模块组件
 * @author 舒丹彤 
 * @date 2019/4/9
 * 
 */

 <template>
  <div class="detail">
    <!-- 头部 -->
    <div class="detail_head">
      <h2 class="detail_title">{{title}}-{{}}-详细信息</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <a-divider/>
    </div>
    <!-- 详情页头部表格 -->
    <div class="detail_thead">
      <h4 class="detail_thead_title">供应商-酒店信息</h4>
      <a-table
        :columns="supplierColumns"
        :dataSource="supplierData"
        bordered
        class="mrB10"
        :pagination="false"
      ></a-table>
      <h4 class="detail_thead_title">标准库-酒店信息</h4>
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
    <!-- 搜索 -->
    <div class="detai_search">
       <h4 class="detai_search_title">{{listTitle}}</h4>
      <a-date-picker
        :disabledDate="disabledStartDate"
        format="YYYY-MM-DD"
        v-model="startValue"
        placeholder="入住时间"
        @openChange="handleStartOpenChange"
        @change="handleStartChange"
        class="mrR10"
      />
      <a-date-picker
        :disabledDate="disabledEndDate"
        format="YYYY-MM-DD"
        v-model="endValue"
        placeholder="离店时间"
        :open="endOpen"
        @openChange="handleEndOpenChange"
        @change="handleEndChange"
        class="mrL10"
      />
      <a-button type="primary" @click="handleSearchDate" class="mrL10">搜索</a-button>
    </div>

    <!-- 展示列表 -->
    <div class="detail_list mrT10">
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
import moment from "moment";
import computed from "../detailMsg/computed";
export default {
  name: "detailModel",
  data() {
    return {
      // 供应商表格列
      supplierColumns: [],
      // 标准表格列
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
      ],
      // 开始时间
      startValue: null,
      // 结束时间
      endValue: null,
      // 结束时间是否打开
      endOpen: false
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
          // 列表操作
          listOperate: [],
          // 房间预订
          roomOrder: '',
          // 列表标题
          listTitle: ''
        };
      }
    }
  },
  mixins: [computed],
  methods: {
    // 处理表格头数据
    handleTableColumns(type) {
      this[`${type}Columns`] = [];
      this.theads[`${type}Theads`] && this.theads[`${type}Theads`].forEach(v => {
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
    },
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
      console.log(dateString);
    },
    // 结束日期选择事件
    handleEndChange(date, dateString) {
      console.log(dateString);
    },
    // 点击搜索按钮
    handleSearchDate() {
      console.log(moment(this.startValue).format("YYYY-MM-DD"));
    },
    // 返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    // 展示表格操作按钮
    hanldeListOperate(type, model, key) {
        this.$router.push(`/hotelMenus/${type}/${model}/${key}`)
    }
  },
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("standard");
    this.handleTableColumns("list");
  },
  watch: {
    startValue(val) {
      console.log("val");
    },
    endValue(val) {
      console.log("val");
    }
  }
};
</script>

<style lang="scss">
.detail{
  .detail_head {
  .detail_title {
    font-size: 30px;
    text-align: center;
  }
}
h4{
  font-size: 18px;
  font-weight: 500;
}
.ant-table-thead > tr > th {
  font-weight: bold;
}
.mrL10{
  margin-left: 10px;
}
}

</style>
 
