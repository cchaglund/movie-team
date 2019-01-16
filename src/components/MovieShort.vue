<template>
  <div class="home">
    <div class="movies">
  <!---  <p>{{ msg }}</p> -->
      <div class="col movieTrailer">
      </div>

      <div class="col title">
        <h4>Titel</h4>
        <h6>Längd | Genre | Ålder</h6>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieShort',
  props: {
    msg: String

  }
}
</script>