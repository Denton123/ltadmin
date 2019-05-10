/**
 *  
 * 订单详情模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/4/11
 * 
 */ 
 
 <template>
  <div class="orderDetail_content mrL10 mrR10">
    <orderDetail-model :models="mds()"/>
  </div>
</template>

<script>
import orderDetailModel from "@/views/orderDetail/orderDetail-model";
import orderDetailMsg from "@/views/orderDetailMsg/orderDetailMsg";
export default {
  name: "orderDetail",
  data() {
    let modelObj = {};
    Object.assign(modelObj, orderDetailMsg);
    return {
      models: modelObj
    };
  },
  components: {
    orderDetailModel
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