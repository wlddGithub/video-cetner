<script setup lang="ts">
import router from '@/router';
import { ref, watch } from 'vue';

const tabbarItem = [
    {
        icon: 'home-o',
        title: '主页',
        to: '/home',
    },
    {
        icon: 'list-switch',
        title: '分类',
        to: '/category',
    }
]

const active = ref(0);

watch(active, (val) => {
    router.push(tabbarItem[val].to);
})

</script>

<template>
    <!-- <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="tabbar in tabbarItem" :icon="tabbar.icon">{{ tabbar.title }}</van-tabbar-item>
    </van-tabbar>
</template>

<style scoped></style>