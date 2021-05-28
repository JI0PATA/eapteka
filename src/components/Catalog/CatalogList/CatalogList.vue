<template>
    <div class="catalog-list">
        <slot />
        <div class="catalog-item empty"></div>
    </div>
</template>

<script>
export default {
    name: "CatalogList"
}
</script>

<style lang="scss">
@import "CatalogList";
</style>
