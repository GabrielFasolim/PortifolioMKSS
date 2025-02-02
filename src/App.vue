<template>
  <div class="relative">
    <Header />
    <Apresentation />
    <Projects />
    <About />
    <Video />
    <Equipe />
  </div>
</template>

<script lang="ts">
import Header from "./views/Header.vue";
import Apresentation from "./views/Apresentation.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import Video from "./views/Video.vue";
import Equipe from "./views/Equipe.vue";

export default {
  name: "App",
  components: {
    Header,
    Apresentation,
    Projects,
    About,
    Video,
    Equipe,
  },
};
</script>

<style scoped></style>
