	/**
	 * ====================================================================
	 *功 能：js 入口
	----------------------------------------------------------------------
	 *修改记录 ：
	 *日 期  版本 修改人 修改内容
     *
	 *2019-07-26 v0.0.1 zhangzhenqing 创建
	====================================================================
	 */
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  //简写
  render: h => h(App),
  //挂载，引入路由
  router
  // render: function (createElement) {
  //   return createElement(App);
  // }
  // render: createElement => createElement(App)然后用h代替createElement，使用箭头函数来写
})
