<template>
  <div class="relative font-outfit">
    <Header />
    <Apresentation />
    <Projects id="projects" />
    <About id="about" />
    <Video id="video" />
    <Equipe id="team" />
    <Footer id="footer"/>
  </div>
</template>

<script lang="ts">
import Header from "./views/Header.vue";
import Apresentation from "./views/Apresentation.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import Video from "./views/Video.vue";
import Equipe from "./views/Equipe.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Apresentation,
    Projects,
    About,
    Video,
    Equipe,
    Footer,
  },
};
</script>

<style scoped></style>
