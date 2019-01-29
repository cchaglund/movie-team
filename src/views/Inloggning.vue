<template>
 <div class="box">
   <form @submit.prevent="submit" class="layout">
  <div v-if="user.firstname">
       <a v-on:click="logout" :disabled="loading">Logout</a>
     </div>
     <div v-else>
       <a v-on:click="showLogin" :disabled="loading">Login</a>
       <router-link to="/register">Register</router-link>
     </div>
  <label>Email
         <input type="email" v-model="email" :disabled="loading"  required/>
       </label>
       <label>Password
         <input type="password" v-model="password" :disabled="loading"  required/>
       </label>
  <div>
   <span class="msg" v-if="message">{{message}}</span>
 </div>
         <div>
           <button type="cancel" v-on:click="cancelLogin">Cancel</button>
           <button type="submit" :disabled="loading">Login</button>
         </div>
     </form>
</div>
</template>


<script>
export default{
 name: 'login',
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
       this.showingLogin = false;
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

html{
background-color: black;
}

.box{
  background-color: black;
}
.card-body .msg{
 margin-left:10px;
}
.layout{
 display:inline-grid;
 background-color:darkgrey;
 padding:20px;
 margin:300px;
 border-radius: 5px;
}
.layout button {
    color: white;
    line-height: 1.2;
    font-size: 18px;
    display: block;
    width: 100%;
    background: 0 0;
    height: 62px;
    padding: 0 20px 0 38px;
    background-color: black;
}
.layout>*{
 display:flex;
 flex-direction: row;
 justify-content: space-between;
 margin-bottom:5px;
}
.layout a{
    font-size: 25px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: black;
    color: white;
}

</style>
