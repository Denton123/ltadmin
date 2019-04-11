/**
 *  
 * 页面中间列表模块框架
 * @description 中间内容
 * @author 舒丹彤
 * @date 2019/3/5
 * 
 */ 
 
 <template>
     <div class="basic_content">
         <basic-model :models="mds()"/> 
     </div>
 </template>

<script>
import BasicModel from '@/views/basicModel/basic-model'
import hotelMsg from '../basicMsg/hotelMsg'
import adminMsg from '../basicMsg/adminMsg'

export default {
    name: 'BasicContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, hotelMsg, adminMsg)
        return {
            models: modelObj
        }
    },
    components: {
        BasicModel
    },
    methods: {
        mds () {
            let type = this.$route.params.model
            return this.models[type]
        }
    },
    mounted() {
        // console.log(this.models)
    }
}
 </script>
 
 <style lang="scss">
 </style>