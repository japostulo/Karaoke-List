<template>
  <div id="app">
    <div class="container">
      <table class="table table-bordered table-dark">
          <tr>
            <td>Cantor</td>
            <td>Numero</td>
            <td>Música</td>
          </tr>
          <tr v-for="(musica,index) in musicas" :key="index">
            <td>{{musica.Musica}}</td>
            <td>{{index}}</td>
            <td>{{musica.inicio}}</td>
          </tr>
        </table>
    </div>
   
  </div>
</template>

<script>
// import music from './musicas.js'
export default {
  data() {
    return{
      musicas:{
        '18483': {
        Artista: "19",
        Musica: "Ano Kami Hikohki Kumorizora Watte",
        inicio: "Genki Desu Ka Kimi Wa Ima Mo",
        }, 
        '59463' : {
        Artista: "112",
        Musica: "Only You",
        inicio: "",
        }, '06549' : {
        Artista: "365",
        Musica: "São Paulo",
        inicio: "Tem Dias Que Eu Digo Não Invento No Meu",
        }, '50001' : {
        Artista: "1 Kilo",
        Musica: "Deixe Me Ir",
        inicio: "",
        }, '59461' : {
        Artista: "10 Years",
        Musica: "Wasteland",
        inicio: "",
        }, '04920' : {
        Artista: "10Cc",
        Musica: "I'M Not In Love",
        inicio: "I'M Not In Love So Don'T Forget It",
        }, '59462' : {
        Artista: "10Cc",
        Musica: "Donna",
        inicio: "",
        }, '01039' : {
        Artista: "14 Bis",
        Musica: "Bola De Meia Bola De Gude",
        inicio: "Há Um Menino Há Um Moleque",
        }, '03755' : {
        Artista: "14 Bis",
        Musica: "Linda Juventude",
        inicio: "Zabelê, Zumbi, Besouro Vespa Fabricando",
        }, '06074' : {
        Artista: "14 Bis",
        Musica: "Planeta Sonho",
        inicio: "Aqui Ninguém Mais Ficará De...",
        }, '06197' : {
        Artista: "14 Bis",
        Musica: "Todo Azul Do Mar",
        inicio: "Foi Assim Como Ver O Mar A ...",
        }, '07392' : {
        Artista: "14 Bis",
        Musica: "Natural",
        inicio: "Penso Em Você No Seu Jeito De",
        }
      },
    }
  },
  methods:{

  }
}
// console.log(music);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
