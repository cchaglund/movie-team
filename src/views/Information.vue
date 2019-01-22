<template>
    <div id="information">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

    <h1>Information</h1>
    
    <div class="row information-panels justify-content-around">
    <div class="card text-white col-lg-3">
        <div class="card-header ring-oss">
            <i class="fa fa-phone"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Ring oss!</h5>
            <p class="card-text">Mån-Fre: 10.00 - 18.00</p>
            <p class="card-text">Lördag: 14.00 - 18.00</p>
            <p class="card-text">Söndag: Stängt</p>
        </div>
    </div>
    
    <div class="card text-white col-lg-3">
        <div class="card-header ring-oss">
            <i class="fa fa-map-marker"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Adress</h5>
            <p class="card-text">Krokvägen 666</p>
        </div>
    </div>

    <div class="card text-white col-lg-3">
        <div class="card-header ring-oss">
			<i class="fa fa-envelope"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Maila oss!</h5>
            <p class="card-text">movie-team@movieteam.se</p>
            <p class="card-text">Mån-Sön: 00.00 - 23.59</p>
            <p class="card-text">Svar inom 1-2 arbetsdagar</p>
        </div>
    </div>
    </div>

    </div>
</template>

<style>

body {
    background-color: black;
}

h5 {
    font-weight: bold;
}

.card {
    background-color: rgb(0, 0, 0);
    border: 1px solid red;
    margin-bottom: 0 !important;
}

.card p, h5 {
    color: white;
    margin-bottom: 0;
}

.card-header {
    border: none;
}

.card-body {
    padding: 10px !important;
}

.information-panels {
    margin: 0 !important;
    margin-top: 18vh !important;
    padding-left: 10vw;
    padding-right: 10vw;
}

i.fa-map-marker, i.fa-envelope, i.fa-phone {
    font-size: 50px;
}

.col-lg-3 {
    height: 28vh !important;
}

/* Media queries for smaller devices */

@media (max-width: 880px) {
    .information-panels {
        margin-top: 5vh !important;
        margin-bottom: 5vh !important;
    }

    .card {
        margin: 2vh !important;
        height: 25vh !important;
    }

    .card-body {
        padding: 5px !important;
    }

    .card-text {
        font-size: 15px !important;
    }

    i.fa-map-marker, i.fa-envelope, i.fa-phone {
        font-size: 40px;
    }
    

}

</style>