<script setup>

</script>

<template>
        <main class="pt-[5rem]">
        <div class="tulbad">
            <div class="tulp">
                <ol>
                    <li>
                        <h2>PNG</h2>
                        <img src="./png.png" alt="" width="250" height="250">
                        <p>24.3 kB</p>
                    </li>
                    <li>
                        <h2>SVG</h2>
                        <img src="./svg.svg" alt="" width="250" height="250">
                        <p>1.33 kB</p>
                    </li>
                    <li>
                        <h2>WebP</h2>
                        <img src="./webp.webp" alt="" width="250" height="250">
                        <p>26.5 kB</p>
                    </li>
                    <li>
                        <h2>JPG</h2>
                        <img src="./jpg.jpg" alt="" width="250" height="250">
                        <p>41.0 kB</p>
                    </li>
                </ol>
            </div>
            <div class="tulp">
                <ol>
                    <li>
                        <h2>Kirju SVG</h2>
                        <img src="./svg2.svg" alt="" width="250" height="251">
                        <p>6.96 kB</p>
                    </li>
                    <li>
                        <h2>Kirju PNG</h2>
                        <img src="./png2.png" alt="" width="250" height="251">
                        <p>51.7 kB</p>
                    </li>
                    <li>
                        <h2>Kirju WebP</h2>
                        <img src="./webp2.webp" alt="" width="250" height="251">
                        <p>19.6 kB</p>
                    </li>
                    <li>
                        <h2>Kirju JPG</h2>
                        <img src="./jpg2.jpg" alt="" width="250" height="251">
                        <p>24.8 kB</p>
                    </li>
                </ol>
            </div>
        </div>
        </main>
</template>

<style scoped>
body {
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/background */
    background: url('./waawaa-min.jpg') fixed;
    color: white;
}

.tulbad {
    display: flex;
    max-width: 780px;
    margin: 0 auto;
}

.tulp {
    flex: 1;
    padding: 20px;
    text-align: center;
    
}

li {
    padding: 1rem;
    margin-bottom: 4rem;
    color: black;
    list-style-type: none;
}

h2 {
    font-family: sans-serif;
    color: white;
}

p {
        font-family: sans-serif;
            color: white;
}
</style>