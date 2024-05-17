<script setup lang="ts">
import { reactive } from 'vue';
import { RouterView } from 'vue-router'

const themeVars = reactive({
  tabLineHeight: '20px'
})
</script>

<template>
  <van-config-provider theme="dark" :theme-vars="themeVars" theme-vars-scope="global">
    <RouterView />
  </van-config-provider>
</template>

<style>
html,
body {
  touch-action: manipulation;
}

html,
body,
#app {
  background-color: #fdfdfd;
}


:root:root {
  --van-tabs-line-height: 20px
}
</style>
