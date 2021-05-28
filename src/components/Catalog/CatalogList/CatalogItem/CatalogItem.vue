<template>
    <div class="catalog-item">
        <div class="catalog-item--img-container">
            <img src="" alt=""
                 class="catalog-item--img"
            >
        </div>
        <h4 class="catalog-item--title">{{ product.name }}</h4>
        <div class="catalog-item--sku">{{ product.sku }} шт.</div>
        <button class="catalog-item--add">
            <span class="catalog-item--price-stroke" v-if="product.price.stroke">{{ product.price.stroke }}</span>
            <span class="catalog-item--price-actual">{{ product.price.actual }}</span>
            <img src="@/assets/img/icons/plus.svg" alt="Plus" class="catalog-item--add-icon">
        </button>
    </div>
</template>

<script>
export default {
    props: [
        'product'
    ],
    name: "CatalogItem"
}
</script>

<style lang="scss">
@import "CatalogItem";
</style>
