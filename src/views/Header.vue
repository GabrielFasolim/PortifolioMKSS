<template>
  <div class="border border-primary100">
    <div class="flex justify-between m-8">
      <div class="ml-[200px]">
        <img src="../assets/logoAzul.png" alt="Logo Azul" />
      </div>

      <div class="flex mr-[200px]">
        <div class="text-primary font-semiBold flex items-center mr-12 gap-10">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Equipe</a>
          <a href="#">Contato</a>
        </div>
        <button
          class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-8 border border-primary hover:border-transparent rounded flex items-center"
        >
          <!-- Imagem SVG com filtro de cor no hover -->
          <img
            src="../assets/mailSvg.svg"
            alt="Ícone de email"
            class="w-6 h-6 mr-2 hover:filter hover:invert hover:sepia hover:brightness-150"
          />
          Vamos conversar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
/* Filtro de cor no SVG */
button {
  transition: all 0.3s ease;
  border-width: 3px; /* Aumenta a espessura da borda */
}

button:hover img {
  filter: invert(1) sepia(1) brightness(2);
}
</style>
