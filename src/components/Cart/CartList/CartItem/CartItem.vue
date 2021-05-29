<template>
    <div class="CartItem">
        <div class="CartItem--img-container">
            <img :src="url + '/pics/' + product.image_id + '.webp'" class="CartItem--img" alt="">
        </div>
        <div class="CartItem--info">
            <div class="CartItem--title">{{ product.name }}</div>
            <div class="CartItem--sku">{{ product.sku }} шт.</div>
            <div class="catalog-item--add">
                <button class="catalog-item--add-button catalog-item--remove-button" @click.prevent="removeFromCart(product)">
                    <img src="@/assets/img/icons/minus-black.svg" alt="Plus" class="catalog-item--add-icon">
                </button>
                <span class="CartItem--count">{{ countProductInCart(product) }}</span>
                <button class="catalog-item--add-button" @click.prevent="addToCart(product)">
                    <img src="@/assets/img/icons/plus-black.svg" alt="Plus" class="catalog-item--add-icon">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    props: [
        'product'
    ],
    name: "CartItem",
    computed: {
        ...mapGetters(['cart']),
        url() {
            return process.env.VUE_APP_URL
        }
    },
    methods: {
        ...mapActions(['addToCart', 'removeFromCart']),
        countProductInCart(product) {
            return this.cart.filter(item => item.id === product.id).length
        }
    }
}
</script>

<style lang="scss">
@import "CartItem";
</style>
