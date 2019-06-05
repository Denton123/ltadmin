/**
 * 
 * 房型匹配模块组件
 * @author 舒丹彤 
 * @date 2019/4/11
 * 
 */
<template>
  <div class="roomMatch">
    <div class="roomMatch_head whiteblock">
      <h2 class="roomMatch_title">{{title}}-{{}}-房型匹配</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <!-- <a-divider/> -->
    </div>
    <!-- 房型匹配头部表格 -->
    <div class="roomMatch_thead">
      <div class="detail_thead_wrap whiteblock mrB10">
        <h4 class="roomMatch_thead_title">供应商-酒店信息</h4>
        <a-table
          :columns="supplierColumns"
          :dataSource="supplierData"
          bordered
          class="mrB10"
          :pagination="false"
        ></a-table>
      </div>
      <div class="detail_thead_wrap whiteblock mrB10">
        <h4 class="roomMatch_thead_title">标准库-酒店信息</h4>
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
    </div>

    <div class="roomMatchList whiteblock">
      <h4 class="roomMatch_thead_title">供应商-酒店房型</h4>
      <a-table :columns="listColumns" :dataSource="listData" bordered>
        <template slot="action" slot-scope="text, record">
          <a-button
            v-if="record.key==2 && isHideMatch"
            v-for="item in modifyOperate"
            type="primary"
            :key="item.title"
            class="block mrB10"
            @click="hanldeListOperate()"
          >{{item.title}}</a-button>

          <div v-else>
            <a-select style="width:120px" :defaultValue="listOperate.selectOption[0].value">
              <template v-for="selectItem in listOperate.selectOption">
                <a-select-option
                  :key="selectItem.title"
                  :value="selectItem.value"
                >{{selectItem.title}}</a-select-option>
              </template>
            </a-select>
            <a-button
              class="mrL10"
              type="primary"
              v-for="(btn, index) in listOperate.operateBtn"
              :key="btn.title"
              @click="handleActionModal(index, btn.title)"
            >{{btn.title}}</a-button>
          </div>
        </template>
      </a-table>
    </div>

    <!-- 弹出模态框 -->
    <msg-modal
      :modalVisible="modalVisible"
      :modalParams="modalParams"
      @handleModalCancel="handleModalCancel"
      @handleModalOk="handleModalOk"
      :confirmLoading="confirmLoading"
    />
  </div>
</template>

<script>
import computed from "../roomMatchMsg/computed";
import msgModal from "@/components/public/msgModal";
export default {
  name: "roomMatchModel",
  data() {
    return {
      // 供应商列
      supplierColumns: [],
      // 标准列
      standardColumns: [],
      // 列表列
      listColumns: [],
      // 列表数据
      listData: [
        {
          key: "1",
          name: "胡ss彦祖",
          age: 42,
          address: "西湖区湖底公园1号"
        },
        {
          key: "2",
          name: "胡ss彦祖",
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
      // 模态框是否显示
      modalVisible: false,
      // 模态框数据
      modalParams: {},
      // 模态框确认加载
      confirmLoading: false,
      isHideMatch: true
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
          // 列操作
          modifyOperate: [],
          listOperate: {},
        };
      }
    }
  },
  methods: {
    // 返回上一级页面
    backTo() {
      this.$router.go(-1);
    },
    // 处理表格头数据
    handleTableColumns(type) {
      this[`${type}Columns`] = [];
      this.theads[`${type}Theads`] &&
        this.theads[`${type}Theads`].forEach(v => {
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
    // 弹出模态框操作
    handleActionModal(index, title) {
      this.modalVisible = true;
      this.modalParams = this.listOperate.operateBtn[index].params;
    },
    handleModalOk() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.confirmLoading = false;
        this.modalVisible = false;
      }, 1000);
    },
    // 取消模态框
    handleModalCancel() {
      this.modalVisible = false;
    },
    // 修改匹配操作
    hanldeListOperate() {
      this.isHideMatch = false;
    }
  },
  mixins: [computed],
  mounted() {
    this.handleTableColumns("supplier");
    this.handleTableColumns("standard");
    this.handleTableColumns("list");
  },
  components: {
    msgModal
  }
};
</script>

<style lang="scss">
.roomMatch {
  .roomMatch_head {
    height: 110px;
    margin-bottom: 10px;
  }
  .roomMatch_title {
    font-size: 30px;
    text-align: center;
  }
  .roomMatch_thead_title {
    font-size: 18px;
  }
  .ant-table-thead > tr > th {
    font-weight: bold;
  }
}
</style>