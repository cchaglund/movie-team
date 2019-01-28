<template>
 <article>
   <div class="card-body">
     <form @submit.prevent="submit" class="layout">
       <label>First name
         <input type="text" v-model="firstname" :disabled="loading" placeholder="Enter your first name" required/>
       </label>
       <label>Last name
         <input type="text" v-model="lastname" :disabled="loading" placeholder="Enter your last name" required/>
       </label>
       <label>Email
         <input type="text" v-model="email" :disabled="loading" placeholder="Enter your email" required/>
       </label>
       <label>Password
         <input type="password" v-model="password" :disabled="loading" placeholder="Enter your password" required/>
       </label>
       <div>
         <div>
           <span class="msg" v-if="message">{{message}}</span>
         </div>
         <div>
           <button type="submit" :disabled="loading">Register</button>
         </div>
       </div>

     </form>
   </div>
 </article>
</template>

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

<style>	
.card-body{
	width: 300px;
	padding: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background:#191919;
	text-align: center;
	border-radius: 30px;
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
	border-radius: 24px;
	transition: 0,25s;
}
.card-body input[type = "text"]:focus,.card-body input[type = "password"]:focus{
	width: 280px;
	border-color: #2ecc71;
}
.card-body input[type = "submit"]{
	border:0;
	background:none;
	display: block;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #2ecc71;
	padding: 14px 40px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0,25s;
	cursor: pointer;
}
.card-body input[type = "submit"]:hover{
	background:#2ecc71;
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