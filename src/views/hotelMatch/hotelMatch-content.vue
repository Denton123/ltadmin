/**
 *  
 * 酒店匹配模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/4/9
 * 
 */ 
 
 <template>
  <div class="hotelMatch_content mrL10 mrR10">
    <hotelMatch-model :models="mds()"/>
  </div>
</template>

<script>
import hotelMatchModel from "@/views/hotelMatch/hotelMatch-model";
import hotelMatchMsg from "@/views/hotelMatchMsg/hotelMatchMsg";
export default {
  name: "DetailContent",
  data() {
    let modelObj = {};
    Object.assign(modelObj, hotelMatchMsg);
    return {
      models: modelObj
    };
  },
  components: {
    hotelMatchModel
  },
  methods: {
    mds() {
      let type = this.$route.params.model;
      return this.models[type];
    }
  },
  mounted() {
    console.log(this.models);
  }
};
</script>
 
 <style lang="scss">
</style>