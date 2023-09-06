<template>
    <div class="card sticky-top un-top-8">
        <div class="card-body">
            <div class="mb-4">
                <h5 class="card-title mb-4">Sort result</h5>
                <select v-model="sortType" class="form-select">
                    <option selected value="length">Length</option>
                    <option value="buildyear">Building Year</option>
                    <option value="price">Price</option>
                    <option value="brand">Brand</option>
                </select>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Filter options</h6>
                <div class="form-check">
                    <input id="forsale" v-model="filterType.forsale" class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="forsale"> Filter available offering </label>
                </div>
                <div class="form-check">
                    <input id="dealership" v-model="filterType.dealership" class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="dealership"> Filter newly build </label>
                </div>
                <div class="form-check">
                    <input id="brokerage" v-model="filterType.brokerage" class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="brokerage"> Filter brokerage offering </label>
                </div>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Choose length</h6>
                <div class="row gx-2">
                    <div class="col-md-6">
                        <select v-model="price.min" class="form-select">
                            <option selected>Min</option>
                            <template v-for="item in lengthRangeList" :key="item.id">
                                <option :value="item.id">{{ item.length }} m</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select v-model="price.max" class="form-select">
                            <option selected>Max</option>
                            <template v-for="item in lengthRangeList" :key="item.id">
                                <option :value="item.id">{{ item.length }} m</option>
                            </template>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Choose price range</h6>
                <div class="row gx-2">
                    <div class="col-md-6">
                        <select v-model="length.min" class="form-select">
                            <option selected>Min</option>
                            <option value="0">0</option>
                            <template v-for="item in priceRangeList" :key="item.id">
                                <option :value="item.id">&euro; {{ item.Price.toLocaleString('nl-NL') }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select v-model="length.max" class="form-select">
                            <option selected>Max</option>
                            <option value="0">0</option>
                            <template v-for="item in priceRangeList" :key="item.id">
                                <option :value="item.id">&euro; {{ item.Price.toLocaleString('nl-NL') }}</option>
                            </template>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Brand</h6>
                <select v-model="brand" class="form-select">
                    <option selected>All</option>
                    <template v-for="item in brandList" :key="item.id">
                        <option :value="item.id">{{ item.attributes.name }}</option>
                    </template>
                </select>
            </div>
            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Building year</h6>
                <select v-model="buildYear" class="form-select">
                    <option selected>All</option>
                    <template v-for="item in buildYearList" :key="item.id">
                        <option :value="item.id">{{ item.buildingyear }}</option>
                    </template>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useFetch } from '@/utils/api';

//! interface
interface IBrand {
    id: number;
    attributes: {
        name: string;
    };
}

interface IBuildYear {
    id: number;
    buildingyear: number;
}

interface IPriceRange {
    id: number;
    Price: number;
}

interface ILengthRange {
    id: number;
    length: number;
}

//! reactive data
let sortType = ref('length');
let filterType = reactive({
    forsale: false,
    dealership: false,
    brokerage: false
});
let price = reactive({
    min: 0,
    max: 0
});
let length = reactive({
    min: 0,
    max: 0
});
let brand = ref('all');
let buildYear = ref('all');

//! with interface
let brandList = ref<IBrand[]>([]);
let buildYearList = ref<IBuildYear[]>([]);
let lengthRangeList = ref<ILengthRange[]>([]);
let priceRangeList = ref<IPriceRange[]>([]);

//! non-reactive

//? default values
let params: any = {
    sort: sortType.value,
    pricemin: price.min,
    pricemax: price.max,
    lengthmin: length.min,
    lengthmax: length.max,
    brands: brand.value,
    buildyear: buildYear.value
};

//! methods
async function getBrands() {
    let res = await useFetch('/brands');

    if (res.data !== null) {
        let sorted = res.data.sort((a: any, b: any) => (a.attributes.name > b.attributes.name ? 1 : -1));
        brandList.value = sorted;
    }
}

async function getBuildYear() {
    let res = await useFetch('/yacht-filters/');
    const { buildYearRange } = res[0][0];
    if (buildYearRange !== null) buildYearList.value = buildYearRange;
}

async function getPriceRange() {
    let res = await useFetch('/yacht-filters/');
    const { priceRange } = res[1][0];
    if (priceRange !== null) {
        //? Find min and max length the array
        const min = priceRange.reduce((prev: any, current: any) => (prev.y < current.y ? current : prev));
        const max = priceRange.reduce((prev: any, current: any) => (prev.y > current.y ? prev : current));
        price.min = min.length;
        price.max = max.length;

        priceRangeList.value = priceRange;
    }
}

async function getLengthRange() {
    let res = await useFetch('/yacht-filters/');
    const { lengthRange } = res[2][0];
    if (lengthRange !== null) {
        //? Find min and max length the array
        const min = lengthRange.reduce((prev: any, current: any) => (prev.y < current.y ? current : prev));
        const max = lengthRange.reduce((prev: any, current: any) => (prev.y > current.y ? prev : current));
        length.min = min.length;
        length.max = max.length;

        lengthRangeList.value = lengthRange;
    }
}

//! lifecycles

onMounted(() => {
    getBrands();
    getBuildYear();
    getPriceRange();
    getLengthRange();
});

watch(
    () => filterType.forsale,
    (newValue) => {
        if (newValue) {
            params.forsale = newValue;
        } else {
            delete params.forsale; //! remove from the object
        }
    }
);

watch(
    () => filterType.dealership,
    (newValue) => {
        if (newValue) {
            params.dealership = newValue;
            params.brokerage = false;
        } else {
        }
    }
);

watch(
    () => filterType.brokerage,
    (newValue) => {
        if (newValue) {
            params.brokerage = newValue;
            params.dealership = false;
        } else {
            params.dealership = true;
        }
    }
);

watch(
    () => filterType.brokerage,
    (newValue) => {
        if (newValue) {
            params.brokerage = newValue;
            params.dealership = false;
        } else {
            params.dealership = true;
        }
    }
);
</script>

<style scoped lang="scss"></style>
