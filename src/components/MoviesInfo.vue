<template>
  <div>
    <div class="movies" v-for="filmer in allMoviesJson">

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
           v-on:click="toggleExpand"></i>
      </div>
      <div id="myDIV" v-bind:class="{'active': isActive}">
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
        <p>Skådespelare: {{ toStringFunction(filmer.actors) }}</p>

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
           v-bind:class="{'active': isActive}"
           v-on:click="toggleExpand"></i>
      </div>
    </div>
</div>
</template>

<script>

import json from '@/assets/filmer.json'


export default {
  name: 'MoviesInfo',
  props: {
    msg: String
  },
      created: function(){
      console.log(this.allMoviesJson)
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
      isActive: false,
      allMoviesJson: json
    }
  }
}
</script>

