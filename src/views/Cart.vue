<template>
    <div class="cart">
        <GroupProductsHeader
                title="Корзина"
        />
        <CartList />
        <Catalog>
            <CatalogHeader>
                <CatalogTitle>Ничего не забыли</CatalogTitle>
            </CatalogHeader>
            <CatalogList>
                <CatalogItem
                        v-for="(product, index) in recommendationsProducts"
                        :key="index"
                        :product="product"
                />
            </CatalogList>
        </Catalog>
        <CartOrder />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import GroupProductsHeader from "@/components/Header/GroupProductsHeader/GroupProductsHeader"
import CartList from "@/components/Cart/CartList/CartList"
import Catalog from "@/components/Catalog/Catalog"
import CatalogHeader from "@/components/Catalog/CatalogHeader/CatalogHeader"
import CatalogTitle from "@/components/Catalog/CatalogTitle/CatalogTitle"
import CatalogMore from "@/components/Catalog/CatalogMore/CatalogMore"
import CatalogList from "@/components/Catalog/CatalogList/CatalogList"
import CatalogItem from "@/components/Catalog/CatalogList/CatalogItem/CatalogItem"
import CartOrder from "@/components/Cart/CartList/CartOrder/CartOrder";

export default {
    name: "Cart",
    components: {
        GroupProductsHeader,
        CartList,
        Catalog,
        CatalogHeader,
        CatalogTitle,
        CatalogMore,
        CatalogList,
        CatalogItem,
        CartOrder
    },
    computed: {
        ...mapGetters(['recommendationsProducts'])
    }
}
</script>

<style lang="scss">
@import "../assets/css/cart";
</style>
