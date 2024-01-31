<script setup>
import Background from '../components/Background.vue'
import { CodeBracketIcon, Square3Stack3DIcon } from "@heroicons/vue/24/outline"

</script>

<template>
<Background/>
    <div class="absolute -z-10 h-[calc(75vh)] w-full m-auto flex flex-col justify-center align-middle">
        <div class="w-full m-auto text-center align-middle text-[25vw] font-light blur-sm text-[#0e071f] select-none">
            KRISJYR</div>
    </div>
    <main class="gradientthing xl:min-h-[250vh] min-h-[350vh] min-w-[100vw]">


        <div
            class="hero h-[75vh] bg-transparent flex flex-col align-middle has-[:hover]:backdrop-blur-sm transition duration-400">
            <div class="hero-content xl:scale-125 h-full xl-[4rem] p-36 rounded-xl m-auto flex flex-col justify-center hover:">
                <div class="m-auto flex flex-col justify-center">
                    <h1 class="text-5xl font-light text-center">Software Developer, Designer</h1>
                    <p class="py-6 font-light text-center text-lg">I design and code beautifully simple things, and I love
                        what I
                        do.</p>
                    <button @click="$router.push('/works')" class="btn btn-primary btn-outline btn-lg font-light">Check out my
                        work!</button>
                </div>
            </div>
        </div>

        <div>
            <div class="hero h-[50%] pt-64 bg-transparent flex flex-col">
                <div class="hero-content h-full 2xl:scale-125 p-36 rounded-xl m-auto flex flex-col justify-center ">
                    <div class="m-auto flex flex-col justify-center">
                        <h1 class="text-5xl font-light text-center">Hi, I'm Kristofer. Nice to meet you.</h1>
                        <p class="py-6 font-light text-center text-lg">Currently I am learning in Tallinn Polytechnic school
                            as a 2nd
                            year Software Developer. I've learned to use Tailwind CSS and it's plugin DaisyUI (which this
                            site is made
                            with
                            by the way), made designs in Figma, collaborated with classmates on our C# project and much
                            more. I'm
                            confident,
                            naturally curious, and perpetually working on improving my skills as a software developer.</p>
                    </div>
                </div>
            </div>

            <div
                class="hero-content h-[40%] w-[100vw] mt-36 xl:scale-110 scale-[.85] bg-base-300 rounded-xl m-auto flex flex-col justify-center ">
                <div class="m-auto h-[100%] w-[100%] p-9 flex xl:flex-row flex-col justify-center">

                    <div class="h-full w-full m-auto flex flex-col justify-center py-12 px-24">
                        <div class=" pb-8 m-auto">
                            <div class="w-28 rounded-full ring ring-primary">
                                <CodeBracketIcon class="scale-[.65] text-primary" />
                            </div>
                        </div>
                        <h1 class="text-2xl pb-8 m-auto font-light text-primary text-center">Software Developer</h1>
                        <p class="text-lg m-auto pb-8 font-light text-center">I like to code things from scratch, and enjoy
                            bringing
                            ideas to life.</p>
                        <h1 class="text-[clamp(0.25rem,1rem,80vh)] m-auto text-accent font-light text-center">Languages I
                            speak</h1>
                        <p class="text-[clamp(0.25rem,1rem,80vh)] m-auto pb-8 font-light text-center">HTML, CSS, Javascript,
                            Lua,
                            Python, SQL </p>
                        <h1 class="text-[clamp(0.25rem,1rem,80vh)] m-auto text-accent font-light text-center">Dev Tools</h1>
                        <ul class="text-[clamp(0.25rem,1rem,80vh)] m-auto font-light text-center">
                            <li>Visual Studio Code</li>
                            <li>TailwindCSS</li>
                            <li>DaisyUI</li>
                            <li>Github</li>
                            <li>Git</li>
                        </ul>
                    </div>

                    <div class="divider xl:divider-horizontal py-12"></div>

                    <div class="h-full w-full m-auto flex flex-col justify-center py-12 px-24">
                        <div class="avatar pb-8 m-auto">
                            <div class="w-28 rounded-full ring ring-primary">
                                <Square3Stack3DIcon class="scale-[.65] text-primary" />
                            </div>
                        </div>
                        <h1 class="text-2xl pb-8 m-auto font-light text-primary text-center">Designer</h1>
                        <p class="text-lg m-auto pb-8 font-light text-center">I value clean design and organized structure,
                            so I find
                            myself creating pixel perfect designs.</p>
                        <h1 class="text-[clamp(0.25rem,1rem,80vh)] m-auto text-accent font-light text-center">Things I enjoy
                            designing
                        </h1>
                        <p class="text-[clamp(0.25rem,1rem,80vh)] m-auto pb-8 font-light text-center">UX, UI, Web, Apps</p>
                        <h1 class="text-[clamp(0.25rem,1rem,80vh)] m-auto text-accent font-light text-center">Design Tools
                        </h1>
                        <ul class="text-[clamp(0.25rem,1rem,80vh)] m-auto font-light text-center">
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Webflow</li>
                            <li>Framer</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    </main>
</template>

<style scoped>
.gradientthing {
    height: 125vh;
    background:
        radial-gradient(calc(800px * 0.8) circle at 0% 45%, #080b3f, #040622, transparent),

        radial-gradient(calc(800px * 0.8) circle at 100% 44%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 5% 70%, #6D32EC, #301272, transparent),
        radial-gradient(calc(800px * 0.8) circle at 20% 85%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 80% 55%, #6D32EC, #301272, transparent),
        radial-gradient(calc(800px * 0.8) circle at 100% 82%, #C200CC, #8e0396, transparent),
                                radial-gradient(calc(800px * 0.8) circle at 70% 48%, #080b3f, #040622, transparent),
        radial-gradient(calc(800px * 0.8) circle at 40% 48%, #C200CC, #8e0396, transparent),
        radial-gradient(calc(800px * 0.8) circle at 60% 80%, #210857, #260964, transparent);
}
</style>