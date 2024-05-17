<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '../router/index'
import HttpClient from '@/utils/HttpClient';
import Artplayer from 'artplayer';
import type { Video } from '@/model/video';

const videoDetail = ref<Video>({
    id: 0,
    title: '',
    sourceId: 0,
    imgUrl: '',
    videoUrl: '',
    createDate: '',
    updateDate: ''
});

const loadVideo = () => {
    console.log(videoDetail, 'detail');

    const art = new Artplayer({
        container: '#artVideo',
        url: videoDetail.value.videoUrl,
        poster: videoDetail.value?.imgUrl,
        volume: 0.5,
        isLive: false,
        muted: false,
        autoplay: false,
        // pip: true,
        // autoSize: true,
        // autoMini: true,
        // screenshot: true,
        // setting: true,
        // loop: true,
        // flip: true,
        // playbackRate: true,
        // aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: true,
        // subtitleOffset: true,
        // miniProgressBar: true,
        // mutex: true,
        // backdrop: true,
        // playsInline: true,
        // autoPlayback: true,
        airplay: true,
    })
}

const fetchVideoDetail = async (videoDetailId: string) => {
    const { data } = await HttpClient.get<Video>(`/video/getById?id=${videoDetailId}`);
    console.log(data, 'data');

    videoDetail.value = data;
}

const getVideoDetailIdByRouter = () => {
    return router.currentRoute.value.query.id as string;
}

const init = async () => {
    const id = getVideoDetailIdByRouter();
    console.log(id);
    await fetchVideoDetail(id);
    loadVideo();
}

onMounted(() => {
    init();
})

</script>

<template>
    <div id="artVideo" style="width: 100%;height: 400px;" />
    <div class="videoDetailContainer">
        <div class="videoDetailContent">
            <van-text-ellipsis rows="3" :content="videoDetail.title" expand-text="展开" collapse-text="收起" />
        </div>
    </div>
</template>

<style scoped>
.videoDetailContainer {
    width: 100%;
}

.videoDetailContent {
    width: 94%;
    margin-left: 3%;
}
</style>