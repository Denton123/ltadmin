/**
import func from './vue-temp/vue-editor-bridge';
 * 
 * 管理系统的搜索模块
 * @author 舒丹彤 
 * @date 2019/3/25
 * 
 */

 <template>
  <div class="inlineBlock">
    <a-input :placeholder="searchInput.placeholder" v-model="searchItem" class="searchInput" @pressEnter="onSearch"/>
    <a-button type="primary" @click="handleSearch">查询</a-button>
  </div>
</template>

 <script>
export default {
  name: "searchInput",
  data() {
    return {
      searchItem: ""
    };
  },
  props: {
    searchInput: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleSearch() {
      this.$emit("handleSearch", this.searchItem);
    },
    onSearch() {
      this.$emit("handleSearch", this.searchItem)
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.searchItem = ''
      }
    }
  }
};
</script>

 <style lang="scss">
.searchInput {
  width: 200px;
  margin-right: 10px;
}
</style> 
 