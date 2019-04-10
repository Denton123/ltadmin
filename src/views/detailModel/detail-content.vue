/**
 *  
 * 详情页面中间列表模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/4/8
 * 
 */ 
 
 <template>
  <div class="detail_content mrL10 mrR10">
    <detail-model :models="mds()"/>
  </div>
</template>

<script>
import DetailModel from "@/views/detailModel/detail-model";
import detailMsg from "@/views/detailMsg/detailMsg";
export default {
  name: "DetailContent",
  data() {
    let modelObj = {};
    Object.assign(modelObj, detailMsg);
    return {
      models: modelObj
    };
  },
  components: {
    DetailModel
  },
  methods: {
    mds() {
      let type = this.$route.params.model;
      return this.models[type];
    }
  },
  mounted() {
    // console.log(this.models)
  }
};
</script>
 
 <style lang="scss">
</style>