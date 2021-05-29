<template>
    <div class="catalog-item" @click="openCatalogCard(product)">
        <div class="catalog-item--img-container">
            <img :src="url + '/pics/' + product.image_id + '.webp'" :alt="product.name"
                 class="catalog-item--img"
            >
        </div>
        <div class="catalog-item--rate">
            <img src="@/assets/img/icons/star.svg" alt="Star" class="catalog-item--rate-item" v-for="rate in 5">
        </div>
        <h4 class="catalog-item--title">{{ product.name }}</h4>
        <div class="catalog-item--sku">{{ product.sku }} шт.</div>
        <div class="catalog-item--add">
            <span class="catalog-item--price-stroke" v-if="product.price.old">{{ product.price.old }}</span>
            <span class="catalog-item--price-actual">{{ product.price.new }} ₽</span>
            <button class="catalog-item--add-button">
                <img src="@/assets/img/icons/plus-white.svg" alt="Plus" class="catalog-item--add-icon">
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    props: [
        'product'
    ],
    name: "CatalogItem",
    computed: {
        url() {
            return process.env.VUE_APP_URL
        }
    },
    methods: {
        ...mapActions(['openCatalogCard']),
    }
}
</script>

<style lang="scss">
@import "CatalogItem";
</style>
