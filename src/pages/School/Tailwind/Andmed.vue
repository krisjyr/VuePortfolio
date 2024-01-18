<script setup>

function ettevote() {

    const input = document.getElementById("checkbox")
    const hider = document.getElementById("hider")
    if (input.checked) {
        hider.style.display = "flex"
        console.log("crazy")
    } else {
        hider.style.display = "none"
    }

}

</script>

<template>

    <html data-theme="dark">
    <main class="w-[100%] h-screen pt-[5rem] flex-col px-[15%] justify-center m-auto">

        <ul class="steps w-[100%] py-[1rem] mt-12 mb-4">
            <li class="step step-primary">Domeeni Valimine</li>
            <li class="step step-primary">Info</li>
            <li class="step">Maksmine</li>
        </ul>
        <!-- Domeenid -->
        <container class="flex flex-row w-[100%]">
            <div class="w-[65%] mx-2">
                <form class="mb-4">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900">Personaalne Informatsioon</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <tbody>
                            <!-- row 1 -->
                            <tr class="border-0">
                                <td class="flex content-center">
                                    <input type="text" placeholder="Eesnimi*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="text" placeholder="Perekonnanimi*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                                <td class="flex">
                                    <input type="email" placeholder="Email*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="tel" placeholder="Telefon*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <form class="mb-4">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900">Billing</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <tbody>
                            <!-- row 1 -->
                            <tr class="border-0">
                                <td class="flex content-center">
                                    <input type="text" placeholder="Aadress 1*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="text" placeholder="Aadress 2 (valikuline)"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto" />
                                </td>
                                <td class="flex content-center">
                                    <input type="text" placeholder="Maakond*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="text" placeholder="Linn*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                                <td id="hider" class="flex content-center">
                                    <input type="text" placeholder="Ettevõtte nimi*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="text" placeholder="Ettevõtte reg. kood*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                                <td class="flex content-center">
                                    <input type="text" placeholder="Postiindeks*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="flex items-center mb-4">
                    <label class="label cursor-pointer">
                        <input id="checkbox" type="checkbox" onclick="ettevote()"
                            class="checkbox checkbox-primary checkbox-lg" />
                        <span class="ml-4 select-none text-lg">Ettevõte</span>
                    </label>
                </div>
                <form class="mb-4">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900">Konto</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <tbody>
                            <!-- row 1 -->
                            <tr class="border-0">
                                <td class="flex content-center">
                                    <input type="password" placeholder="Parool*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                    <input type="password" placeholder="Kinnita Parool*"
                                        class="input input-bordered input-primary w-full max-w-lg m-auto invalid:input-error"
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>



            <!-- Ostukorv ja nupp -->
            <container class="w-[35%]">
                <div class="mx-2 flex flex-col justify-center content-center">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900">Ostukorv</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <!-- head -->
                        <thead>
                            <tr class="border-zinc-900">
                                <th>Domain</th>
                                <th>Price</th>
                                <td class="flex content-end">
                                    <label class="ml-auto">
                                        <button type="button" class="btn btn-error btn-outline btn-sm">Remove
                                            everything</button>
                                    </label>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr class="border-zinc-900">
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <div class="font-bold">Name.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge badge-accent badge-lg">350€</span>
                                    <span class="text-lg">/ year</span>
                                </td>
                                <td class="flex content-end">
                                    <label class="ml-auto">
                                        <button type="button" class="btn btn-error btn-outline btn-sm">Remove</button>
                                    </label>
                                </td>
                            </tr>
                            <!-- row 2 -->
                            <tr class="border-zinc-900">
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <div class="font-bold">Name.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge badge-accent badge-lg">350€</span>
                                    <span class="text-lg">/ year</span>
                                </td>
                                <td class="flex content-end">
                                    <label class="ml-auto">
                                        <button type="button" class="btn btn-error btn-outline btn-sm">Remove</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="border-zinc-900 border-t">
                                <td>
                                    <span class="text-lg">Kokku</span>
                                </td>
                                <td>
                                    <span class="badge badge-accent badge-lg">700€</span>
                                    <span class="text-lg">/ year</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                        <button type="submit" @click="$router.push('/works/school/tailwind/domainstore3')"
                            class="btn btn-primary btn-outline w-[100%] mt-[1rem] m-auto font-bold">JÄTKA</button>
                        <button type="submit" @click="$router.push('/works/school/tailwind/domainstore1')"
                            class="btn btn-neutral btn-outline w-[100%] mt-[1rem] m-auto font-bold">TAGASI</button>

                </div>
            </container>

        </container>

    </main>
    </html>
</template>

<style scoped>
#hider {
    display: none;
}
</style>