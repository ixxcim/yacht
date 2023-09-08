<template>
    <div class="container">
        <div class="py-5">
            <router-view v-slot="{ Component }">
                <Suspense>
                    <component :is="Component" />

                    <template #fallback> Loading... </template>
                </Suspense>
            </router-view>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss"></style>
