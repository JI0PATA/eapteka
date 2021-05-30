<template>
    <div class="catalog-item">
        <div class="catalog-item--img-container" @click.prevent="openCatalogCard(product)">
            <img :src="url + '/pics/' + product.image_id + '.webp'" :alt="product.name"
                 class="catalog-item--img"
            >
            <div class="catalog-item--count" v-if="issetInCart(product)">{{ issetInCart(product) }}</div>
        </div>
        <div class="catalog-item--rate">
            <img src="@/assets/img/icons/star.svg" alt="Star" class="catalog-item--rate-item" v-for="rate in 5">
        </div>
        <h4 class="catalog-item--title" @click.prevent="openCatalogCard(product)">{{ product.name }}</h4>
        <div class="catalog-item--sku">{{ product.sku }} шт.</div>
        <div class="catalog-item--add" :class="{'catalog-item--add-inCart': issetInCart(product)}">
            <button class="catalog-item--add-button catalog-item--remove-button" @click.prevent="removeFromCart(product)" v-show="issetInCart(product)">
                <img src="@/assets/img/icons/minus-purple.svg" alt="Plus" class="catalog-item--add-icon">
            </button>
            <span class="catalog-item--price-stroke" v-if="product.price.old && !issetInCart(product)">{{ product.price.old }}</span>
            <span class="catalog-item--price-actual">{{ product.price.new }} ₽</span>
            <button class="catalog-item--add-button" @click.prevent="addToCart(product)">
                <img src="@/assets/img/icons/plus-purple.svg" v-if="issetInCart(product)" alt="Plus" class="catalog-item--add-icon">
                <img src="@/assets/img/icons/plus-white.svg" v-else  alt="Plus" class="catalog-item--add-icon">
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    props: [
        'product'
    ],
    name: "CatalogItem",
    computed: {
        ...mapGetters(['cart']),
        url() {
            return process.env.VUE_APP_URL
        }
    },
    methods: {
        ...mapActions(['openCatalogCard', 'addToCart', 'removeFromCart']),
        issetInCart(product) {
            return this.cart.filter(item => {
                return product.id === item.id
            }).length
        }
    }
}
</script>

<style lang="scss">
@import "CatalogItem";
</style>
