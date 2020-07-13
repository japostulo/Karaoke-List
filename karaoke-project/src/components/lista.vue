<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="./Logo.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <input class="form-control form-control-lg" id="pesquisar" placeholder="Digite sua música ou cantor">
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
            <table class="table table-bordered table-dark">
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
var response=[];
export default {
  data() {
    return{
      musicas:[],
      searchArray:[],
      version:'',
      tableSearch:false,
      val:5,
      title:'',
    }
  },
  methods:{
    async bdMusicas(){
      response = await fetch('./bd.json',{method:'GET'}).then((resp)=>{ 
        return resp.json();
      });
    },
    search(){
      let input = document.getElementById("pesquisar").value;
      this.filterItem(input);
    },
    filterItem(query){
      if(document.getElementById('cantor').checked){
        //normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        this.musicas = response.data.filter(el => el.cantor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1);
        this.title=`Cantores que contém "${document.getElementById("pesquisar").value}"`
      }else{
        this.musicas = response.data.filter(el => el.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1);
        this.title=`Musicas que contém "${document.getElementById("pesquisar").value}"`
      }
    },
  },
  created: function(){
    this.bdMusicas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:30%;
}
ul{
  list-style:none;
}
</style>
