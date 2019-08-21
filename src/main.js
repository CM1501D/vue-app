// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Element from 'element-ui'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import store from './vuex/index'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Vuex)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)



/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

console.log(vue)