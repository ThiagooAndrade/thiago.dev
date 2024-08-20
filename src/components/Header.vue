<script setup lang="ts">
import { ref } from 'vue';
import githubIcon from '/github.svg'
import linkedinIcon from '/linkedin.svg'
import menuHamburgerOpenedDark from '/menu-hamburger.svg';
import menuHamburgerOpenedLight from '/menu-hamburger-light.svg';

type menuHamburger = {
    src: string;
    alt: string;
    w: string;
}

let navOpen = ref(false);

function toggleNav() {
    navOpen.value =!navOpen.value;
    console.log(navOpen.value);
}

function navClass() {
    return navOpen.value ? "block" : "hidden";
}

</script>

<template>
    <header class="container p-4 sm:py-4 md:px-0 justify-between flex relative">
            <h2 class="text-sm">Thiago Andrade</h2>

            <!-- nav desktop -->
            <nav class="sm:flex hidden gap-4 items-center">
                <ul class="flex gap-2 text-sm">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/tech">Tech Stack</a></li>
                    <li><a href="/projects">Projects</a></li>   
                    <li><a href="/contact">Contact</a></li>   
                </ul>
                <div class="flex gap-2 justify-center items-center">
                    <a href=""><img class="w-6" :src="githubIcon" alt="Icone do github"></a>
                    <a href=""><img class="w-6" :src="linkedinIcon" alt="Icone do linkedin"></a>
                </div>
            </nav>
            <!-- nav mobile -->
            <nav class="sm:hidden block">
                <button @click="toggleNav" class="cursor-pointer animate-ringMenu w-6"><img :class="menuHamburgerOpenedLight" :src="menuHamburgerOpenedLight" :alt="menuHamburgerOpenedDark"></button>
                <div :class="'absolute right-0 top-0 z-0 bg-black h-full text-white animate-openingModal ' + navClass()">oi</div>
            </nav>
    </header>
</template>