import Vue from 'vue'
import App from '@/App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Lista from '@/components/lista.vue'

Vue.component('lista-tag',Lista);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeMount: function(){
    console.log("Bem vindo à lista de músicas do Augusto!!!")
  }
}).$mount('#app')
