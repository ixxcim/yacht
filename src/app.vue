<template>
    <div class="container">
        <div class="py-5">
            <div class="row gx-5">
                <div class="col-md-6 col-lg-3">
                    <Filter />
                </div>
                <div class="col-md-6 col-lg-9">
                    <pre> {{ filter.getQueryParams }}</pre>
                    <div class="row gy-4">
                        <div v-for="item in initData" :key="item.id" class="col-md-4">
                            <div class="card un-cursor-pointer un-transition-transform un-duration-300 hover:-translate-y-2">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computedAsync } from '@vueuse/core';
import Filter from '@/components/filter.vue';
import { useFetch } from '@/utils/api';
import { useFilter } from '@/store/filter';

const filter = useFilter();

const initData = computedAsync(
    async (onCancel) => {
        const abortController = new AbortController();
        onCancel(() => abortController.abort());

        return await useFetch('/yacht-search/');
    },
    null,
    { lazy: true }
);
</script>

<style scoped lang="scss"></style>
