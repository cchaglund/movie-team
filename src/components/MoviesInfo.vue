
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

       <div class="movieInfo">
        <p>Skådespelare: {{ movie.actors }}</p>

        <p>Språk: {{ movie.language }}<br>
           Text: {{ movie.subtitles }}</p>
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
        <div class="movieInfo">
          <p>Skådespelare: {{ movie.actors }}</p>

          <p>Språk: {{ movie.language }}<br>
             Text: {{ movie.subtitles }}</p>
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
  /*div.block{
    border-bottom:1px solid #6F2232;
  }*/
  .block{
    width:100%;
    margin-right:5px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    margin:0;
    padding:35px 90px 35px 90px;
  }
  #myDIV:not(.active){
    display: none;
  }
  .allafilmerhtwo{
    padding-top: 75px;
  }
  /*---------Film info---------*/
  .title{
    background-color: #6F2232;
    padding: 15px;
  }
  .movieInfo{ 
    font-size: 12px;
  }
  .mobileinfo{
    display: none;
  }
  .fullwidthinfo{
    margin-left:10px;
    width:97%;
    border-radius: 5px;
  }
  .Allinfotext, .movieInfo, .description{
    text-align: left;
    padding-left:20px;
    padding-right: 20px;
    padding-top: 15px;
    margin:0;
  }
  .descriptiontwo{
    font-size: 19px;
  }
  .movieInfo{
    font-size: 16px;
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

