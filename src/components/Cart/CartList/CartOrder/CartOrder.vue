<template>
    <div class="CartOrder">
        <div class="CartOrder--property">
            <div class="CartOrder--title">Ямашева проспект, 19</div>
            <div class="CartOrder--arrow">
                <img src="@/assets/img/icons/chevron-down.svg" alt="Chrevron">
            </div>
        </div>
        <div class="CartOrder--property">
            <div class="CartOrder--title">Оплата SberPay</div>
            <div class="CartOrder--arrow">
                <img src="@/assets/img/icons/chevron-down.svg" alt="Chrevron">
            </div>
        </div>
        <div class="CartOrder--line"></div>
        <div class="CartOrder--subtitle">
            <span>Товары с учётом скидки</span>
            <span>{{ totalPrice }} ₽</span>
        </div>
        <div class="CartOrder--subtitle">
            <span>Доставка за 15 минут</span>
            <span>0 ₽</span>
        </div>
        <div class="CartOrder--subtitle CartOrder--subtitle-black">
            <span>К оплате</span>
            <span>{{ totalPrice }} ₽</span>
        </div>
        <button @click="buy" class="CartOrder--btn">Заказать</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "CartOrder",
    computed: {
        ...mapGetters(['cart']),
        totalPrice() {
            return this.cart.reduce((acc, product) => {
                acc += Number(product.price.new)
                return acc
            }, 0)
        }
    },
    methods: {
        ...mapActions(['addPurchase']),
        async buy() {
            await this.addPurchase()
            this.$router.push({ name: "CartDone" })
        }
    }
}
</script>

<style lang="scss">
@import "CartOrder";
</style>
