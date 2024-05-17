<script setup lang="ts">
import type { Video } from '@/model/video';


interface Props {
    video: Video
}

const props = defineProps<Props>();

</script>

<template>
    <div style="border: 1px solid #e1e1e1;padding: 5px;border-radius: 5px;">
        <van-image :src="video.imgUrl"></van-image>
        <van-text-ellipsis style="height: 50px;font-size: 13px;color: #2f2f2f;" rows="2" :content="video.title" />
        <span style="height: 50px;">

        </span>
    </div>
</template>

<style scoped></style>