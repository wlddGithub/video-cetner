<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue';

const searchValue = ref('');

const onClickLeft = () => {
    router.back();
}

const searchHandle = async () => {
    if (!searchValue.value) {
        return;
    }
    console.log(searchValue);
}

</script>

<template>
    <div style="display: flex;">
        <!-- <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
        <div style="display: flex;flex-direction: column;justify-content: center;" @click="onClickLeft">
            <van-icon name="arrow-left" size="25" />
        </div>
        <div style="width: 100%;">
            <van-search placeholder="搜索" autofocus v-model="searchValue" @search="searchHandle" />
        </div>
        <div style="width: 50px;display: flex;flex-direction: column;justify-content: center;" @click="searchHandle">
            <span>搜索</span>
        </div>
    </div>
    <van-divider />
</template>

<style scoped></style>