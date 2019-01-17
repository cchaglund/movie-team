<template>
  <div class="home">
    
  </div>
</template>



<script>


export default {
  name: 'AllMovies',
  props: {
    msg: String
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

<!-- filters: {
    toStringFunction(value) {
      if (!value) return ''
      value = value.toString().replace(/,/g, ", ")
      return value 
    }
  
}, -->