/**
 *  
 * 房型匹配模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/4/9
 * 
 */ 
 
 <template>
  <div class="roomOrder_content mrL10 mrR10">
    <roomOrder-model :models="mds()"/>
  </div>
</template>

<script>
import roomOrderModel from "@/views/roomOrder/roomOrder-model";
import roomOrderMsg from "@/views/roomOrderMsg/roomOrderMsg";
export default {
  name: "roomOrderContent",
  data() {
    let modelObj = {};
    Object.assign(modelObj, roomOrderMsg);
    return {
      models: modelObj
    };
  },
  components: {
    roomOrderModel
  },
  methods: {
    mds() {
      let type = this.$route.params.model;
      return this.models[type];
    }
  },
  mounted() {
    // console.log(this.models);
  }
};
</script>
 
 <style lang="scss">
</style>