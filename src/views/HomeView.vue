<script setup lang="ts">
import router from '@/router';

</script>

<template>
    <div class="homeViewContainer" @click="router.push('/search')">
        <van-search placeholder="搜索" />
    </div>
</template>

<style scoped></style>