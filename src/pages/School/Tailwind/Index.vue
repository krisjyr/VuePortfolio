<script setup>
</script>

<template>
    <html data-theme="dark">
        <main class="w-[100%] h-screen pt-[5rem] flex-col px-[15%] justify-center m-auto">

            <ul class="steps w-[100%] py-[1rem] mt-12 mb-4">
                <li class="step step-primary">Domeeni Valimine</li>
                <li class="step">Info</li>
                <li class="step">Maksmine</li>
            </ul>

            <div class="flex justify-center w-full py-[1rem] mb-12">
                <input type="text" placeholder="Domeeni nimi" class="input input-bordered input-primary w-full max-w-6xl" />
            </div>
            <!-- Domeenid -->
            <container class="flex flex-row w-[100%]">
                <div class="w-[65%] mx-2">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900">Saadaval Domeenid</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <!-- head -->
                        <thead>
                            <tr class="border-zinc-900">
                                <th>Domain</th>
                                <th>Price</th>
                                    <td class="flex content-end">
                                        <label class="ml-auto">
                                        <button type="button" class="btn btn-primary btn-sm btn-outline">Add everything</button>
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
                                        <button type="button" class="btn btn-primary btn-outline btn-sm">Add to cart</button>
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
                                    <td class="flex  content-end">
                                        <label class="ml-auto">
                                        <button type="button" class="btn btn-primary btn-outline btn-sm">Add to cart</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                                        <button type="button" class="btn btn-error btn-outline btn-sm">Remove everything</button>
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
                        <button type="submit" @click="$router.push('/works/school/tailwind/domainstore2')" class="btn btn-primary btn-outline w-[100%] mt-[1rem] m-auto font-bold">JÄTKA</button>
                    </div>
                </container>

            </container>

        </main>
        </html>
</template>
