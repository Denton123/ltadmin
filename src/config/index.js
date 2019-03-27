import Vue from 'vue'

/* element-ui组件库 */
// import 'element-ui/lib/theme-chalk/index.css';
// import Element from 'element-ui';
// Vue.use(Element);
// import * as elementComponent from './element-ui'

// 如果需要自定义修改主题颜色
// import '@/sass/theme/element-variable.scss';

/* 注册element-ui通用组件 */
// Object.keys(elementComponent).forEach(function (component) {
// 	switch (component) {
// 	case 'Loading':
// 		Vue.use(elementComponent[component].directive)
// 		Vue.prototype.$loading = elementComponent[component].service
// 		break
// 	case 'MessageBox':
// 		Vue.prototype.$msgbox = elementComponent[component]
// 		Vue.prototype.$alert = elementComponent[component].alert
// 		Vue.prototype.$confirm = elementComponent[component].confirm
// 		Vue.prototype.$prompt = elementComponent[component].prompt
// 		break
// 	case 'Notification':
// 		Vue.prototype.$notify = elementComponent[component]
// 		break
// 	case 'Message':
// 		Vue.prototype.$message = elementComponent[component]
// 		break
// 	default:
// 		Vue.use(elementComponent[component])
// 		break
// 	}
// })

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
// require('./http')

