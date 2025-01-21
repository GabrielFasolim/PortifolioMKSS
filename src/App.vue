<template>
  <Header/>
  <Apresentation/>
  <Projects/>
  <About/>
  <Video/>
  <Tecnologies/>
</template>

<script lang="ts">
import Header from './views/Header.vue'
import Apresentation from './views/Apresentation.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue';
import Video from './views/Video.vue';
import Tecnologies from './views/Tecnologies.vue'


export default {
  name: 'App',
  components: {
    Header,
    Apresentation,
    Projects,
    About,
    Video,
    Tecnologies
  }
}
</script>

<style scoped></style>
