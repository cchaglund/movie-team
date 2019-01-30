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
         <input type="email" v-model="email" :disabled="loading" placeholder="Skriv din email" required/>
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
     this.$axios.post('login/register.php', {
       firstname: this.firstname,
       lastname: this.lastname,
       email: this.email,
       password: this.password
     }).then(response => {
       this.loading = false;
       if(response.data) {
         this.message = 'Registered';
         this.$router.push({
          name: 'home'
         })
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
  text-align: center;
  
}
.card-body input, .card-body button{
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
}
.card-body input:focus{ 
  border-color: #6F2232;
}
.card-body button{
  background-color:black;
  cursor: pointer;
}
.card-body button:hover{
  background:white;
  color:black;
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