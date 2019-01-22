<template>
  <div class="block">

      <div class="col videoplayer">
        <iframe v-bind:src="movie.youtubeTrailers" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>

      <div class="col title mobileinfo">
        <h4>{{ movie.title }}</h4>
        <h6>{{ movie.length }} min | 
            {{ movie.genre }} | 
            {{ movie.ageRequired }} år</h6>
      </div>
      <i id="arrowdown" class="fas fa-chevron-down"
           v-on:click="toggleExpand"></i>
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
              <li class="whiteborder"><a href="#">Datum 1</a></li>
              <li class="whiteborder"><a href="#">Datum 2</a></li>
              <li class="whiteborder"><a href="#">Datum 3</a></li>
              <li class="whiteborder"><a href="#">Datum 4</a></li>
              <li class="whiteborder"><a href="#">Datum 5</a></li>
              <li class="whiteborder"><a href="#">Datum 6</a></li>
            </ul>
        </div>
        <i id="arrowup"class="fas fa-chevron-up"
           v-bind:class="{'active': isActive}"
           v-on:click="toggleExpand"></i>
      </div>
      <div class="descriptiontwo">
        <div class="col title fullwidthinfo">
          <h4>{{ movie.title }}</h4>
          <h6>{{ movie.length }} min | 
              {{ movie.genre }} | 
              {{ movie.ageRequired }} år</h6>
        </div>
          <p class="Allinfotext">{{ movie.description }}</p>
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
        <button class="btn dropdown-toggle movieBookButtontwo" type="button" data-toggle="dropdown">Boka<span class="caret"></span></button>
            <ul class="dropdown-menu scrollable">
              <li class="whiteborder"><a href="#">Datum 1</a></li>
              <li class="whiteborder"><a href="#">Datum 2</a></li>
              <li class="whiteborder"><a href="#">Datum 3</a></li>
              <li class="whiteborder"><a href="#">Datum 4</a></li>
              <li class="whiteborder"><a href="#">Datum 5</a></li>
              <li class="whiteborder"><a href="#">Datum 6</a></li>
            </ul>
        </div>
       </div>
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
  .block{
    width:100%;
    margin-right:5px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    margin:0;
    padding:70px 90px 70px 90px;
  }
  #myDIV:not(.active){
    display: none;
  }
  /*---------Film info---------*/
  .title{
    background-color: #6F2232;
    padding: 15px;
  }
  .description, .movieInfo{ 
    font-size: 12px;
  }
  .mobileinfo{
    display: none;
  }
  .fullwidthinfo{
    margin-left:10px;
    width:97%;
  }
  .Allinfotext, .movieInfo{
    text-align: left;
    padding:20px;
    margin-top: 10px;
  }
  /*---------Boka knapp---------*/
  .movieBookButton, .movieBookButtontwo{
    background-color: #6F2232;
    margin-bottom: 10px;
    color: white;
  }
  .scrollable {
    height: auto;
    overflow-x: hidden;
    max-height: 140px;
    border:2px solid #6F2232;
    width:60.5%;
    text-align: center;
    background-color: black;
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
  /*---------Videospelare---------*/
  iframe{
    border:none;
    width:40vw;
    height:30vw;
    margin-right: 80px;
  }
  .videoplayer{
    padding:0;
  }
  /*---------Pilknappar---------*/
  .fa-chevron-up, .fa-chevron-down{
     font-size: 40px;
     margin: 15px;
  }
  #arrowdown{
    display: none;
  }
  i#arrowdown.fas.fa-chevron-down:hover, i#arrowup.fas.fa-chevron-up:hover{
    color:#6F2232;
    text-shadow: 0 0 10px #ffffff;
  }
  /*---------Inte användt---------*/
  .fa-star{
    color: gold;
    font-size: 25px;
    margin: 2px 2px 16px 2px;
  }
  .rating{
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .block{
      width:100%;
      margin:0;
      margin-right:0;
      display:block;
      padding:0;
    }
    .descriptiontwo{
      display: none;
    }
    #arrowdown, #arrowup{
      display: inline-block;
    }
    iframe{
      width:100%;
      height:300px;
      margin:0;
    }
    .mobileinfo{
      display: block;
    }
  }
</style>


