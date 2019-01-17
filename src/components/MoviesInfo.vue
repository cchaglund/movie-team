<template>
  <div>

      <div class="col testimage">
        <iframe width="375" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?">
        <!-- ?modestbranding=1&autohide=1&showinfo=0&controls=0 -->
        </iframe> 
      </div>

      <div class="col title">
        <h4>{{ movie.title }}</h4>
        <h6>{{ movie.length }} min | 
            {{ movie.genre }} | 
            {{ movie.ageRequired }} år</h6>
        <i id="arrowdown" class="fas fa-chevron-down"
           v-on:click="toggleExpand"></i>
      </div>
      <div id="myDIV" v-bind:class="{'active': isActive}">
        <div class="description">
          <p>{{ movie.description }}</p>
       </div>

       <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
       </div>

       <div class="movieInfo">
        <p>Skådespelare: {{ toStringFunction(movie.actors) }}</p>

        <p>Språk: {{ movie.language }}<br>
           Text: {{ movie.subtitles }}</p>
       </div>

       <div class="dropdown">
        <button class="btn dropdown-toggle movieBookButton" type="button" data-toggle="dropdown">Boka<span class="caret"></span></button>
            <ul class="dropdown-menu scrollable">
              <li><a href="#">Datum 1</a></li>®
              <li><a href="#">Datum 2</a></li>
              <li><a href="#">Datum 3</a></li>
              <li><a href="#">Datum 4</a></li>
              <li><a href="#">Datum 5</a></li>
              <li><a href="#">Datum 6</a></li>
            </ul>
        </div>
        <i class="fas fa-chevron-up"
           v-bind:class="{'active': isActive}"
           v-on:click="toggleExpand"></i>
      </div>
</div>
</template>

<script>



export default {
  name: 'MoviesInfo',
  props: {
    movie: Object
  },
  methods: {
    toggleExpand() {
      console.log(this.isActive)
      this.isActive = !this.isActive;
    },
    toStringFunction(value) {
      if (!value) return '' 
      return value.join(', '); 
    }
  },
  data(){
    return{
      isActive: false
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
  #myDIV:not(.active){
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
