<template>
    <div class="cart">
        <GroupProductsHeader
                title="Корзина"
        />
        <CartList />
    </div>
</template>

<script>
import GroupProductsHeader from "@/components/Header/GroupProductsHeader/GroupProductsHeader"
import CartList from "@/components/Cart/CartList/CartList";

export default {
    name: "Cart",
    components: {
        GroupProductsHeader,
        CartList
    }
}
</script>

<style lang="scss">
@import "../assets/css/cart";
</style>
