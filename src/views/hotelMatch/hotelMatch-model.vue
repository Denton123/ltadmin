/**
 * 
 * 酒店匹配模块组件
 * @author 舒丹彤 
 * @date 2019/4/9
 * 
 */
<template>
  <div class="hotelMatch">
    <div class="hotelMatch_head">
      <h2 class="hotelMatch_title">{{title}}-{{}}-酒店匹配</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <a-divider/>
    </div>
    <div>
      <a-row>
        <!-- 右侧列表 -->
        <a-col :span="16" :push="8" class="hotelMatch_right">
          <!-- 搜索 -->
          <div class="hotelMatch_search">
            <h4>搜索标准库</h4>
            <span>国内城市：</span>
            <a-input placeholder="请输入城市名称" v-model="searchCityName"/>
            <span>关键词：</span>
            <a-input placeholder="酒店名称/地址" v-model="searchKey" value="{{}}"/>
            <a-button type="primary">查询</a-button>
            <!-- 自定义按钮 -->
            <component
              v-for="(typeOperate,index) in typeComponent"
              :is="typeOperate.component"
              :key="index"
              :params="typeOperate.params"
              :hotelMatchCardTag="hotelMatchCardTag"
              @showModal="handleActionModal(index, 'typeComponent')"
            />
          </div>
          <a-divider/>
          <!-- 表格列表 -->
          <div class="hotelMatch_list">
            <a-table :columns="listColumns" :dataSource="listData" bordered>
              <template slot="actionModal" slot-scope="text, record">
                <a-button
                  type="primary"
                  v-for="(item, index) in actionOperate"
                  :key="item.title"
                  @click="handleActionModal(index, 'actionOperate')"
                >{{item.title}}</a-button>
              </template>
            </a-table>
          </div>
        </a-col>
        <!-- 左侧卡片 -->
        <a-col :span="8" :pull="16" class="hotelMatch_left">
          <a-card :title="`${item.title}`" v-for="(item, index) in hotelMatchCardTag" :key="index">
            <a-button type="primary" slot="extra" v-if="item.hasBtn">下一个</a-button>
            <template v-for="(value, key) in item.tag">
              <p>
                <strong>{{value}}：</strong>
                <span>{{hotelCardDate[key] ? hotelCardDate[key] : ''}}</span>
              </p>
            </template>
          </a-card>
        </a-col>
      </a-row>

      <!-- 弹出模态框 -->
      <msg-modal
        :modalVisible="modalVisible"
        :modalParams="modalParams"
        :hotelMatchCardTag="hotelMatchCardTag"
        @hanldModalCancel="hanldModalCancel"
        @handleModalOk="handleModalOk"
        :confirmLoading="confirmLoading"
      />
    </div>
  </div>
</template>

<script>
import computed from "../hotelMatchMsg/computed";
import msgModal from "@/components/public/msgModal";
export default {
  name: "hotelMatchModel",
  data() {
    return {
      // 卡片数据
      hotelCardDate: {
        city: "北京市",
        hotelId: "00101006",
        name: "7天连锁酒店(北京东四南锣鼓巷店)",
        address: "东四六条45号",
        phone: "010-84017688",
        coordinate:
          "百度--39.936557000/116.428558000 gogole--39.930325000/116.421963000"
      },
      // 搜索城市
      searchCityName: "",
      // 搜索关键词
      searchKey: "",
      // 表格头
      listColumns: [],
      // 表格数据
      listData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          lowPrice: 23
        }
      ],
      // 模态框是否显示
      modalVisible: false,
      // 模态框数据
      modalParams: {},
      // 模态框确认加载
      confirmLoading: false
    };
  },
  props: {
    models: {
      type: Object,
      default() {
        return {
          // 标题
          title: "",
          // 左侧卡片对象key
          hotelMatchCardTag: [],
          // 表头
          theads: [],
          // 表格字段
          props: [],
          // 操作按钮
          typeComponent: [],
          // 模态框操作按钮
          actionOperate: []
        };
      }
    }
  },
  methods: {                                                                                
    //   返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    // 处理表格数据
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
        if (this.props[i] == "actionModal") {
          this.listColumns[i].scopedSlots = { customRender: "actionModal" };
        }
      }
    },
    // 显示模态框
    handleActionModal(index, type) {
      this.modalVisible = true;
      this.modalParams = this[type][index].params;
    },
    // 提交模态框
    handleModalOk() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.confirmLoading = false;
        this.modalVisible = false;
      }, 1000);
    },
    // 取消模态框
    hanldModalCancel() {
      this.modalVisible = false;
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns();
  },
  components: {
    msgModal
  }
};
</script>

<style lang="scss">
.hotelMatch {
  .ant-card-head-title {
    font-weight: bold;
  }
  .hotelMatch_head {
    .hotelMatch_title {
      font-size: 30px;
      text-align: center;
    }
  }
  .hotelMatch_left {
    border-right: 1px solid #000;
  }
  .hotelMatch_right {
    padding-left: 10px;
  }
  .hotelMatch_search {
    .ant-input {
      width: 200px;
      margin-right: 10px;
    }
    h4 {
      font-size: 18px;
    }
  }
}
</style>