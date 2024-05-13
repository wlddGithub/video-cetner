<script setup lang="ts">
import router from '@/router'

const onClickLeft = () => {
    router.back();
}

</script>

<template>
    <div>
        <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>

</template>

<style scoped></style>