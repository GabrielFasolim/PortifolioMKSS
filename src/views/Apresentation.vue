<template>
  <div class="flex items-center justify-center h-[830px] bg-white relative">
    <!-- Background com imagem de linha -->
    <div class="absolute top-0 left-0 h-full">
      <img
        src="../assets/lineBg.png"
        alt="Background Lines"
        class="w-full h-full object-cover"
        data-aos="fade-in"
        data-aos-duration="1500"
      />
    </div>

    <div
      class="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full mx-4 justify-between flex"
    >
      <div class="flex flex-col justify-center z-10">
        <h1
          class="text-6xl font-primary font-light text-primary leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Making. <br />
          <span class="font-bold text-primary">Software.</span><br />
          Solutions.
        </h1>

        <!-- Parágrafo -->
        <p
          class="text-primary mt-6 max-w-md leading-relaxed font-semibold"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          Na Making Software Solutions, nos comprometemos a levar sua empresa ao
          próximo nível. Se você busca eficiência, inovação e resultados, está
          no lugar certo!
        </p>

        <!-- Botões -->
        <div class="flex mt-8 space-x-1 sm:space-x-4">
          <a
            href="mailto:mkss.contato@gmail.com"
            class="bg-primary text-white font-medium px-4 sm:px-6 py-2 text-sm sm:text-base border-2 border-primary rounded-sm flex items-center transition-colors duration-400 ease-in-out hover:bg-transparent hover:text-primary"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <font-awesome-icon :icon="['fas', 'fa-envelope']" class="mr-2" />
            Entre em contato
          </a>
          <a
            href="#"
            class="bg-transparent hover:bg-primary text-primary font-semibold text-sm sm:text-base hover:text-white py-2 px-3 sm:px-6 border-2 border-primary hover:border-transparent rounded-sm flex items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Saiba mais
          </a>
        </div>

        <div class="mt-8">
          <p class="text-primary font-semibold" data-aos="fade-up">
            Conheça-nos:
          </p>
          <div class="flex space-x-4 mt-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/mkssdev/?viewAsMember=true"
              class="text-primary hover:text-blue-700"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" class="h-8" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mkss.dev/"
              class="text-primary hover:text-blue-700"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" class="h-8" />
            </a>
          </div>
        </div>
      </div>

      <!-- Imagem de Rede Global (visível apenas em telas maiores) -->
      <div class="justify-center mb-10 w-[50%] hidden lg:flex">
        <Globe />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Globe from "./Globe.vue";

export default {
  components: {
    Globe,
  },
  setup() {
    const isHovered = ref(false);

    // Inicializa o AOS quando o componente for montado
    onMounted(() => {
      AOS.init();
    });

    return { isHovered };
  },
  watch: {
    isHovered: function (val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s ease;
  border-width: 3px;
}

/* Adiciona a transição de cor ao ícone no hover */
</style>
