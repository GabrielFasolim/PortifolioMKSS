<template>
  <div class="flex justify-center py-14">
    <div class="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full">
      <h4
        class="text-2xl text-center text-primary500 font-bold mb-12 sm:mb-16 relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Nossa equipe
      </h4>
      <div
        class="flex flex-wrap sm:flex-row flex-col items-center justify-center sm:gap-x-20 lg:gap-x-40 2xl:gap-x-64 gap-y-12 sm:gap-y-14"
      >
        <div
          class="flex flex-col items-center transition-transform duration-300 hover:scale-105 sm:w-auto relative z-10"
          v-for="card in cards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            :src="card.perfil"
            alt="Perfil"
            class="sm:w-48 sm:h-48 h-40 w-40 object-cover rounded-full mb-4"
          />
          <p class="text-2xl font-bold text-primary500">
            {{ card.title }}
          </p>
          <p class="text-[#314c9c] font-semibold mb-2">{{ card.cargo }}</p>
          <a :href="card.linkedin" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'linkedin-in']"
              class="h-8 text-primary hover:text-primary800 duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elvisImg from "../assets/elvis.png";
import cauaImg from "../assets/caua.png";
import kaduImg from "../assets/kadu.png";
import gabrielImg from "../assets/gabriel.png";
import gbImg from "../assets/gb.png";

export default {
  data() {
    return {
      // Dados para os cards
      cards: [
        {
          title: "Elvis Claudino",
          cargo: "Desenvolvedor Full-Stack",
          linkedin: "https://www.linkedin.com/in/elvis-claudino/",
          perfil: elvisImg,
        },
        {
          title: "Cauã Brito",
          cargo: "Desenvolvedor Back-End",
          linkedin: "https://www.linkedin.com/in/cau%C3%A3-brito/",
          perfil: cauaImg,
        },
        {
          title: "Carlos Scorsoni",
          cargo: "Desenvolvedor Back-End",
          linkedin:
            "https://www.linkedin.com/in/carlos-eduardo-scorsoni-dias-825918236/",
          perfil: kaduImg,
        },
        {
          title: "Gabriel Fasolim",
          cargo: "Desenvolvedor Full-Stack",
          linkedin: "https://www.linkedin.com/in/gabrielfasolim/",
          perfil: gabrielImg,
        },
        {
          title: "Gustavo Bordignon",
          cargo: "Desenvolvedor Front-End",
          linkedin: "https://www.linkedin.com/in/gustavo-bordignon-326861203/",
          perfil: gbImg,
        },
      ],
    };
  },
};
</script>

<style></style>
