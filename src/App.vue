




<template>
  <div id="app">
    <div id="nav">
      <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi|Josefin+Sans|ZCOOL+QingKe+HuangYou" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
<div class="nav">
  <div class="nav-header">
    <div class="nav-title">

      <img style="max-width:100px;max-height:50px;" src="../src/images/image333.png">

    
    </div>
  </div>
    <form class="navbar-form navbar-left" style="padding:16px;">
      <div class="input-group">
        <input type="text" class="form-control" style="border-top-right-radius: 10px;border-bottom-right-radius: 10px;border-top-left-radius: 10px;border-bottom-left-radius: 10px;" placeholder="Search" name="search">

        <div class="input-group-btn">
          <button class="btn btn-default" style="color:white;" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <input type="checkbox" id="nav-check">
  <div class="nav-links">
    <router-link to="home"><i class="fas fa-home fa-2x"></i></router-link>
    <router-link to="movies">Filmsida</router-link>
    <router-link to="barnfilmer">Barnfilmer</router-link>
    <router-link to="bokning">Bokning</router-link>
    <router-link to="anvandare">Anvandare</router-link>
    <router-link to="bekraftelse">Bekraftelse</router-link>
    <router-link to="salonger">Salonger</router-link>
    <router-link to="inloggning"><i class="fas fa-sign-in-alt fa-1.5x"></i></router-link>
  </div>
</div>

      
    </div>
    <router-view/>
  </div>
  
</template>



<style>
#app {
  font-family:'ZCOOL QingKe HuangYou', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
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
  background-color: black;
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
  float: left;
  font-size: 17px;
  margin-left: auto;
  margin-right: 15px;
  margin-top: -11px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 30px 10px 15px 10px;
  text-decoration: none;
  color: #efefef;
}
.nav > .nav-links > a:hover {
  background-color: white;
  color:black;
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
    background-color: black;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 73px;
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

  @media (max-width:1024px) {
  .navbar-form.navbar-left {
    display: none;
  }
}
</style>

