<template>
    <div class="mb-20">
        <div class="text-3xl flex justify-center text-primary500 font-bold">
            <h1>Equipe</h1>
        </div>
        <div class="flex flex-col items-center mt-10">
            <div class="flex flex-wrap justify-center custom-gap">
                <div class="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                    <div class="w-[200px] h-[200px] rounded-full">
                        <img :src="cards[0].perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                    </div>
                    <h1 class="text-2xl font-bold text-primary500">{{cards[0].title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{cards[0].cargo}}</p>
                    <a :href="cards[0].linkedin" target="_blank">
                        <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                    </a>
                </div>
                <div class="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                    <div class="w-[200px] h-[200px] rounded-full">
                        <img :src="cards[1].perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                    </div>
                    <h1 class="text-2xl font-bold text-primary500">{{cards[1].title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{cards[1].cargo}}</p>
                    <a :href="cards[1].linkedin" target="_blank">
                        <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                    </a>
                </div>
                <div class="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                    <div class="w-[200px] h-[200px] rounded-full">
                        <img :src="cards[2].perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                    </div>
                    <h1 class="text-2xl font-bold text-primary500">{{cards[2].title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{cards[2].cargo}}</p>
                    <a :href="cards[2].linkedin" target="_blank">
                        <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                    </a>
                </div>
            </div>
            <div class="flex flex-wrap justify-center custom-gap mt-10">
                <div class="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                    <div class="w-[200px] h-[200px] rounded-full">
                        <img :src="cards[3].perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                    </div>
                    <h1 class="text-2xl font-bold text-primary500">{{cards[3].title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{cards[3].cargo}}</p>
                    <a :href="cards[3].linkedin" target="_blank">
                        <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                    </a>
                </div>
                <div class="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                    <div class="w-[200px] h-[200px] rounded-full">
                        <img :src="cards[4].perfil" alt="Perfil" class="w-full h-full object-cover rounded-full">
                    </div>
                    <h1 class="text-2xl font-bold text-primary500">{{cards[4].title}}</h1>
                    <p class="text-primary500 mb-2 mt-2">{{cards[4].cargo}}</p>
                    <a :href="cards[4].linkedin" target="_blank">
                        <img class="w-[30px]" src="../assets/linkedinEquipe.png" alt="LinkedIn">
                    </a>
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
                    perfil: "../../src/assets/kadu.png",
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
                    perfil: "../../src/assets/gb.png",
                }
            ],
        };
    },
};

</script>

<style>
.custom-gap {
    gap: 300px;
    display: flex;
}

@media (max-width: 1024px) {
    .custom-gap {
        gap: 50px;
        flex-direction: column;
    }
}

@media (max-width: 640px) {
    .custom-gap {
        gap: 20px;
    }
}
</style>