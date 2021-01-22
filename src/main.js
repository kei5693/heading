import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

// 컴포넌트 전역등록
import StatusComponents from './Status.vue';
Vue.component('AppStatus', StatusComponents);

// eventBus 선언
export const eventBus = new Vue({
  methods:{
    userWasEdited(date){
      this.$emit('userWasEdited', date);
    }
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
