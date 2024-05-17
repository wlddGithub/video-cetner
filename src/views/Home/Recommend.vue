<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeTabsCommonContainer from '../../components/HomeTabsCommonContainer.vue'
import HttpClient, { type CommonPageResp } from '@/utils/HttpClient';
import type { Video } from '@/model/video';
import VideoCard from '@/components/VideoCard.vue';
import router from '@/router';

const pageSize = 5;

const curPage = ref(0);
const videoData = ref<Video[]>([]);

const init = async () => {
    const { data } = await HttpClient.get<CommonPageResp<Video>>(`/video/page/${curPage.value}/${pageSize}`);
    console.log(data);
    videoData.value = data.records;
}

onMounted(() => {
    init();
})

</script>

<template>
    <HomeTabsCommonContainer>
        <van-row :gutter="[20, 20]" style="margin-top: 10px;">
            <van-col span="12" v-for="(video, index) in videoData" :key="index">
                <VideoCard :video="video" @click="router.push(`/videoDetail?id=${video.id}`)" />
            </van-col>
        </van-row>
    </HomeTabsCommonContainer>
</template>

<style scoped>
.artplayer-app {
    width: 100%;
    height: 200px;
}
</style>