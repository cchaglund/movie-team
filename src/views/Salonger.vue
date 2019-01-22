<template>
  <div class="salonger">
    <div class="stylealong">
    <div class="card" style="width: 100vw;">
      <br>
      <h1 class="card-title">Salong 1</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6tmGUcajpJTWMM8zO7kRw2kgn5zSwcLX4Ly1XWPMgNFPOuhS" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">Allmän Information</h3>
        <hr>
        <p class="card-text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>
        <br>
        <hr>
        <br>
        <h2>Specifik information</h2>
        <p>Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>
        <br>
        <hr>
        <br>
        <h2>Regler</h2>
        <p class="card-text">Du har rätt att säga nej till direktmarknadsföring, inklusive analyser som görs i direktmarknadsföringssyfte.
        Du kan välja bort direktmarknadsföring genom att följa instruktionerna i varje marknadsföringsutskick. Om du är medlem i vårt lojalitetsprogram kan du också göra detta på dina medlemsidor under uppdatera medlemsprofil..</p>
      </div>
    </div>
    <div class="card" style="width: 100vw;">
      <br>
      <h1 class="card-title">Salong 2</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6tmGUcajpJTWMM8zO7kRw2kgn5zSwcLX4Ly1XWPMgNFPOuhS" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">Allmän Information</h3>
        <p class="card-text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>
        <br>
        <hr>
        <br>
        <h2>Specifik information</h2>
        <p>Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>
        <br>
        <hr>
        <br>
        <h2>Regler</h2>
        <p class="card-text">Du har rätt att säga nej till direktmarknadsföring, inklusive analyser som görs i direktmarknadsföringssyfte.
        Du kan välja bort direktmarknadsföring genom att följa instruktionerna i varje marknadsföringsutskick. Om du är medlem i vårt lojalitetsprogram kan du också göra detta på dina medlemsidor under uppdatera medlemsprofil..</p>
      </div>
    </div>
    <Footer>
  </Footer>
  </div>
  </div>
  
</template>


<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'salonger',
  props: {
    msg: String
  },
  components: {
  	Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    text-align: center;
    margin: auto;
    
    padding: 30px;
    color:black;
  }
</style>