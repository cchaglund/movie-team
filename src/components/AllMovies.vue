<template>
  <div class="home">
    <div class="movies"
         v-for="filmer in $options.allMoviesJson">

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
        <i id="arrowdown" class="fas fa-chevron-down"
           v-bind:class="{'active': this.isActive}"
           v-on:click="toggleExpand"></i>
      </div>
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
            <ul class="dropdown-menu scrollable">
              <li><a href="#">Datum 1</a></li>
              <li><a href="#">Datum 2</a></li>
              <li><a href="#">Datum 3</a></li>
              <li><a href="#">Datum 4</a></li>
              <li><a href="#">Datum 5</a></li>
              <li><a href="#">Datum 6</a></li>
            </ul>
        </div>
        <i class="fas fa-chevron-up"
           v-bind:class="{'active': this.isActive}"
           v-on:click="toggleExpand"></i>
      </div>
    </div>
  </div>
</template>



<script>
var json = require('@/assets/filmer.json');

export default {
  name: 'AllMovies',
  props: {
    msg: String
  },
  methods: {
    toggleExpand() {
      this.isActive = true
    },
    toStringFunction(value) {
      if (!value) return ''
      value = value.toString().replace(/,/g, ", ")
      return value 
    }
  },
  data(){
    return{
      isActive: false,
      allMoviesJson: json
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
   max-height: 65px;
   overflow-x: hidden;
 }
 .fa-chevron-up,
 .fa-chevron-down{
   font-size: 40px;
   margin: 15px;
 }
</style>

<!-- filters: {
    toStringFunction(value) {
      if (!value) return ''
      value = value.toString().replace(/,/g, ", ")
      return value 
    }
  
}, -->