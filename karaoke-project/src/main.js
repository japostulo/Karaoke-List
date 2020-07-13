import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Lista from './components/lista.vue'

Vue.component('lista-tag',Lista);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeMount: function(){
    console.log("MONTOU")
    this.musicas="FOI MONTADO";
  }
}).$mount('#app')
