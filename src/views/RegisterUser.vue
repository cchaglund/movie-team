<template>
 <article>
   <div class="card-body">
     <form @submit.prevent="submit" class="layout">
       <label>First name
         <input type="text" v-model="firstname" :disabled="loading" placeholder="Skriv ditt förnamn" required/>
       </label>
       <label>Last name
         <input type="text" v-model="lastname" :disabled="loading" placeholder="Skriv ditt efternamn" required/>
       </label>
       <label>Email
         <input type="text" v-model="email" :disabled="loading" placeholder="Skriv din email" required/>
       </label>
       <label>Password
         <input type="password" v-model="password" :disabled="loading" placeholder="Skriv ditt lösenord" required/>
       </label>
       <div>
         <div>
           <span class="msg" v-if="message">{{message}}</span>
         </div>
         <div>
           <button type="submit" :disabled="loading">Registrera</button>
         </div>
       </div>

     </form>
   </div>
 </article>
</template>

<Footer></Footer>

<script>
export default {
 name: 'register',
 data() {
   return {
     firstname: '',
     lastname: '',
     email: '',
     password: '',
     message: '',
     loading: false
   };
 },
 methods: {
   submit() { // register
     this.loading = true;
     this.message = '';
     this.$axios.post('http://localhost/movie-team-server/register.php', {
       firstname: this.firstname,
       lastname: this.lastname,
       email: this.email,
       password: this.password
     }).then(response => {
       this.loading = false;
       if(response.data) {
         this.message = 'Registered';
       } else {
         this.message = 'Incorrect email/password';
       }
     }).catch(error => {
       this.message = 'Error';
       console.log('Error', error);
       this.loading = false;
     });
   }
 }
}
</script>

<style scoped>  

.layout{  
  color: white;  
}
.card-body{
  width: 300px; 
  padding: 10px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  text-align: center;
  border-radius: 5px;
}
.card-body input[type = "text"],.card-body input[type = "password"] {
  border:0;
  background:none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid white;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0,25s;
}
.card-body input[type = "text"]:focus,.card-body input[type = "password"]:focus{
  width: auto;
  border-color: #7c956b;
}
.card-body button[type = "submit"]{
  border:0;
  background-color:black;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid white;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0,25s;
  cursor: pointer;
}
.card-body button[type = "submit"]:hover{
  background:#7c956b;
}
@media screen and (max-width: 400px) {
  .card-body {
    box-sizing: border-box;
    width: 80%;
  }  
  .card-body input[type = "text"]:focus,.card-body input[type = "password"] {
    width: 160px; 
  }
  .card-body input[type = "text"] {
    width:160px;
  }
}
</style>