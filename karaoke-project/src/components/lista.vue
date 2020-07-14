<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="@/Logo.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <input class="form-control form-control-lg" id="pesquisar" @keyup.enter="search" placeholder="Digite sua música ou cantor"/>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col d-flex justify-content-end">
          <span><input type="radio" checked name="gender" id="cantor"><label for="cantor">Cantor</label></span>
        </div>
        <div class="col d-flex align-content-start">
          <span><input type="radio" name="gender" id="titulo"><label for="titulo">Musica</label></span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="search()">PESQUISAR</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <h3>{{title}}</h3>
            <table class="table table-bordered table-hover table-dark">
              <tr>
                <td>Cantor</td>
                <td>Musica</td>
                <td>Código</td>
              </tr>
              <tr v-for="(musica,index) in musicas" :key="index">
                <td>{{musica.cantor}}</td>
                <td>{{musica.titulo}}</td>
                <td>{{musica.cod}}</td>
              </tr>
            </table>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// import autoComplete from "./autoComplete";
var response=[];
export default {
  data() {
    return{
      musicas:[],
      version:'',
      title:'',
    }
  },
  methods:{
    async bdCatalogo(){
      if(localStorage.bdCatalogo == undefined){
        let pesquisa = await fetch('./bd.json',{method:'GET'}).then((resp)=>{ 
        return resp.json();
        });
        localStorage.bdCatalogo = JSON.stringify(pesquisa);
      }
       response = JSON.parse(localStorage.bdCatalogo);
      
    },
    search(){
      let input = this.normalizeString(document.getElementById("pesquisar").value);
      this.filterItem(input, 'cantor');
    },
    filterItem(query){
      let tipo = 'Músicas'
      if(document.getElementById('cantor').checked){
        tipo = 'Cantor'
        this.musicas = response.data.filter(el => this.normalizeString(el.cantor).indexOf(query) > -1);
      
      }
      else
        this.musicas = response.data.filter(el => this.normalizeString(el.titulo).indexOf(query) > -1);

      if(this.musicas.length>0)
      this.title=`${tipo} que contém "${document.getElementById("pesquisar").value}"`
      else
      this.title=`Infelizmente não achamos nada referente a "${document.getElementById("pesquisar").value}"`
    },
    normalizeString(value){
      return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }
  },
  created: function(){
    this.bdCatalogo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:40%;
}
ul{
  list-style:none;
}
</style>
