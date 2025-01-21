<template>
    <div class="bg-primary800 flex justify-center flex-col pb-[150px] pt-[150px]">
        <div class="flex justify-center gap-5">
            <div v-for="(card, index) in cards" :key="index"
                class="card flex flex-col border-2 bg-primary700 rounded-s">
                <img class="w-[100px] ml-3" :src="card.image" alt="" />
                <div class="text-white m-5">
                    <div>
                        <h1 class="text-xl font-bold">{{ card.title }}</h1>
                    </div>
                    <div>
                        <p class="w-[450px]">{{ card.description }}</p>
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
                    image: "../../src/assets/laptop.png",
                },
                {
                    title: "E-commerce Solutions",
                    description:
                        "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
                    image: "../../src/assets/laptop.png",
                },
                {
                    title: "SEO Optimization",
                    description:
                        "Lorem ipsum dolor sit amet. Et sunt enim rem dignissimos eius sit dolore dolorum et amet blanditiis. Ea enim dolores ad nobis fugiat et tenetur debitis.",
                    image: "../../src/assets/laptop.png",
                },
            ],
        };
    },
};
</script>

<style>
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
</style>
