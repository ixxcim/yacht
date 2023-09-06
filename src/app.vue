<template>
    <div class="container">
        <div class="py-5">
            <div class="row gx-5">
                <div class="col-md-6 col-lg-3">
                    <Filter />
                </div>
                <div class="col-md-6 col-lg-9">
                    <div class="row gy-4">
                        <div v-for="item in yachtList" :key="item.id" class="col-md-4">
                            <div class="card">
                                <div class="position-relative un-h-56">
                                    <img
                                        :src="item.primaryPhoto.photo.formats.small.url"
                                        :alt="item.Brand.brand.name"
                                        class="position-absolute inset-0 w-full h-100 card-img-top"
                                    />
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
                                        <div>{{ item.hullMaterial.hullMaterial.material }}</div>
                                        <div>Hull material</div>
                                        <div>{{ item.hullMaterial.hullMaterial.material }}</div>
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
                                            {{ item.price.toLocaleString('nl-NL') }}
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
import { onMounted, ref } from 'vue';
import Filter from '@/components/filter.vue';
import { useFetch } from '@/utils/api';
import { IYacht } from '@/@types/yacht';

let yachtList = ref<IYacht[]>([]);

async function initData() {
    let res = await useFetch('/yacht-search/');

    if (res !== null) yachtList.value = res;
}

onMounted(() => {
    initData();
});
</script>

<style scoped lang="scss"></style>
