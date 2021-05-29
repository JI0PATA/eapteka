<template>
    <router-link :to="link" class="catalog-header--more">
        <slot/>
        <span class="catalog-header--more-btn">
            <img src="@/assets/img/icons/chevron-right.svg" alt="To slide">
        </span>
    </router-link>
</template>

<script>
export default {
    props: [
        'link'
    ],
    name: "CatalogMore"
}
</script>

<style lang="scss">
@import "CatalogMore";
</style>
