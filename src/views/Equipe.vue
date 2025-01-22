<template>
    <div class="mb-20">
        <div class="text-3xl flex justify-center text-primary500 font-bold">
            <h1>Equipe</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mt-10">
            <div v-for="(card, index) in cards" :key="index" class="flex flex-col items-center">
                <div class="w-[200px] bg-primary h-[200px] rounded-full">
                    <img :src="card.perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                </div>
                <div class="mt-4 text-center">
                    <h1 class="text-2xl font-bold text-primary500">{{card.title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{card.cargo}}</p>
                    <div class="flex justify-center">
                        <a :href="card.linkedin" target="_blank">
                            <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                        </a>
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
                    title: "Elvis Claudino",
                    cargo: "Desenvolvedor Full Stack",
                    linkedin: "https://www.linkedin.com/in/elvis-claudino/",
                    perfil: "../../src/assets/elvis.png",
                },
                {
                    title: "Cauã Brito",
                    cargo: "Desenvolvedor Back-end",
                    linkedin: "https://www.linkedin.com/in/cau%C3%A3-brito/",
                    perfil: "../../src/assets/caua.png",
                },
                {
                    title: "Carlos Scorsoni",
                    cargo: "Desenvolvedor Back-end",
                    linkedin: "https://www.linkedin.com/in/carlos-eduardo-scorsoni-dias-825918236/",
                    perfil: "../../src/assets/carlos.png",
                },
                {
                    title: "Gabriel Fasolim",
                    cargo: "Desenvolvedor Full Stack",
                    linkedin: "https://www.linkedin.com/in/gabrielfasolim/",
                    perfil: "../../src/assets/gabriel.png",
                },
                {
                    title: "Gustavo Bordignon",
                    cargo: "Desenvolvedor Front-end",
                    linkedin: "https://www.linkedin.com/in/gustavo-bordignon-326861203/",
                    perfil: "../../src/assets/gustavo.png",
                }
            ],
        };
    },
};

</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-items: center;
}

@media (min-width: 1024px) {
    .grid {
        grid-template-rows: auto auto;
        grid-template-columns: repeat(3, 1fr);
    }
    .grid > :nth-child(4) {
        grid-column: 2 / span 1;
    }
    .grid > :nth-child(5) {
        grid-column: 3 / span 1;
    }
}

@media (max-width: 1024px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>