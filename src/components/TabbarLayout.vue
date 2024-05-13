<script setup lang="ts">
import router from '@/router';
import { useTabbarStore } from '@/stores/tabbar';
import { ref, watch } from 'vue';

const tabbarStore = useTabbarStore();

const tabbarItem = [
    {
        icon: 'home-o',
        title: '主页',
        to: '/home',
    },
    {
        icon: 'friends-o',
        title: '我的',
        to: '/personal'
    }
]
const noVisPath = ['/search'];

const active = ref(0);

watch(active, (val) => {
    router.push(tabbarItem[val].to);
})

watch(() => router.currentRoute.value.fullPath, (path: string) => {
    if (noVisPath.indexOf(path) !== -1) {
        tabbarStore.visable = false;
    } else {
        tabbarStore.visable = true;
    }
})

</script>

<template>
    <!-- <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <van-tabbar v-model="active" v-show="tabbarStore.visable">
        <van-tabbar-item v-for="(tabbar, index) in tabbarItem" :icon="tabbar.icon" :key="index">{{ tabbar.title
            }}</van-tabbar-item>
    </van-tabbar>
</template>

<style scoped></style>