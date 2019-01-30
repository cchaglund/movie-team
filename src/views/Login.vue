<template>
  <div id="home">
  <div class="box">
    <form @submit.prevent="submit" class="layout">
   <div v-if="user.firstname" class="logout">
        <a v-on:click="logout" :disabled="loading">SIGN OUT</a>
      </div>
      <div class="login" v-else>
        <a v-on:click="showLogin" :disabled="loading">SIGN IN</a>
       
      </div>
      <div v-if="!user.firstname && showingLogin" class="card-body">
   <label><i class="fas fa-user fa-2x"></i>
          <input type="email" v-model="email" :disabled="loading"  required/>
        </label>
        <label><i class="fas fa-lock fa-2x"></i>
          <input type="password" v-model="password" :disabled="loading"  required/>
        </label>
   <div>
    <span class="msg" v-if="message">{{message}}</span>
  </div>
          <div>
            <button type="cancel" v-on:click="cancelLogin">CANCEL</button>
            <button type="submit" :disabled="loading">SIGN IN</button>
            <div>
              <p>Click here to <router-link to="/register">REGISTER</router-link></p>
            </div>
            <div class="social">
              <i class="fab fa-facebook fa-2x"></i>
              <i class="fab fa-instagram fa-2x"></i>
              <i class="fab fa-twitter fa-2x"></i>
            </div>
          </div>
        </div>
      </form>
      <Footer>
  </Footer>
</div>
</div>
</template>



<script>
  import Footer from '@/components/Footer.vue'
export default{
  name: 'login',
  components: {
    Footer
     },
  data() {
    return {
      email: '',
      password: '',
      message: '',
      loading: false,
      showingLogin: false,
      user: {}
    };
  },
   created(){
    this.$axios.get('user.php').then(response => {
      this.user = response.data;
    }).catch(e => {
      // not logged in
    });
  },
  methods: {
    showLogin() {
      this.showingLogin = true;
    },
    cancelLogin(e){
      e.preventDefault();
      this.showingLogin = false;
    },
    submit() { // login
      this.loading = true;
      this.message = '';
      this.$axios.post('login.php', {
        email: this.email,
        password: this.password,
      }).then(response => {
        console.log(response.data)
        this.loading = false;
        this.showingLogin = true;
        if(response.data.loggedIn) {
          this.$router.push({ 
            name: 'bokning'})
          this.user = response.data.user;
        } else {
          this.message = 'Incorrect email/password';
        }
      }).catch(error => {
        this.message = 'Login error';
        console.log('login error', error);
        this.loading = false;
      });
    },
    logout() {
      this.loading = true;
      this.$axios.post('logout.php').then(response => {
        this.loading = false;
        this.user = {};
      }).catch(error => {
        console.log('logout error', error);
        this.loading = false;
      });
    }
  },
  watch: {
    email() {
      this.message = '';
    },
    password() {
      this.message = '';
    }
  }
};
</script>


<style>
html {
  background-color: black;
}
.box {
  background-color: black;
}
.card-body{
    box-sizing: border-box;
    background: rgba(255,255,255,0.9);
    border:none;
    border-radius: 5px;
    padding: 10px 15px;
    max-width: 500px;
    background-color: black;
    color:white;
  }
.card-body .msg{
border: 1px solid red;
border-radius: 2px;
padding:5px;
background-color:red;
color:black;
font-size:15px;
}
.card-body .welcome{
  margin-right:10px;
  font-weight:bold;
}
.card-body button {
display: inline-grid;
background-color: black;
    color: white;
    border-radius: 5px;
    width: 70px;
    font-size: 19px;
}
.layout{
     display: inline-grid;
    background-color: darkgrey;
    padding: 20px;
    margin-top:250px;
    width: 300px;
    border-radius: 5px;
    border-radius: 5px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-top: 20px;
}
.layout button {
  margin-right:5px;
  margin-top:10px;
  margin-bottom:10px;
}
.layout>*{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:5px;
}
.layout input {
  border-radius: 5px;
  border:2px solid black;
  width:100%;
}
.layout .login {
  display: flex;
}
.layout .login a {
  width:100%;
  border-radius: 5px;
  padding:5px;
  background-color: black;
  color:white;
  text-decoration: none;
  font-size:25px;
}
.layout .login a:hover {
  color:white;
}
.layout .logout a{
  width:100%;
  border-radius:5px;
  padding:5px;
  background-color: black;
  color:white;
  text-decoration: none;
  font-size:25px;
}
.layout .logout a:hover {
  color:white;
}
.layout .social i {
  margin-right:10px;
}
@media (max-width:1024px) {
  .layout {
    width:300px;
  }
.card-body {
  font-size:20px;
  
  }
  .layout .login a {
    font-size:40px;
  }
  .layout input {
    font-size:20px;
  }
  .layout button {
    width:100px;
    font-size:30px;
  }
  .layout .msg {
    font-size:23px;
  }
  label {
    font-size:30px;
  }
   }
  @media (min-width: 568px){
    .layout {  
      width:300px;
  }
}
</style>