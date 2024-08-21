<script setup lang="ts">
import thiagoPhoto from '/thiagoPhoto.jpeg';

const props = defineProps<{
    isDarkMode: boolean
}>();

console.log(props.isDarkMode)



</script>

<template>
    <div class="container p-4 md:px-0 mt-32 flex flex-col sm:flex-row">
        <section>
            <pre class="whitespace-pre-line">
                Olá 👋,
                Meu nome é
                Thiago Andrade
                e sou um desenvolvedor frontend.
            </pre>
        </section>
        <picture>
            <img class="rounded-full w-28" :src="thiagoPhoto" alt="">
        </picture>
    </div>
</template>