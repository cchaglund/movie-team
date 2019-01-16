<template>
  <div class="home">
    <div class="movies">
  <!---  <p>{{ msg }}</p> -->
      <p>{{msg}}</p>
      <div class="col movieTrailer">
         <i class="far fa-play-circle align-middle"></i>
      </div>

      <div class="col title">
        <h4>Titel</h4>
        <h6>Längd | Genre | Ålder</h6>
      </div>

      <div class="description">
        <p>Filmen utspelas i norra Italien sommaren 1983. En ung amerikansk-italienare blir förälskad i en amerikansk student som kommer för att studera och bo hos hans familj.</p>
        <p>Tillsammans upplever de en oförglömlig sommar - full av musik, mat och kärlek - som för evigt kommer att förändra dem.</p>
     </div>

     <div class="rating">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
     </div>

     <div class="movieInfo">
      <p>Skådespelare: Leonardo DiCaprio, Johnny Depp, Bruce Willys.</p>

      <p>Språk: Engelska<br>
      Text: Svenska</p>

      <p>Premiär: 25 Januari</p>
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
      <i class="fas fa-chevron-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieLong',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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