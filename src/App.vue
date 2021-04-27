<template>
  <v-app>
    <v-container>
      <SearchBar />
      <MovieList />
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'
export default {
  components:{
    SearchBar,
    MovieList  
  }
}
</script>
