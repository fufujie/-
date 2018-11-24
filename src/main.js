// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueHighcharts from 'vue-highcharts' 

Vue.use(VueHighcharts);
Vue.use(mavonEditor);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
 
    moreChart() {
      var options = this.getMoreOptions(this.type);

      if (this.chart) {
          this.chart.destroy();
      };
    // 初始化 Highcharts 图表
    this.chart = new Highcharts.Chart('highcharts-more', options);
    }
  }
})
