<template>
    <div>
        <router-link :to="{ name: 'index' }" class="flex items-center mb-10 cursor-pointer">
            <div class="w-25px h-25px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z" />
                </svg>
            </div>
            <h5 class="mb-0 ml-4">Go back to list</h5>
        </router-link>

        <template v-if="Object.keys(yachtData).length > 0">
            <div class="mb-4">
                <h2 class="font-medium">{{ yachtData.boatName }}</h2>
                <h5 class="font-normal">{{ yachtData.Brand?.brand.name }} - {{ yachtData.Brand?.model }}</h5>
            </div>
            <div class="position-relative grid grid-cols-5 gap-2 row-span-2 h-400px rounded overflow-hidden mb-4">
                <div
                    v-for="(image, index) in img"
                    :key="image"
                    class="position-relative"
                    :class="{ 'col-span-3 row-span-2': index == 0 }">
                    <img :src="image" class="position-absolute inset-0 w-full h-full un-object-cover" />
                </div>
            </div>
            <div class="row gx-5 mb-4">
                <div class="col-md-8">
                    <h4>About {{ yachtData.Brand?.brand.name }} {{ yachtData.Brand?.model }} - "{{ yachtData.boatName }}"</h4>
                    <p class="text-sm">
                        {{ yachtData.salesPitch?.extensiveDescription }}
                    </p>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body p-6">
                            <div class="mb-3">
                                <h5 class="card-title">{{ yachtData.Brand?.brand.name }} {{ yachtData.Brand?.model }}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Building year {{ yachtData.buildingYear }}</h6>
                            </div>
                            <table class="w-full">
                                <tbody>
                                    <tr>
                                        <td class="w-50">Dimensions</td>
                                        <td class="w-50">32.5 x 7.38 x 3.50</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">Hull material</td>
                                        <td class="w-50">{{ yachtData.hullMaterial?.sStructuralmaterial?.type }}</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">Cabins</td>
                                        <td class="w-50">{{ yachtData.accomodation?.areasSummary?.cabinsInTotal }}</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">Berths</td>
                                        <td class="w-50">{{ yachtData.accomodation?.areasSummary?.berthsInTotal }}</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">Price indication</td>
                                        <td class="w-50">&euro; {{ parseInt(yachtData.price).toLocaleString('nl-NL') }}</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">VAT status</td>
                                        <td class="w-50">{{ yachtData.publishing?.vatStatus.type }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card position-sticky">
                <ul class="d-flex un-list-none mb-0 px-3 text-sm">
                    <li
                        v-for="nav in menu"
                        :key="nav"
                        class="border-b-4 border-x-0 border-t-0 border-solid border-transparent pt-20px pb-3 px-2 mr-6 cursor-pointer">
                        {{ nav }}
                    </li>
                </ul>
            </div>
            <div class="pt-4">
                <div class="card">
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Boat name</td>
                                    <td>Bolero</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <svg
                role="img"
                width="610"
                height="360"
                aria-labelledby="loading-aria"
                viewBox="0 0 610 360"
                preserveAspectRatio="none"
                class="h-full w-full">
                <title id="loading-aria">Loading...</title>
                <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip-path)" style="fill: url('#fill')" />
                <defs>
                    <clipPath id="clip-path">
                        <rect x="1" y="1" rx="4" ry="4" width="140" height="14" />
                        <rect x="1" y="20" rx="4" ry="4" width="242" height="14" />
                        <rect x="1" y="41" rx="4" ry="4" width="592" height="183" />
                        <rect x="2" y="237" rx="4" ry="4" width="165" height="12" />
                        <rect x="2" y="255" rx="4" ry="4" width="385" height="105" />
                        <rect x="182" y="318" rx="0" ry="0" width="6" height="10" />
                        <rect x="409" y="237" rx="4" ry="4" width="179" height="122" />
                        <rect x="460" y="291" rx="0" ry="0" width="5" height="2" />
                    </clipPath>
                    <linearGradient id="fill">
                        <stop offset="0.599964" stop-color="#ffffff" stop-opacity="1">
                            <animate
                                attributeName="offset"
                                values="-2; -2; 1"
                                keyTimes="0; 0.25; 1"
                                dur="2s"
                                repeatCount="indefinite" />
                        </stop>
                        <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                            <animate
                                attributeName="offset"
                                values="-1; -1; 2"
                                keyTimes="0; 0.25; 1"
                                dur="2s"
                                repeatCount="indefinite" />
                        </stop>
                        <stop offset="2.59996" stop-color="#ffffff" stop-opacity="1">
                            <animate
                                attributeName="offset"
                                values="0; 0; 3"
                                keyTimes="0; 0.25; 1"
                                dur="2s"
                                repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>
            </svg>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useFetch } from '@/utils/api';
import { useMemoize } from '@vueuse/core';
import { IYacht } from '@/@types/yacht';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();

const img = [
    'https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/42091/pexels-photo-42091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2090763/pexels-photo-2090763.jpeg?auto=compress&cs=tinysrgb&w=1600'
];

const menu = [
    'General Information',
    'Construction',
    'Engine',
    'Electrical system',
    'Sails & Rigging',
    'Accommodation',
    'Navigational equipment',
    'Additional equipment'
];

let yachtData = ref<any>({});

watch(
    () => route.params.id,
    async (value) => {
        const getYatchData = useMemoize(
            async (id: string | string[]): Promise<IYacht[]> => useFetch(`/yacht-one-extendedinfo/${id}`)
        );
        yachtData.value = await getYatchData(value);
    },
    { immediate: true }
);
</script>
