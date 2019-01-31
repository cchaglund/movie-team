<template>
  <div id="home">
  <div class="box">
    <form @submit.prevent="submit" class="layout">
   <div v-if="user.firstname" class="logout">
    <router-link class="startlink" to="/">Boka film</router-link>
          <router-link class="anvandarelink" to="/anvandare">Mina bokningar</router-link>
        <a v-on:click="logout" :disabled="loading">Logga ut</a>
      </div>
      <div class="login" v-else>
        <a v-on:click="showLogin" :disabled="loading">Logga in</a>
       
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
            <button type="cancel" v-on:click="cancelLogin">Avbryt</button>
            <button type="submit" :disabled="loading">Logga in</button>
            <div>
              <p>Klicka här för att <router-link class="registerlink" to="/registeruser">Registrera</router-link></p>
            </div>
          </div>
        </div>
      </form>
      <Footer>
  </Footer>
</div>
</div>
</template>



<script scoped>
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
    this.$axios.get('login/user.php').then(response => {
      if (response.data === true) {
        this.user = {firstname: 'filler'}
        console.log("logged in")
      }
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
      this.$axios.post('login/login.php', {
        email: this.email,
        password: this.password,
      }).then(response => {
        this.loading = false;
        this.showingLogin = true;
        if(response.data.loggedIn) {
          this.user = response.data.user;
          this.$router.push({
            name: 'home'
          })
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
      console.log("hej")
      this.loading = true;
      this.$axios.post('login/logout.php').then(response => {
        console.log("response", response.data)
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


<style scoped>
.registerlink{
  color:#6F2232;
  font-weight: bolder;
}
.startlink, .anvandarelink{
  margin-bottom: 20px;
}
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
    
}
.layout{
    display: inline-grid;
    background-color: #6F2232;
    padding: 20px;
    margin-top: 100px;
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
  background-color:white;
  cursor: pointer;
  color:black;
  border:1px solid white;
}
.layout button:hover{
  background:black;
  color:white;
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