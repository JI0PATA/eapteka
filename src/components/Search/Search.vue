<template>
    <div class="search">
        <img src="@/assets/img/icons/search-black.svg" alt="Search">
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style lang="scss" scoped>
.search {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: $buttonBg;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
