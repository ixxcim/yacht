<template>
    <div class="card">
        <select class="form-select" @change="getSortedValue">
            <option selected value="length">Length</option>
            <option value="buildyear">Building Year</option>
            <option value="price">Price</option>
            <option value="brand">Brand</option>
        </select>
    </div>
</template>
<script setup lang="ts">
import { useFetch } from '../utils/api';

async function getSortedValue(event: any) {
    const { target } = event;

    let params: Object = { sort: target.value || 'length' };

    let items = await useFetch(params);
    console.log(items);
}
</script>

<style scoped lang="scss"></style>
