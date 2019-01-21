<template>
    <div class="information">
        <h1>Information</h1>

    <div class="row information-panels justify-content-around">
    <div class="card text-white mb-3" style="max-width: 250px;">
        <div class="card-header ring-oss">
            <img src="../images/telephone.png" class="card-image">
            </div>
        <div class="card-body">
            <h5 class="card-title">Ring oss!</h5>
            <p class="card-text">Mån-Fre: 10.00 - 18.00</p>
            <p class="card-text">Lördag: 14.00 - 18.00</p>
            <p class="card-text">Söndag: Stängt</p>
        </div>
    </div>
    <div class="card text-white mb-3" style="max-width: 250px;">
        <div class="card-header ring-oss">
            <img src="../images/location.png" class="card-image">
            </div>
        <div class="card-body">
            <h5 class="card-title">Adress</h5>
            <p class="card-text">Krokvägen 666</p>
        </div>
    </div>
    <div class="card text-white mb-3" style="max-width: 250px;">
        <div class="card-header ring-oss">
            <img src="../images/email.png" class="card-image">
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

h1 {
    color: rgb(200, 0, 20)
}

.card {
    background-color: rgb(0, 0, 0);
    border: 1px solid red;
    margin-bottom: 0 !important;
    border-radius: 0 !important;    
}

.card p, h5 {
    color: white;
    margin-bottom: 0;
}

.card-image {
    width: 50%;
    height: 50%;
    padding-top: 2vh;
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

</style>