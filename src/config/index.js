import Vue from 'vue'

/* 请求通用接口 */
import easyAjax from '@/util/easyAjax'
Vue.use(easyAjax)

/* 请求通用接口 */
import utils from '@/util/util'
Vue.use(utils)

/* css库 */
require('@/sass/index.scss')

/* ant-design-vue库 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

/* 导入http */
require('./http')

