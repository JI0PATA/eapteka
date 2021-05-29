<template>
    <div class="CartIndicator" v-if="totalPrice !== 0">
        <div class="CartIndicator--total">{{ totalPrice }} ₽</div>
        <div class="CartIndicator--time">15 минут</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "CartIndicator",
    computed: {
        ...mapGetters(['cart']),
        totalPrice() {
            return this.cart.reduce((acc, product) => {
                acc += Number(product.price.new)
                return acc
            }, 0)
        }
    }
}
</script>

<style lang="scss">
@import "CartIndicator";
</style>
