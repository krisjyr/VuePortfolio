<script setup>

</script>

<template>
    <main class="pt-[5rem]">
        <div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">

            <svg style="position:absolute; overflow: hidden; width: 100%; height: 100%">

                <defs>
                    <linearGradient id="grass" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:rgb(103, 145, 103);stop-opacity:1" />
                      <stop offset="100%" style="stop-color:rgb(52, 66, 52);stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgb(255, 102, 0);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(202, 216, 0);stop-opacity:1" />
                      </linearGradient>
                  </defs>

                <rect x="0" y="0" width="10000" height="35%" style="fill: url(#sky)"></rect>
                <rect x="0" y="250" width="10000" height="100%" fill="url(#grass)"></rect>
                <rect x="100" y="133.716" width="300" height="300" style="fill: rgb(103, 145, 103); stroke: black"></rect>
                <rect x="212.5" y="313.716" width="75" height="120" style="fill: rgb(121, 56, 56); stroke: black"></rect>
                <rect x="115" y="160" width="110" height="100" style="fill: lightblue; stroke: black"></rect>
                <rect x="115" y="320" width="80" height="50" style="fill: lightblue; stroke: black"></rect>
                <rect x="300" y="320" width="80" height="50" style="fill: lightblue; stroke: black"></rect>
                <rect x="270" y="160" width="110" height="100" style="fill: lightblue; stroke: black;"></rect>
                <circle cx="225px" cy="375px" r="5" fill="brown" stroke="black"></circle>
                <polyline points="80,140 250,40 420,140" fill="red" stroke="black"></polyline>
            </svg>

            <svg height="200" width="400" id="cloud" style="position: relative; animation: fly 10s infinite alternate; z-index: 50; left:50%">
                <circle cx="200" cy="80" r="50" fill="white"/>
                <circle cx="180" cy="120" r="40" fill="white"/>
                <circle cx="140" cy="100" r="40" fill="white"/>
                <circle cx="230" cy="125" r="30" fill="white"/>
                <circle cx="270" cy="115" r="35" fill="white"/>
                <circle cx="255" cy="65" r="25" fill="white"/>
                </svg>

                <svg height="200" width="400" id="cloud" style="position: relative; animation: fly 18s infinite alternate; z-index: 50; left:40%; top: 20px">
                    <circle cx="200" cy="80" r="50" fill="white"/>
                    <circle cx="180" cy="120" r="40" fill="white"/>
                    <circle cx="140" cy="100" r="40" fill="white"/>
                    <circle cx="230" cy="125" r="30" fill="white"/>
                    <circle cx="270" cy="115" r="35" fill="white"/>
                    <circle cx="255" cy="65" r="25" fill="white"/>
                    </svg>
        </div>
        </main>
</template>

<style scoped>
        @keyframes fly {
	0% {transform: translateX(-250px)}
	100% {transform: translateX(250px)}
}
</style>