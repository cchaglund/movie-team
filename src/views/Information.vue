<template>
    <div id="information">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

    <h1>Kontakta oss</h1>
    
    <div class="container">
        <div class="row information-panels justify-content-around">
        <div class="card ring-oss text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
            <div class="card-header">
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
            <div class="card-header">
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
            <div class="card-header">
                <i class="fa fa-envelope"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">Maila oss</h5>
                <p class="card-text">movie-team@movieteam.se</p>
                <p class="card-text">Mån-Sön: 00.00 - 23.59</p>
                <p class="card-text">Svar inom 1-2 arbetsdagar</p>
            </div>
        </div>
        </div>
    </div>

    </div>
</template>

<style scoped>

#app {
    background-color: black;
}

.information {
    padding-top: 6rem;
}

h1 {
    color: white;
    padding-top: 10%;
    font-size: 50px;

}

h5 {
    font-weight: bold;
}

.card {
    background-color: black;
    border-radius: 0;
}

.card p, h5 {
    color: white;
    margin-bottom: 0;
    font-size: 22px;
}

.card-header {
    background-color: black;
}

.card-body {
    padding: 10px !important;
}

.container {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

    .container {
        margin-top: 8vh;
    }
    
    .card-header {
        padding: 0;
        padding-top: 10px;
    }

    h1 {
        padding-top: 7%;
    }

}

@media (max-width: 1024px) {
    h1 {
        padding: 15%;
    }
}

@media (max-width: 768px) {
    .card {
        margin: 2vh;
        height: 23vh !important;
    }

    i.fa-phone, i.fa-map-marker, i.fa-envelope {
        font-size: 25px;
    }

    h1 {
        padding-top: 20%;
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

    .container {
        margin-top: 10vh;
    }
}

</style>