<template>
 <div class="salonger">
    <div class="stylealong"> 
    
    <div class="card" style="width: 100%;">  
      <img src="../images/salong1.jpg" class="card-img" alt="salong 1">
      <div class="card-body">                 
        <h3 class="card-title">Allmän Information</h3>        
        <hr>
        <p class="card-text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>
        <br>     
        <h2>Specifik information</h2>
        <p class="text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>             
        <br>
        <h2>Regler</h2>
        <p class="text">Du har rätt att säga nej till direktmarknadsföring, inklusive analyser som görs i direktmarknadsföringssyfte.
        Du kan välja bort direktmarknadsföring genom att följa instruktionerna i varje marknadsföringsutskick. Om du är medlem i vårt lojalitetsprogram kan du också göra detta på dina medlemsidor under uppdatera medlemsprofil..</p>
      </div>
    </div>

    <div class="card" style="width: 100%;">        
      <img src="../images/salong2.jpg" class="card-img" alt="salong 2">
      <div class="card-body">  
        <h3 class="card-title">Allmän Information</h3>
        <p class="card-text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>               
        <br>
        <h2>Specifik information</h2>
        <p class="text">Ljudfilmen hade introducerats i USA i slutet av 1920-talet. Efter en viss skepsis kom nyheten snabbt igång i Sverige och 1930 producerades tio spelfilmer, varav redan sex var ljudfilmer. Den första svenskproducerade ljudfilmen premiärvisades den 10 augusti 1930 på Palladium. Den hette För hennes skull (1930) och hade Gösta Ekman d.ä. i huvudrollen. Nu gällde det att snabbt bygga om Stockholms biografer till ljudfilm. Först ut var Palladium och Skandia-Teatern.</p>              
        <br>
        <h2>Regler</h2>
        <p class="text">Du har rätt att säga nej till direktmarknadsföring, inklusive analyser som görs i direktmarknadsföringssyfte.
        Du kan välja bort direktmarknadsföring genom att följa instruktionerna i varje marknadsföringsutskick. Om du är medlem i vårt lojalitetsprogram kan du också göra detta på dina medlemsidor under uppdatera medlemsprofil..</p>
      </div>
    </div>  
  </div>
  <Footer></Footer>
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

<style scoped>

.salonger{
  background-color: black;
}
  .card{
    text-align: left;
    margin: auto;         
    color: white;    
    align-items: center;
    background-color: black;   
  }
  img {    
  border-radius: 8px;   
  float: left;
  width: 700px;
  height: auto;   

}
.card-body{
  padding-top: 3%;
  padding-right: 15%;
  padding-left: 15%;
}
h2, h3{
  text-align: center;
}


@media only screen and (max-width: 600px) {
  h2, .text {
    display: none;
  }
  img, .card-body{
    width:100%;
  }
  .card{
    padding-top: 15%;
  }  
}  

</style>