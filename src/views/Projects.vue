<template>
  <div class="bg-primary800 border-b-2 border-[#00228520]">
    <div
      class="block text-center h-[550px]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <el-carousel height="530px" motion-blur>
        <el-carousel-item
          v-for="(project, index) in projects"
          :key="index"
          class=""
        >
          <div class="flex justify-center items-center h-full">
            <div
              class="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full mx-4 flex items-center justify-between"
            >
              <div class="flex flex-col items-center lg:items-start">
                <div class="mb-4">
                  <img :src="project.logo" alt="Project Image" class=" " />
                </div>
                <div class="text-center lg:text-start px-12 lg:px-0">
                  <span
                    class="text-[#D1D6F5]"
                    v-html="project.description"
                  ></span>
                </div>
                <div class="my-8">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      class="bg-transparent duration-500 hover:bg-white hover:text-primary800 text-[#D1D6F5] font-semibold py-2 px-8 border-2 border-[#D1D6F5] hover:border-transparent rounded-sm flex items-center"
                    >
                      Conheça o projeto
                    </button>
                  </a>
                </div>
              </div>
              <img :src="project.image" alt="" class="w-[60%] lg:flex hidden" />
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default {
  data() {
    return {
      projects: [
        {
          title: "Projeto 1",
          description:
            "A landing page da nutricionista Paola Alves <strong>destaca seus serviços de forma clara e objetiva</strong>. Com um design intuitivo, apresenta planos nutricionais personalizados e resultados comprovados, proporcionando uma <strong>experiência envolvente que incentiva novos agendamentos</strong>.",
          image: "../../src/assets/mockup.png",
          logo: "../src/assets/logoPaola.png",
          link: "https://paolanutri.com.br/",
        },
        {
          title: "Projeto 2",
          description:
            "O Mercadão Barato Sul é uma plataforma digital desenvolvida para açougues, combinando praticidade e eficiência. Projetada para refletir a identidade do negócio, inclui um painel administrativo que oferece total autonomia ao cliente. As compras são realizadas de forma rápida e direta pelo WhatsApp, conectando consumidores ao estabelecimento com facilidade.",
          image: "",
          logo: "../../src/assets/logoMercadao.png",
          link: "https://mercadaobaratosul.shop/pages/home/home.php",
        },
        {
          title: "Projeto 3",
          description:
            "O EzStock é um sistema de gestão de estoque altamente personalizável, projetado para atender às necessidades específicas de cada negócio. Oferece uma interface intuitiva e recursos que garantem organização e controle eficiente, permitindo decisões estratégicas baseadas em dados precisos e em tempo real.",
          image: "",
          logo: "../../src/assets/logoVilla.png",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilize o carrossel aqui, se necessário */
</style>
