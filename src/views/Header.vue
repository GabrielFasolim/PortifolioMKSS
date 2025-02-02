<template>
  <div
    class="border-b border-primary100 flex md:justify-center fixed top-0 w-full z-50 bg-white"
  >
    <div
      class="xl:w-8/12 lg:w-10/12 md:w-11/12 flex items-center justify-between md:my-5 my-4 mx-4 md:ml-0 w-[100%]"
    >
      <div>
        <img
          src="../assets/logoMKSS.png"
          alt="Logo Azul"
          class="md:h-auto h-6"
        />
      </div>

      <div
        :class="[
          'md:flex md:flex-row flex-col absolute right-0 top-0 h-[100vh] px-6 bg-primary border-l border-primary800/70 md:border-none md:bg-transparent md:h-auto md:relative z-50',
          { hidden: !isSidebarOpen },
        ]"
      >
        <div
          class="md:text-primary text-white font-semiBold flex md:flex-row flex-col items-start md:items-center mr-6 lg:mr-12 gap-4 mb-6 md:mb-0 md:gap-4 lg:gap-10"
        >
          <font-awesome-icon
            :icon="['fas', 'fa-xmark']"
            class="md:hidden text-white h-6 cursor-pointer mt-4 mb-2"
            @click="toggleSidebar"
          />
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'fa-home']"
              class="mr-2 md:hidden h-3 pb-0.5"
            />Home</a
          >
          <a href="#">
            <font-awesome-icon
              :icon="['fas', 'fa-circle-info']"
              class="mr-2 md:hidden h-3 pb-0.5"
            />Sobre</a
          >
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'fa-briefcase']"
              class="mr-2 md:hidden h-3 pb-0.5"
            />Serviços</a
          >
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'fa-user-group']"
              class="mr-2 md:hidden h-3 pb-0.5"
            />Equipe</a
          >
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'fa-square-phone']"
              class="mr-2 md:hidden h-3 pb-0.5"
            />Contato</a
          >
        </div>
        <a
          href="#"
          class="bg-transparent md:hover:bg-primary hover:bg-white duration-500 md:text-primary text-white font-semibold md:hover:text-white hover:text-primary py-2 px-6 border-2 md:border-primary border-white hover:border-transparent rounded-sm flex items-center"
        >
          <font-awesome-icon :icon="['fas', 'fa-envelope']" class="mr-2" />
          Vamos conversar
        </a>
      </div>

      <font-awesome-icon
        :icon="['fas', 'fa-bars']"
        class="md:hidden text-primary h-6 cursor-pointer"
        @click="toggleSidebar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
};
</script>
