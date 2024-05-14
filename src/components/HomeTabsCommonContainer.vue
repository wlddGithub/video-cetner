<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: auto;
    width: 100%;
}

.content {
    width: 96%;
    margin-left: 2%;
}
</style>