/
* @description 搜索结果
* @author 舒丹彤 
* @date 2019/3/22
* */
<template>
  <div class="searchResult">
    <h2>搜索结果</h2>
    <a-card title="搜索结果">
      <div v-for="item in searchResultMsg">
        <span class="searchResult_tab">{{item.tab}}</span>
        <a-row :gutter="16" class="searchRow">
          <a-col :span="5" v-for="(value, key) in item.tag" class="mrR10" :key="key">
            <a-card :bordered="false">
              <strong>{{value}}</strong>
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
  .ant-card-head-title{
    font-weight: bold;
    font-size: 20px;
  }
  .searchResult_tab{
    font-size: 16px;
    font-weight: 600;
  }
}
</style>