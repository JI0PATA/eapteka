<template>
    <div class="stories-item">
        <img
            class="stories-item--img"
            :src="story.mainImage"
            :alt="story.title">
    </div>
</template>

<script>
export default {
    props: [
        'story'
    ],
    name: "StoriesItem"
}
</script>

<style lang="scss">
@import "./StoriesItem";
</style>
