<template>
  <div class="bg-primary800 mt-7  ">
    <div class="block text-center h-[60vh] ">
      <el-carousel height="550px" motion-blur>
        <el-carousel-item v-for="(project, index) in projects" :key="index">
          <div>
            <div class="flex justify-center gap-[100px]">
              <div>
                <div class="my-10">
                  <img :src="project.logo" alt="Project Image" class=" " />
                </div>
                <div class="w-[400px] text-justify">
                  <span class="text-white">
                    {{ project.description }}
                  </span>
                </div>
                <div class="my-10">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">

                    <button
                      class="bg-transparent hover:bg-white hover:text-primary800 text-white font-semibold  py-2 px-8 border border-white hover:border-transparent rounded-sm flex items-center"
                    >
                      Conheça o projeto
                    </button>
                </a>
                </div>
              </div>
              <div class="mb-5">
                <img :src="project.image" alt="" />
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default {
  data() {
    return {
      projects: [
        {
          title: "Projeto 1",
          description:
            "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et natus animi ut laboriosam dolorem quo amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
          image: "../../src/assets/mockup.png",
          logo: "../../src/assets/logoPaola.png",
          link: "https://paolanutri.com.br/",
        },
        {
          title: "Projeto 2",
          description: "Descrição do Projeto 2",
          image: "",
          logo: "",
          link: "#",
        },
        {
          title: "Projeto 3",
          description: "Descrição do Projeto 3",
          image: "",
          logo: "",
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
