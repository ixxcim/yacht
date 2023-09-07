<template>
    <div class="container">
        <div class="py-5">
            <div class="row gx-5">
                <div class="col-md-6 col-lg-3">
                    <Filter :is-loading="isLoadingFilter" />
                </div>
                <div class="col-md-6 col-lg-9">
                    <div v-if="isLoading" class="row gy-4">
                        <div class="col-md-4">
                            <svg
                                role="img"
                                width="476"
                                height="500"
                                aria-labelledby="loading-aria"
                                viewBox="0 0 476 500"
                                preserveAspectRatio="none">
                                <title id="loading-aria">Loading...</title>
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    clip-path="url(#clip-path)"
                                    style="fill: url('#fill')" />
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect x="24" y="344" rx="3" ry="3" width="186" height="14" />
                                        <rect x="24" y="323" rx="3" ry="3" width="236" height="14" />
                                        <rect x="23" y="250" rx="3" ry="3" width="266" height="21" />
                                        <rect x="24" y="365" rx="3" ry="3" width="147" height="14" />
                                        <rect x="25" y="287" rx="3" ry="3" width="151" height="12" />
                                        <rect x="25" y="403" rx="3" ry="3" width="101" height="14" />
                                        <rect x="9" y="8" rx="3" ry="3" width="302" height="224" />
                                    </clipPath>
                                    <linearGradient id="fill">
                                        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
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
                                        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
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
                        </div>
                        <div class="col-md-4">
                            <svg
                                role="img"
                                width="476"
                                height="500"
                                aria-labelledby="loading-aria"
                                viewBox="0 0 476 500"
                                preserveAspectRatio="none">
                                <title id="loading-aria">Loading...</title>
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    clip-path="url(#clip-path)"
                                    style="fill: url('#fill')" />
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect x="24" y="344" rx="3" ry="3" width="186" height="14" />
                                        <rect x="24" y="323" rx="3" ry="3" width="236" height="14" />
                                        <rect x="23" y="250" rx="3" ry="3" width="266" height="21" />
                                        <rect x="24" y="365" rx="3" ry="3" width="147" height="14" />
                                        <rect x="25" y="287" rx="3" ry="3" width="151" height="12" />
                                        <rect x="25" y="403" rx="3" ry="3" width="101" height="14" />
                                        <rect x="9" y="8" rx="3" ry="3" width="302" height="224" />
                                    </clipPath>
                                    <linearGradient id="fill">
                                        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
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
                                        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
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
                        </div>
                        <div class="col-md-4">
                            <svg
                                role="img"
                                width="476"
                                height="500"
                                aria-labelledby="loading-aria"
                                viewBox="0 0 476 500"
                                preserveAspectRatio="none">
                                <title id="loading-aria">Loading...</title>
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    clip-path="url(#clip-path)"
                                    style="fill: url('#fill')" />
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect x="24" y="344" rx="3" ry="3" width="186" height="14" />
                                        <rect x="24" y="323" rx="3" ry="3" width="236" height="14" />
                                        <rect x="23" y="250" rx="3" ry="3" width="266" height="21" />
                                        <rect x="24" y="365" rx="3" ry="3" width="147" height="14" />
                                        <rect x="25" y="287" rx="3" ry="3" width="151" height="12" />
                                        <rect x="25" y="403" rx="3" ry="3" width="101" height="14" />
                                        <rect x="9" y="8" rx="3" ry="3" width="302" height="224" />
                                    </clipPath>
                                    <linearGradient id="fill">
                                        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
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
                                        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
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
                        </div>
                    </div>
                    <div v-else>
                        <template v-if="yachtList.length > 0">
                            <div class="row gy-4">
                                <div v-for="item in yachtList" :key="item.id" class="col-md-4">
                                    <div
                                        class="card un-cursor-pointer un-transition-transform un-duration-300 hover:-translate-y-2">
                                        <div class="position-relative un-h-56">
                                            <img
                                                :src="item.primaryPhoto.photo.formats.small.url"
                                                :alt="item.Brand.brand.name"
                                                class="position-absolute inset-0 w-full h-100 card-img-top" />
                                            <span
                                                class="badge position-absolute un-top-4 un-right-4"
                                                :class="{
                                                    'bg-success': item.publishing.sale_status?.type === 'Sold',
                                                    'bg-warning': item.publishing.sale_status?.type === 'Sale Pending',
                                                    'bg-primary': item.publishing.sale_status?.type === 'For Sale'
                                                }"
                                                >{{ item.publishing.sale_status?.type }}</span
                                            >
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {{ item.Brand.brand.name }}
                                                {{ item.Brand.model }}
                                                {{ item.boatName }}
                                            </h5>
                                            <p class="card-text">Building year {{ item.buildingYear }}</p>

                                            <div class="grid grid-cols-2 mb-4 un-text-sm">
                                                <div>Dimensions (in m)</div>
                                                <div>
                                                    {{ item.hullMaterial.hullMaterial.material }}
                                                </div>
                                                <div>Hull material</div>
                                                <div>
                                                    {{ item.hullMaterial.hullMaterial.material }}
                                                </div>
                                                <div>Cabins</div>
                                                <div>
                                                    {{ item.accomodation.areasSummary?.cabinsInTotal }}
                                                </div>
                                                <div>Berths</div>
                                                <div>
                                                    {{ item.accomodation.areasSummary?.berthsInTotal }}
                                                </div>
                                                <div>Price indication</div>
                                                <div>
                                                    &euro;
                                                    {{ parseInt(item.price).toLocaleString('nl-NL') }}
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-outline-primary w-100">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <h1>No result found</h1>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Filter from '@/components/filter.vue';
import { useFilter } from '@/store/filter';
import { ref } from 'vue';
import { useFetch } from '@/utils/api';
import { IYacht } from '@/@types/yacht';

const filter = useFilter();

let yachtList = ref<IYacht[]>([]);
let isLoading = ref(true);
let isLoadingFilter = ref(false);

async function init() {
    let res = await useFetch('/yacht-search/');
    if (res !== null) {
        yachtList.value = res;
        isLoading.value = false;
        filter.filteredItem = res.length;
    }
}

filter.$subscribe(async ({}, state) => {
    isLoadingFilter.value = true;

    try {
        let res = await useFetch('/yacht-search/', state.queryParams);
        yachtList.value = res;
        filter.filteredItem = res.length;
    } finally {
        isLoadingFilter.value = false;
    }
});

//! created
init();
</script>

<style scoped lang="scss"></style>
