<template>
  <div class="flex items-center min-h-screen bg-white relative">
    <!-- Background com imagem de linha -->
    <div class="absolute">
      <img
        src="../assets/lineBg.png"
        alt="Background Lines"
        class="mt-6 w-full h-full object-cover"
        data-aos="fade-in"
        data-aos-duration="1500"
      />
    </div>

    <!-- Conteúdo principal -->
    <div
      class="flex flex-col justify-center ml-[100px] z-10 px-8 sm:px-16 md:px-32 lg:px-48"
    >
      <!-- Título -->
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
        Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore
        dolorum et natus animi ut laboriosam dolorem quo amet blanditiis. Ea
        enim dolores ad nobis fugiat et tenetur debitis.
      </p>

      <!-- Botões -->
      <div class="flex mt-8 space-x-4">
        <button
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          class="bg-primary text-white font-medium px-6 py-3 border-primary flex items-center transition-colors duration-400 ease-in-out hover:bg-transparent hover:text-primary hover:border-primary"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <img
            v-if="!isHovered"
            src="../assets/mailWhite.svg"
            alt="Ícone de email"
            class="w-6 h-6 mr-2 transition-colors duration-400 ease-in-out"
          />
          <img
            v-else
            src="../assets/mailSvg.svg"
            alt="Ícone de email"
            class="w-6 h-6 mr-2 transition-colors duration-400 ease-in-out"
          />
          Entre em contato
        </button>
        <button
          class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-8 border border-primary hover:border-transparent rounded flex items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Saiba mais
        </button>
      </div>

      <div class="mt-10">
        <p class="text-primary font-semibold" data-aos="fade-up">
          Conheça-nos:
        </p>
        <div class="flex space-x-4 mt-2">
          <a
            href="#"
            class="hover:text-blue-700"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src="../assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="#"
            class="hover:text-blue-700"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src="../assets/insta.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

    <!-- Imagem de Rede Global (visível apenas em telas maiores) -->
    <div class="ml-[70px] flex justify-center mb-10 w-[800px] hidden lg:flex">
      <Globe />
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
