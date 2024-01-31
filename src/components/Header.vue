<script setup>

</script>

<template>
    <header class="sticky top-0 z-50 w-full">
        <div class="navbar absolute backdrop-blur-sm flex-row content-center z-50">
            <div class="lg:m-auto">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <button @click="$router.push('/hello')" class="btn btn-ghost font-thin btn-lg">Say Hello</button>
                        <button @click="$router.push('/works')" class="btn btn-ghost font-thin btn-lg">See My Work</button>
                    </ul>
                </div>
                <button @click="$router.push('/')" class="btn btn-ghost font-thin btn-lg lg:hidden">KRISJYR</button>
                <ul class="lg:flex flex-row gap-20 hidden">
                    <button @click="$router.push('/hello')" class="btn btn-ghost font-thin btn-lg">Say Hello</button>
                    <button @click="$router.push('/')" class="btn btn-ghost font-thin btn-lg">KRISJYR</button>
                    <button @click="$router.push('/works')" class="btn btn-ghost font-thin btn-lg">See My Work</button>
                </ul>
            </div>
        </div>
</header></template>