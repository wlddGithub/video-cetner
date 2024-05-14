<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import Recommend from './Home/Recommend.vue';
import Hot from './Home/Hot.vue';

const tabs = [
    {
        title: '推荐',
        component: Recommend
    },
    {
        title: '热门',
        component: Hot
    }
]

const tabsActive = ref(0);

</script>

<template>
    <div class="homeViewContainer">
        <div class="search" @click="router.push('/search')">
            <span>搜索</span>
        </div>
    </div>
    <van-tabs v-model:active="tabsActive">
        <van-tab :title="tab.title" v-for="(tab, index) in tabs" :key="index">
            <component :is="tab.component" />
        </van-tab>
    </van-tabs>
</template>

<style scoped>
.homeViewContainer {
    padding: 10px;
}

.search {
    width: 200px;
    height: 30px;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    align-items: center;
    display: flex;
    padding-left: 10px;
}

.search>span {
    font-size: 13px;
    color: #e3e3e3
}
</style>