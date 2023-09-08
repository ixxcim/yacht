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
        <div class="mb-4">
            <h2 class="font-medium">Bolero</h2>
            <h5 class="font-normal">German Frers - 105</h5>
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
                <h4>About German Frers 105 - "Bolero"</h4>
                <p class="text-sm">
                    Originally built for Paul Berrow (Duran Duran and also ex co-owner 78-foot maxi-yacht Drum which competed in
                    the Whitbread Round the World Race) with naval architecture by German Frers. Overall winner of the Palma's
                    Superyacht Cup twice, in 1999 and 2017. This striking aluminium German Frers 105 footer was built as a light
                    and fast sloop with a well-thought-out concept, including a generous layout offering ample space for maximum
                    comfort and sufficient storage facilities for long voyages. Extremely spacious accommodations for eight guests
                    in an owner’s staterooms and three guest cabins. There is also a further twin-bunked cabin, which can serve
                    for a nanny or extra crew. Crew area for four crew members separate from accommodation of the guests including
                    separate access In 2015 she underwent a full refit. The refit cost close to 151.71 PHPm, as such Bolero now is
                    in turn-key condition for cruising. Bolero has been maintained to an exceptionally high level and has
                    benefitted from an open-checkbook budget where systems and equipment have constantly been upgraded and
                    improved to keep this superyacht looking and working better than new. This magnificent yacht is ready for her
                    new owner to step aboard for an extended voyage.
                </p>
            </div>
            <div class="col-md-4">
                <div class="card shadow">
                    <div class="card-body p-6">
                        <div class="mb-3">
                            <h5 class="card-title">German Frers 105</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Building year 1990</h6>
                        </div>
                        <table class="w-full">
                            <tbody>
                                <tr>
                                    <td class="w-50">Dimensions</td>
                                    <td class="w-50">32.5 x 7.38 x 3.50</td>
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

let yachtData = ref<IYacht[]>([]);

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
