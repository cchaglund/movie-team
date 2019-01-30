<template>
    <div id="home">
    <div id="information">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">   
    
    <div class="container">
        <h1>Kontakta oss</h1>
        <div class="row information-panels justify-content-around">
        <div class="card ring-oss text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
            <div class="card-c">
                <i class="fa fa-phone"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">Ring oss</h5>
                <p class="card-text">Mån-Fre: 10.00 - 18.00</p>
                <p class="card-text">Lördag: 14.00 - 18.00</p>
                <p class="card-text">Söndag: Stängt</p>
                <p class="card-text">0726-579731</p>
            </div>
        </div>

        <div class="card hitta-oss text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
            <div class="card-c">
                <i class="fa fa-map-marker"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">Adress</h5>
                <p class="card-text">Krokvägen 666</p>
                <p class="card-text">111 11, Kiruna</p>
                <p class="card-text">Mån-Sön: 10.00 - 23.00</p>
            </div>
        </div>

        <div class="card maila-oss text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
            <div class="card-c">
                <i class="fa fa-envelope"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">Maila oss</h5>
                <p class="card-text">movie-team@team.se</p>
                <p class="card-text">Mån-Sön: 00.00 - 23.59</p>
                <p class="card-text">Svar inom 1-2 arbetsdagar</p>
            </div>
        </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
</div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    export default{
        name: 'information',
        components: {
            Footer
        }
    }
</script>
<style scoped>

.information {
}

.information-panels {
    background-color: yellow;
    background-color: #6F2232;
    padding:20px;
    border-radius: 5px;
}

h1 {
    color: white;
    font-size: 50px;
    padding-bottom: 20px;

}
h5 {
    font-weight: bold;
}

.card {
    background-color: #6F2232;
    border:none;
}

.card p, h5 {
    color: white;
    margin-bottom: 0;
    font-size: 22px;
}

.container {
padding-top: 80px;
}

i.fa-phone, i.fa-map-marker, i.fa-envelope {
    font-size: 50px;
}

/* Media queries for smaller devices */

@media (min-width: 768px) and (max-width: 992px) {

    .card {
        height: 26vh;
    }

    i.fa-phone, i.fa-map-marker, i.fa-envelope {
        font-size: 30px;
    }
    .card-header {
        padding: 0;
        padding-top: 10px;
    }

    h1 {
        padding-top: 7%;
    }

}
@media (max-width: 768px) {
    .card {
        height: 23vh !important;
    }
    i.fa-phone, i.fa-map-marker, i.fa-envelope {
        font-size: 25px;
    }

    h1 {
        font-size: 30px;
    }

    h5 {
        font-size: 15px;
        margin-bottom: 0 !important;
    }

    .card-text {
        font-size: 14px !important;
    }

    .card-header {
        padding: 0;
        padding-top: 5px;
    }


}

</style>