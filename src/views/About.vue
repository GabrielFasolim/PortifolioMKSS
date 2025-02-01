<template>
  <div
    class="bg-primary800 flex justify-center items-center flex-col pt-16 pb-28 border-b-2 border-[#00228520]"
  >
    <div
      class="flex gap-3 xl:w-8/12 lg:w-10/12 md:w-11/12 w-full px-4 md:px-0 flex-col"
    >
      <h3 class="text-lg font-bold text-[#D1D6F5] mb-1">
        Serviços que oferecemos
      </h3>
      <div class="flex md:flex-row flex-col gap-3">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex flex-col items-start px-6 py-7 border-2 border-[#00228520] bg-[#00228510] rounded-sm"
        >
          <font-awesome-icon :icon="card.image" class="h-10 mb-3 text-white" />
          <div class="text-white">
            <div>
              <h3 class="text-xl font-bold text-[#D1D6F5] mb-3">
                {{ card.title }}
              </h3>
            </div>
            <div>
              <p class="w-full text-sm sm:text-base md:text-sm mb-4">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dados para os cards
      cards: [
        {
          title: "Landing Pages",
          description:
            "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
          image: ["fas", "laptop"],
        },
        {
          title: "Software Personalizado",
          description:
            "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
          image: ["fas", "code"],
        },
        {
          title: "SEO Optimization",
          description:
            "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
          image: ["fas", "magnifying-glass"],
        },
      ],
    };
  },
};
</script>

<style></style>
