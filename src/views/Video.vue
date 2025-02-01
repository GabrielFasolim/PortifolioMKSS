<template>
  <div class="relative h-auto">
    <div class="absolute hidden lg:flex right-0 z-0 h-full">
      <img
        src="../assets/lineBgInv.png"
        alt="Background Lines"
        class="w-full h-full object-cover"
        data-aos="fade-in"
        data-aos-duration="1500"
      />
    </div>
    <div
      class="flex flex-col md:flex-row justify-center gap-9 text-primary500 border-b border-primary100 relative z-1"
    >
      <div
        class="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full flex lg:flex-row py-20 flex-col items-center justify-between"
      >
        <div class="lg:mr-32 lg:w-[40%] mb-10 lg:mb-0 px-4 md:px-0">
          <div class="text-2xl mb-4 font-bold">
            <h1>Conheça a MKSS</h1>
          </div>
          <div class="w-full">
            <p>
              Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit
              dolore dolorum et natus animi ut laboriosam dolorem quo amet
              blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.
              <br />
              Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit
              dolore dolorum et natus animi ut laboriosam dolorem quo amet
              blanditiis.
            </p>
          </div>
        </div>
        <div class="flex-1 lg:w-[60%] w-full px-4 md:px-0">
          <video
            class="rounded-md w-full border-4 border-[#000D2D]"
            src="../assets/videoMkss.mp4"
            controls
          ></video>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center py-16 border-b border-primary100 relative z-1"
    >
      <div
        class="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full px-4 md:px-0 text-primary500"
      >
        <div class="flex justify-center">
          <h3 class="text-2xl mb-4 font-bold">Tecnologias</h3>
        </div>
        <div class="flex justify-center">
          <p class="w-full text-center mb-12">
            Na MKSS utilizamos as tecnologias de forma cirúrgica, pois
            entendemos que cada produto possui características únicas.
            <br />Abaixo apresentamos as linguagens e frameworks no qual
            trabalhamos e possuímos expertise.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-12">
          <img
            class="icon h-12 md:h-20"
            src="../assets/angularIcon.png"
            alt=""
          />
          <img class="icon h-12 md:h-20" src="../assets/vueIcon.png" alt="" />
          <img class="icon h-12 md:h-20" src="../assets/reactIcon.svg" alt="" />
          <img class="icon h-12 md:h-20" src="../assets/nextIcon.png" alt="" />
          <img class="icon h-12 md:h-20" src="../assets/jsIcon.png" alt="" />
          <img class="icon h-12 md:h-20" src="../assets/netIcon.png" alt="" />
        </div>
      </div>
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
