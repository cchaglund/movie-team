<template>
  <div class="home">
    <div class="movies"
         v-for="filmer in $options.allMoviesJson" :key="">

      <div class="col testimage">
        <iframe width="375" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?">
        <!-- ?modestbranding=1&autohide=1&showinfo=0&controls=0 -->
        </iframe> 
      </div>

      <div class="col title">
        <h4>{{ filmer.title }}</h4>
        <h6>{{ filmer.length }} min | 
            {{ filmer.genre }} | 
            {{ filmer.ageRequired }} år</h6>
      </div>
      <div>
        <i id="arrowdown" class="fas fa-chevron-down" v-on:click="myFunction()"></i>
        <div div id="myDIV">
          <div class="description">
            <p>{{ filmer.description }}</p>
         </div>

         <div class="rating">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
         </div>

         <div class="movieInfo">
          <p>Skådespelare: {{ filmer.actors | toStringFunction }}</p>

          <p>Språk: {{ filmer.language }}<br>
             Text: {{ filmer.subtitles }}</p>
         </div>

         <div class="dropdown">
          <button class="btn dropdown-toggle movieBookButton" type="button" data-toggle="dropdown">Boka<span class="caret"></span></button>
              <ul class="dropdown-menu scrollable dropdown-menu-right dropdownback">
                <li class="whiteborder"><a href="#">Datum 1, klockan 18.00, salong 1</a></li>
                <li class="whiteborder"><a href="#">Datum 2</a></li>
                <li class="whiteborder"><a href="#">Datum 3</a></li>
                <li class="whiteborder"><a href="#">Datum 4</a></li>
                <li class="whiteborder"><a href="#">Datum 5</a></li>
                <li class="whiteborder"><a href="#">Datum 6</a></li>
              </ul>
          </div>
          <i class="fas fa-chevron-up" v-on:click="myFunction()"></i>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
var json = require('@/assets/filmer.json');
export default {
  name: 'AllMovies',
  allMoviesJson: json,
  props: {
    msg: String
  },
  filters: {
  toStringFunction(value) {
    if (!value) return ''
    value = value.toString().replace(/,/g, ", ")
    return value 
  }
},
  methods: {
    myFunction() {

      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      var z = document.getElementById("arrowdown");
      if (x.style.display === "block"){
        z.style.display = "none";
      }
      else {
        z .style.display = "block";
      }
    }
  }
}


</script>
<style>
  div div.ytp-title-text{
    display: none!important;
  }
  iframe{
    border:none;
  }
  .testimage{
    padding:0;
  }
  #myDIV{
    display: none;
  }
  .title{
   background-color: #6F2232;
   padding: 15px;
 }
 .movieTrailer{
   background-color: gray;
   height: 200px;
   text-align: center;
   /*margin-bottom: 5px;*/
 }
 .description,
 .movieInfo{
   padding: 15px;
   text-align: left;
   font-size: 12px;
 }
 .fa-star{
   color: gold;
   font-size: 25px;
   margin: 2px 2px 16px 2px;
 }
 .movieBookButton{
   background-color: #6F2232;
   color: white;
 }
 .scrollable {
  height: auto;
  overflow-x: hidden;
  max-height: 80px;
  border:2px solid #6F2232;
  width:97.5%;
  text-align: center;
  background-color: black;
 }
 .fa-chevron-up,
 .fa-chevron-down{
   font-size: 40px;
   margin: 15px;
 }
 .btn:focus{
  box-shadow:none;
  background-color:red;
  color:black;
 }
 .whiteborder{
  border-bottom:2px solid #6F2232;
 }
 li.whiteborder a{
  color:white;
 }
 .dropdown-menu{
  border-radius:0;
 }
</style>