/**
 *  
 * 房型匹配模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/4/9
 * 
 */ 
 
 <template>
  <div class="roomMatch_content mrL10 mrR10">
    <roomMatch-model :models="mds()"/>
  </div>
</template>

<script>
import roomMatchModel from "@/views/roomMatch/roomMatch-model";
import roomMatchMsg from "@/views/roomMatchMsg/roomMatchMsg";
export default {
  name: "roomMatch",
  data() {
    let modelObj = {};
    Object.assign(modelObj, roomMatchMsg);
    return {
      models: modelObj
    };
  },
  components: {
    roomMatchModel
  },
  methods: {
    mds() {
      let type = this.$route.params.model;
      return this.models[type];
    }
  },
  mounted() {
    console.log(this.models)
  }
};
</script>
 
 <style lang="scss">
</style>