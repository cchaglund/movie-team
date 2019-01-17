 <template>
  <div class="Bokningsbekraftelse">
  	<h1> Bokningsbekraftelse</h1>
		<nav><a href="#hot">Movie-team</a></nav>
		<section id="hot">
			<img src="../assets/1.png">
			<h2>Your purcahse is confirmed</h2>
			<h3> Cofirmation ID:695857</h3>
			<section class="colum-layout">
				<section class="main-column">
					<div>
						<p>Cinema Name</p>
						<p>Hall Name</p>
						<p>Movie Title</p>
						<p>Rating</p>
						<p>Show Date</p>
						<p>Show time</p>
						<p>Seat Selected</p>
						
					</div>
				</section>
				<section class="sidebar-1">
					<div>
						<p>GSC QUEEE MALL </p>
						<p>7</p>
						<p>KingsMan: The Secret Service </p>
						<p>18</p>
						<p>Lördag 17:00</p>
						<p>17:00</p>
						<p>C17,C18,B18</p>
					</div>
				</section>
			</section>
		</section>

</div>

  
</template>




 

<script>
export default {
  name: 'Bokningsbekraftelse',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
}

a {
  display: block;
  padding: 10px;
  color: white;
  font-size: 35px;
}

nav {
  
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  text-align: center;
}


#hot {
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
}


#hot h2 {
  font-size: 20px;
  background-color: rgba(132, 31, 31, 0.9);
  color: white;
  margin: 10px;
  padding: 20px 20px 20px 20px;
}
#hot h3 {
  font-size: 20px;
  background-color: rgba(132, 31, 31, 0.9);
  color: white;
  margin: 10px;
  padding: 20px 20px 20px 20px;
}


.colum-layout {
  display: flex;
  background-color: rgba(22, 21, 21, 0.9);
  color: White;
  box-sizing: border-box;
  padding: 20px 35px 20px 35px;
  min-width: 50%;
  }

.main-column {
  flex: 1;
  text-align: left;
  flex-wrap: nowrap;
}

.sidebar-1 {
  flex: 1;
  flex-wrap: nowrap;
  text-align: right;
}

@media (max-width:600px) {
  .colum-layout {
    flex-wrap: nowrap;
    min-width: 100%;
    margin-right: 40px;
  }

}
</style>



