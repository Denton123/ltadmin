/**
 * 
 * 酒店匹配模块组件
 * @author 舒丹彤 
 * @date 2019/4/9
 * 
 */
<template>
  <div>
    <div class="hotelMatch_head">
      <h2 class="hotelMatch_title">{{title}}-{{}}-酒店匹配</h2>
      <a-button type="primary" class="fr mrB10" @click="backTo">
        <a-icon type="rollback"/>返回
      </a-button>
      <a-divider/>
    </div>
    <div>
      <a-row>
        <a-col :span="16" :push="8" class="">
            test
          <!-- <a-card :title="`${title}-待匹配酒店信息`"></a-card> -->
        </a-col>
        <!-- 左侧卡片 -->
        <a-col :span="8" :pull="16" class="hotelMatch_left">
          <a-card :title="`${title}-待匹配酒店信息`">
              <a-button type="primary" slot="extra">下一个</a-button>
              <strong></strong>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import computed from "../hotelMatchMsg/computed";
export default {
  name: "hotelMatchModel",
  data() {
    return {};
  },
  props: {
    models: {
      type: Object,
      default() {
        return {
          title: ""
        };
      }
    }
  },
  methods: {
    //   返回上一级页面
    backTo() {
      this.$router.go(-1);
    }
  },
  mixins: [computed]
};
</script>

<style lang="scss">
.hotelMatch_head {
  .hotelMatch_title {
    font-size: 30px;
    text-align: center;
  }
}
.hotelMatch_left{
    border-right: 1px solid #000;
}
</style>