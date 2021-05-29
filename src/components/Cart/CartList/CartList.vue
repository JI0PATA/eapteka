<template>
    <div class="CartList">
        <CartItem
                v-for="(product, index) in distinctProductsInCart"
                :key="index"
                :product="product"
        ></CartItem>
    </div>
</template>

<script>
import CartItem from "./CartItem/CartItem"
import { mapGetters } from "vuex"

export default {
    name: "CartList",
    components: {
        CartItem
    },
    computed: {
        ...mapGetters(['cart']),
        distinctProductsInCart() {
            return this.cart.reduce((products, product) => {
                if (!products.some(item => item.id === product.id))
                    products.push(product)

                return products
            }, [])
        }
    }
}
</script>

<style lang="scss">
@import "CartList";
</style>
