<script setup>

</script>

<template>
    <div class="absolute -z-10 h-[75vh] w-full m-auto flex flex-col justify-center align-middle">
        <div class="w-full m-auto text-center align-middle text-[25vw] font-light blur-sm text-[#0e071f] select-none">
            KRISJYR</div>
    </div>
    <main>
        <div class="gradientthing flex flex-col pt-64 gap-36">
            <h1 class="text-center text-5xl font-light">Personal</h1>
            <div class="flex flex-row">
                <div class="flex flexrow justify-center gap-24 align-middle w-full">
                    <button @click="$router.push('/')"
                        class="card w-[13vw] 2xl:h-[13vh] h-[16vh] my-auto bg-base-100 shadow-xl flex transition hover:scale-[1.1] active:bg-primary group">
                        <h2
                            class="card-title font-light 2xl:flex-row flex-col p-4 text-primary transition group-active:text-base-100">
                            Portfolio
                        </h2>
                        <p
                            class="font-light text-left px-4 text-primary transition group-active:text-base-100">
                            Made using Vue.js, TailwindCSS and DaisyUI
                    </p>
                    </button>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>
.gradientthing {
    height: 100vh;
    width: 100%;
    background:
        radial-gradient(calc(800px * 0.8) circle at 0% 10%, #080b3f, #040622, transparent),
        radial-gradient(calc(800px * 0.8) circle at 80% 0%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 0% 50%, #6D32EC, #301272, transparent),
        radial-gradient(calc(800px * 0.8) circle at 20% 80%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 80% 40%, #6D32EC, #301272, transparent),
        radial-gradient(calc(800px * 0.8) circle at 100% 60%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 40% 30%, #080b3f, #040622, transparent),
        radial-gradient(calc(800px * 0.8) circle at 60% 60%, #210857, #260964, transparent);
}
</style>