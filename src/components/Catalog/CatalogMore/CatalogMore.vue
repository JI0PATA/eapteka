<template>
    <button class="catalog-header--more">
        <slot/>
        <span class="catalog-header--more-btn">
            <img src="@/assets/img/icons/chevron-right.svg" alt="To slide">
        </span>
    </button>
</template>

<script>
export default {
    name: "CatalogMore"
}
</script>

<style lang="scss">
@import "CatalogMore";
</style>
