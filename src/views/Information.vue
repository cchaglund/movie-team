<template>
    <div id="information">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

    <h1>Information</h1>
    
    <div class="container">
    <div class="row information-panels justify-content-around">
    <div class="card text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
        <div class="card-header ring-oss">
            <i class="fa fa-phone"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Ring oss</h5>
            <p class="card-text">Mån-Fre: 10.00 - 18.00</p>
            <p class="card-text">Lördag: 14.00 - 18.00</p>
            <p class="card-text">Söndag: Stängt</p>
        </div>
    </div>
    
    <!-- only loads when in col-md range -->
    <div class="w-100"></div>

    <div class="card text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
        <div class="card-header ring-oss">
            <i class="fa fa-map-marker"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Adress</h5>
            <p class="card-text">Krokvägen 666</p>
            <p class="card-text">111 11, Kiruna</p>
            <p class="card-text">Mån-Sön: 10.00 - 23.00</p>
        </div>
    </div>

    <!-- only loads when in col-md range -->
    <div class="w-100"></div>

    <div class="card text-white col-xs-12 col-s-12 col-md-8 col-lg-4 col-xl-3">
        <div class="card-header ring-oss">
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

<style>

#app {
    background-color: black;
}

h1 {
    color: white;
    padding-top: 5%;
    font-size: 50px;
}

h5 {
    font-weight: bold;
}

.w-100 {
    display: none;
}

.card {
    background-color: rgb(111, 34, 50);
    border: 1px solid white;
}

.card p, h5 {
    color: white;
    margin-bottom: 0;
    font-size: 22px;
}

.card-header {
    border: none;
    background-color: rgb(111, 34, 50);
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

i.fa {
    font-size: 50px;
}

/* Media queries for smaller devices */

@media (min-width: 768px) and (max-width: 992px) {
    .w-100 {
        display: block;
    }

    .card {
        height: 28vh;
    }

    i.fa {
        font-size: 30px;
    }

    .container {
        margin-top: 4vh;
    }
}

@media (max-width: 768px) {
    .card {
        margin: 2vh;
        margin-top: 3vh !important;
        height: 23vh !important;
    }

    i.fa-map-marker, i.fa-envelope, i.fa-phone {
        font-size: 30px;
    }

    h5 {
        font-size: 20px;
    }

    .card-text {
        font-size: 14px !important;
    }

    .card-header {
        padding: 5px;
        padding-top: 10px;
    }
}

</style>