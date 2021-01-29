import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

// 컴포넌트 전역등록
// Vue.component(tagName, options)
import StatusComponents from './Status.vue';
Vue.component('AppStatus', StatusComponents);

// eventBus 선언
// eventBus.userWasEdited(new Date());
export const eventBus = new Vue({
  methods:{
    userWasEdited(date){
      this.$emit('userWasEdited', date);
    },
    listEdit(memo, index){
      this.$emit('listEdit', memo, index)
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
