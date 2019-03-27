/
* @description 搜索结果
* @author 舒丹彤 
* @date 2019/3/22
* */
<template>
  <a-card title="搜索结果">
    <div v-for="item in searchResultMsg">
      {{item.tab}}
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
</style>