<template>
  <Header/>
  <Apresentation/>
  <Projects/>
</template>

<script lang="ts">
import Header from './views/Header.vue'
import Apresentation from './views/Apresentation.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    Apresentation,
    Projects
  }
}
</script>

<style scoped></style>
