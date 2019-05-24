/
* @description 搜索结果
* @author 舒丹彤 
* @date 2019/3/22
* */
<template>
  <div class="searchResult">
    <a-card title="搜索结果">
      <div v-for="item in searchResultMsg">
        <span class="searchResult_tab">{{item.tab}}</span>
        <a-row :gutter="16" class="searchRow">
          <a-col :span="4" v-for="(value, key) in item.tag" class="mrR10" :key="key">
            <a-card :bordered="false">
              <span>{{value}}</span>
              <span>：{{`${searchData[key] ? searchData[key]: ''}家`}}</span>
            </a-card>
          </a-col>
        </a-row>
        <!-- <span v-for="(value, key) in item.tag" class="mrR10">
        <strong>{{value}}</strong>
        <span>：{{`${searchData[key] ? searchData[key]: ''}家`}}</span>
        </span>-->
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "searchResult",
  props: {
    searchResultMsg: {
      type: Array,
      default: []
    },
    searchData: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss">
// .ant-row:first-of-type{
//   border-bottom: 1px solid #ddd;
// }
.searchResult{
  .ant-card{
    background: #e6f7ff !important;
  }
  border: 1px solid #91d5ff;
  background: #e6f7ff !important;
  .ant-card-head-title{
    font-weight: bold;
    font-size: 20px;
  }
  .searchResult_tab{
    font-size: 16px;
    // font-weight: 600;
    color: #1890ff;
  }
  .ant-card-head{
    color: #1890ff;
    border-bottom: 1px solid #91d5ff;
  }
  .ant-card-wider-padding .ant-card-body{
    padding: 14px 32px;
  }
}
</style>