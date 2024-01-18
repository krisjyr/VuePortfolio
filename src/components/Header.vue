<script setup>

</script>

<template>

        <header class="sticky top-0 z-50">
            <div class="navbar absolute backdrop-blur-sm flex-row content-center z-50">
                <div class="m-auto">
                    <ul class="flex flex-row gap-20">
                        <button @click="$router.push('/hello')"  class="btn btn-ghost font-thin btn-lg">Say Hello</button>
                        <button @click="$router.push('/')" class="btn btn-ghost font-thin btn-lg">KRISJYR</button>
                        <button @click="$router.push('/works')" class="btn btn-ghost font-thin btn-lg">See My Work</button>
                    </ul>
                </div>
            </div>
        </header>

</template>