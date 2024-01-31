<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <html data-theme="dark">
    <main class="w-[100%] h-screen pt-[5rem] flex-col px-[15%] justify-center m-auto">
        <!-- Domeenid -->
        <container class="flex flex-row w-full h-full items-center justify-center">
            <div class="w-[65%] mx-2 flex-row justify-center items-center mb-64">

                <div
                    class="flex justify-center items-center m-auto max-w-[70%] max-h-[70%]">
                    <CheckCircleIcon class="text-green-400 rounded-full"></CheckCircleIcon>
                </div>
                <form class="mt-10">
                    <div class="rounded-t-md text-xl font-semibold p-4 bg-zinc-900 text-center">Makse Sooritatud</div>
                    <table class="table table-md bg-zinc-900/50 rounded-md rounded-t-none">
                        <tbody>
                            <!-- row 1 -->
                            <tr class="border-0">
                                <td class="flex content-center items-end text-center font-semibold text-lg">
                                    Täname ostu eest!
                                </td>
                                <td class="flex content-start items-start text-center font-semibold text-lg">
                                    Saadame teie emailile informatsiooni domeeni kohta.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </container>

    </main>
    </html>
</template>
