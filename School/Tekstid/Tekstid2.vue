<script setup>

</script>

<template>
                <main class="pt-[5rem]">
        <h1 class="Main">Teksti vormindamine 2 - fontide kasutamine ja ühikud</h1>
        <p class="Main">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id eius nostrum neque laudantium
            voluptatibus
            inventore.
        </p>
        <h2 class="Courier">Courier New</h2>
        <p class="Courier">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id eius nostrum neque
            laudantium voluptatibus inventore. Molestiae aperiam odit, similique tempora, iure voluptates aspernatur, et
            harum corporis in molestias sapiente?
        </p>
        <a href="https://www.cssfontstack.com/Courier-New" class="Courier">Kasutatud Font</a>
        <h2 class="Times">Roboto</h2>
        <p class="Times">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id eius nostrum neque
            laudantium voluptatibus inventore. Molestiae aperiam odit, similique tempora, iure voluptates aspernatur, et
            harum corporis in molestias sapiente?
        </p>
        <a href="https://fonts.google.com/specimen/Roboto" class="Times">Kasutatud Font</a>
        <h2 class="Tahoma">FF Good Headline</h2>
        <p class="Tahoma">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id eius nostrum neque
            laudantium voluptatibus inventore. Molestiae aperiam odit, similique tempora, iure voluptates aspernatur, et
            harum corporis in molestias sapiente?
        </p>
        <a href="https://fonts.adobe.com/fonts/ff-good-headline#fonts-section" class="Tahoma">Kasutatud Font</a>
    </main>
</template>

<style scoped>
:root {
    background-color: rgb(17, 17, 22);
}

.Main {
    font-family: 'Courier New', Courier, monospace;
    color: white;
}

.Courier {
    font-family: 'Courier New', Courier, monospace;
    color: greenyellow;
    text-decoration: line-through;
}

.Times {
font-family: 'Roboto', sans-serif;
    color: aqua;
        text-decoration: underline dotted;
}

.Tahoma {
font-family: "ff-good-headline-web-pro", sans-serif;
    color: blueviolet;
    text-decoration: underline;
}

a {
color: rgb(241, 15, 34) !important;
}
</style>