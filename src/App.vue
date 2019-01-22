

<template>
  <div id="app">
    <div id="nav">
<div class="nav">
  <div class="nav-header">
    <div class="nav-title">

      <img style="max-width:100px;max-height:50px;" src="../src/images/image1.png">

    
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <input type="checkbox" id="nav-check">
  <div class="nav-links">
     <router-link to="home">Home</router-link>
    <router-link to="movies">Filmsida</router-link>
    <router-link to="barnfilmer">Barnfilmer</router-link>
    <router-link to="bokning">Bokning</router-link>
    <router-link to="inloggning">Inloggning</router-link>
    <router-link to="anvandare">Användare</router-link>
    <router-link to="bekraftelse">Bekräftelse</router-link>
    <router-link to="salonger">Salonger</router-link>
    <router-link to="information">Information</router-link>

  </div>
</div>

      
    </div>
    <router-view/>
  </div>
  
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'segoe ui';
}

.nav {
  height: 70px;
  width: 100%;
  background-color: #4d4d4d;
  position: fixed;
  z-index: 6500; 
  opacity: 0.8;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 20px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:1024px) {
  .nav {
    z-index: 7000;
    opacity: 1;
  }
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    height: 70px;
    padding: 20px;
  }
  .nav > .nav-btn > label:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 69px;
    left: 0px;
    font-size: 25px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) + .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked + .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>

