<template>
    <div class="card sticky-top un-top-8">
        <div class="card-body position-relative">
            <div class="position-absolute top-0 right-0 left-0 w-full">
                <div v-show="isLoading" class="loader-line"></div>
            </div>

            <div class="mb-4">
                <h5 class="card-title mb-4">Sort result ({{ filter.getFilteredItem }})</h5>
                <select v-model="sortType" class="form-select" @change="updateQueryParams">
                    <option selected value="length">Length</option>
                    <option value="buildyear">Building Year</option>
                    <option value="price">Price</option>
                    <option value="brand">Brand</option>
                </select>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Filter options</h6>
                <div class="form-check">
                    <input
                        id="forsale"
                        v-model="filterType.forsale"
                        class="form-check-input"
                        type="checkbox"
                        @change="updateQueryParams" />
                    <label class="form-check-label" for="forsale"> Filter available offering </label>
                </div>
                <div class="form-check">
                    <input
                        id="dealership"
                        v-model="filterType.dealership"
                        class="form-check-input"
                        type="checkbox"
                        @change="updateQueryParams" />
                    <label class="form-check-label" for="dealership"> Filter newly build </label>
                </div>
                <div class="form-check">
                    <input
                        id="brokerage"
                        v-model="filterType.brokerage"
                        class="form-check-input"
                        type="checkbox"
                        @change="updateQueryParams" />
                    <label class="form-check-label" for="brokerage"> Filter brokerage offering </label>
                </div>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Choose length</h6>
                <div class="row gx-2">
                    <div class="col-md-6">
                        <select v-model="length.min" class="form-select" @change="updateQueryParams">
                            <option :value="defaultValue.length.min">Min</option>
                            <template v-for="item in lengthRangeList" :key="item.id">
                                <option :value="item.length">{{ item.length }} m</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select v-model="length.max" class="form-select" @change="updateQueryParams">
                            <option :value="defaultValue.length.max">Max</option>
                            <template v-for="item in lengthRangeList" :key="item.id">
                                <option :value="item.length">{{ item.length }} m</option>
                            </template>
                        </select>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Choose price range</h6>
                <div class="row gx-2">
                    <div class="col-md-6">
                        <select v-model="price.min" class="form-select" @change="updateQueryParams">
                            <option selected :value="defaultValue.price.min">Min</option>
                            <template v-for="item in priceRangeList" :key="item.id">
                                <option :value="item.Price">&euro; {{ item.Price.toLocaleString('nl-NL') }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select v-model="price.max" class="form-select" @change="updateQueryParams">
                            <option selected :value="defaultValue.price.max">Max</option>
                            <template v-for="item in priceRangeList" :key="item.id">
                                <option :value="item.Price">&euro; {{ item.Price.toLocaleString('nl-NL') }}</option>
                            </template>
                        </select>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Brand</h6>
                <select v-model="brand" class="form-select" @change="updateQueryParams">
                    <option selected :value="brand">All</option>
                    <template v-for="item in brandList" :key="item.id">
                        <option :value="item.id">{{ item.attributes.name }}</option>
                    </template>
                </select>
            </div>

            <div class="mb-4">
                <h6 class="card-subtitle mb-2 text-body-secondary">Building year</h6>
                <select v-model="buildYear" class="form-select" @change="updateQueryParams">
                    <option selected :value="buildYear">All</option>
                    <template v-for="item in buildYearList" :key="item.id">
                        <option :value="item.buildingyear">{{ item.buildingyear }}</option>
                    </template>
                </select>
            </div>

            <button class="btn btn-danger w-100" @click="reset">Reset filter</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useFetch } from '@/utils/api';
import { useFilter } from '@/store/filter';

defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
});

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

//! non-reactive
let defaultValue = {
    price: {
        min: 0,
        max: 0
    },
    length: {
        min: 0,
        max: 0
    }
};

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

//? default params
let params: Record<string, any> = reactive({
    sort: sortType,
    pricemin: price.min,
    pricemax: price.max,
    lengthmin: length.min,
    lengthmax: length.max,
    brands: brand,
    buildyear: buildYear
});

const filter = useFilter();

function updateQueryParams() {
    filter.setQueryParams(params);
    document.body.scrollTop = 0; //? For Safari
    document.documentElement.scrollTop = 0; //? For Chrome, Firefox, IE and Opera
}

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
        const min = priceRange.reduce((prev: any, current: any) => (prev < current ? current : prev));
        const max = priceRange.reduce((prev: any, current: any) => (prev > current ? prev : current));
        defaultValue.price.min = min.Price;
        defaultValue.price.max = max.Price;
        price.min = min.Price;
        price.max = max.Price;

        priceRangeList.value = priceRange;
    }
}

async function getLengthRange() {
    let res = await useFetch('/yacht-filters/');
    const { lengthRange } = res[2][0];
    if (lengthRange !== null) {
        //? Find min and max length the array
        const min = lengthRange.reduce((prev: any, current: any) => (prev < current ? current : prev));
        const max = lengthRange.reduce((prev: any, current: any) => (prev > current ? prev : current));
        defaultValue.length.min = min.length;
        defaultValue.length.max = max.length;
        length.min = min.length;
        length.max = max.length;

        lengthRangeList.value = lengthRange;
    }
}

function reset() {
    //* reset pinia state
    filter.setQueryParams([]);

    //* reset filter fields
    sortType.value = 'length';
    filterType.forsale = false;
    filterType.dealership = false;
    filterType.brokerage = false;
    price.min = defaultValue.price.min;
    price.max = defaultValue.price.max;
    length.min = defaultValue.length.min;
    length.max = defaultValue.length.max;
    brand.value = 'all';
    buildYear.value = 'all';

    //* scroll back to top
    document.body.scrollTop = 0; //? For Safari
    document.documentElement.scrollTop = 0; //? For Chrome, Firefox, IE and Opera
}

//! watches
watch(
    () => filterType.forsale,
    (value: any) => {
        if (value) {
            params.forsale = value;
        } else {
            delete params.forsale;
        }
    }
);

watch(
    () => filterType.dealership,
    (value: any) => {
        if (value) {
            params.dealership = value;
            params.brokerage = false; // set the params
            filterType.brokerage = false; // set the checkbox
        }
    }
);

watch(
    () => filterType.brokerage,
    (value: any) => {
        if (value) {
            params.brokerage = value;
            params.dealership = false; // set the params
            filterType.dealership = false; // set the checkbox
        }
    }
);

watch([() => filterType.dealership, () => filterType.brokerage], (value: any) => {
    let validate = value.every((v: any) => v === false); // return if every value is false
    if (validate) {
        // remove object property
        delete params.brokerage;
        delete params.dealership;
    }
});

watch(
    () => price.min,
    (value: any) => (params.pricemin = value)
);

watch(
    () => price.max,
    (value) => (params.pricemax = value)
);

watch(
    () => length.min,
    (value: any) => (params.lengthmin = value)
);

watch(
    () => length.max,
    (value) => (params.lengthmax = value)
);

//! life cycles
//? created
getBrands();
getBuildYear();
getPriceRange();
getLengthRange();
</script>

<style scoped lang="scss"></style>
