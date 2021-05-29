<template>
    <div class="groupProducts">
        <GroupProductsHeader
                title="Название вещества"
        />
        <FilterLine />
        <CatalogFlex>
            <CatalogItem
                    v-for="(product, index) in products"
                    :key="index"
                    :product="product"
            />
        </CatalogFlex>
    </div>
</template>

<script>
import GroupProductsHeader from "@/components/Header/GroupProductsHeader/GroupProductsHeader"
import FilterLine from "@/components/Filter/Filter"
import CatalogFlex from "@/components/Catalog/CatalogList/CatalogFlex/CatalogFlex"
import CatalogItem from "@/components/Catalog/CatalogList/CatalogItem/CatalogItem"
import { mapGetters } from "vuex"

export default {
    name: "GroupProducts",
    computed: {
        ...mapGetters(['recommendationsProducts', 'discountsProducts']),
        products() {
            if (this.$route.params.id === 1)
                return this.recommendationsProducts
            else
                return this.discountsProducts
        }
    },
    components: {
        GroupProductsHeader,
        CatalogFlex,
        CatalogItem,
        FilterLine
    }
}
</script>

<style lang="scss">
@import "../assets/css/groupProducts";
</style>
