<template>
  <div class="flex justify-center gap-9 mt-[80px] pb-[90px]  text-primary500 border-b-2 border-primary100">
    <div>
      <div class="text-4xl mb-5 font-bold">
        <h1>Conheça a MKSS</h1>
      </div>
      <div class="w-[550px]">
        <p>
          Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit
          dolore dolorum et natus animi ut laboriosam dolorem quo amet
          blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis. Lorem
          ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore
          dolorum et natus animi ut laboriosam dolorem quo amet blanditiis.
        </p>
      </div>
    </div>
    <div class="w-[700px]">
      <video class="rounded-md" src="../assets/videoMkss.mp4" controls></video>
    </div>
  </div>
  <div class="flex flex-col justify-center pt-[50px]">
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold text-primary500">Tecnologias</h1>
    </div>
    <div class="flex justify-center mt-5 ">
        <p class="w-[900px] text-center text-lg	text-primary500">
            Na MKSS utilizamos as tecnologias de forma cirúrgica, pois entendemos que cada produto possui características únicas. Abaixo apresentamos as linguagens e frameworks no qual trabalhamos e possuímos expertise.
        </p>
    </div>
    <div class="flex justify-center mt-[80px] gap-[70px] pb-[90px] mb-[50px]  border-b-2 border-primary100">
        <img class="icon h-[110px]" src="../assets/angularIcon.png" alt="">
        <img  class="icon h-[100px]" src="../assets/vueIcon.png" alt="">
        <img class="icon h-[110px]" src="../assets/reactIcon.svg" alt="">
        <img class="icon h-[100px]" src="../assets/nextIcon.png" alt="">
        <img class="icon h-[100px]" src="../assets/jsIcon.png" alt="">
        <img class="icon h-[100px]" src="../assets/netIcon.png" alt="">
    </div>
  </div>
</template>

<script></script>

<style>
.video-section {
 /*adicionar o bg */
  background-size: cover;
  background-position: center;
}

.icon {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon:hover {
  transform: translateY(-8px);
}
</style>
