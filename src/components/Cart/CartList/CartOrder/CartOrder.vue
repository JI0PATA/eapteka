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
            <span>1240 ₽</span>
        </div>
        <div class="CartOrder--subtitle">
            <span>Доставка за 15 минут</span>
            <span>0 ₽</span>
        </div>
        <div class="CartOrder--subtitle CartOrder--subtitle-black">
            <span>К оплате</span>
            <span>1240 ₽</span>
        </div>
        <button class="CartOrder--btn">Заказать</button>
    </div>
</template>

<script>
export default {
    name: "CartOrder"
}
</script>

<style lang="scss">
@import "CartOrder";
</style>
