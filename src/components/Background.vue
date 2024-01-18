<script setup>
import { ref, onMounted, reactive, watch } from 'vue'
import { useMouse } from '@vueuse/core'

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
  randomString = length => Array.from(Array(length)).map(randomChar).join("");

const mouseDefault = reactive(useMouse())

const lettersthingy = ref(null)

onMounted(() => {
  watch(mouseDefault, (newVal) => {
    lettersthingy.value.style.setProperty("--x", `${newVal.x}px`);
    lettersthingy.value.style.setProperty("--y", `${newVal.y}px`);
    lettersthingy.value.innerText = randomString(100000)
  })
})

</script>

<template>
  <div class="lettersgradient absolute h-[75vh] w-full mix-blend-darken -z-10 pointer-events-none">
  </div>
  <div ref="lettersthingy"
    class="lettersthingy -z-20 font-mono overflow-hidden absolute h-[75vh] w-full text-white text-sm break-words opacity-100 hover:opacity-100 transition-opacity duration-300 select-none">
  </div>
</template>

<style scoped>
.lettersthingy {
  --x: 0px;
  --y: 0px;
    -webkit-mask-image: radial-gradient(calc(350px * 0.8) circle at var(--x) var(--y),
      rgb(255 255 255) 20%,
      rgb(255 255 255 / 25%),
      transparent);
        background: -webkit-linear-gradient(rgb(255,255,255) 50%,rgba(255,255,255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lettersgradient {
  background: radial-gradient(rgb(41 121 255) 50%, rgb(56 182 255),rgb(42 252 152))
}
</style>