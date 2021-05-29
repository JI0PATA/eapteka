<template>
  <div class="home">
    <Address />
    <Header />
    <StoriesList />

    <Catalog>
      <CatalogHeader>
        <CatalogTitle>Рекомендации</CatalogTitle>
        <CatalogMore>Больше</CatalogMore>
      </CatalogHeader>
      <CatalogList>
        <CatalogItem
              v-for="(product, index) in recommendationsProducts"
              :key="index"
              :product="product"
        />
      </CatalogList>
    </Catalog>
    <Catalog>
      <CatalogHeader>
        <CatalogTitle>Скидки</CatalogTitle>
        <CatalogMore>Больше</CatalogMore>
      </CatalogHeader>
      <CatalogList>
        <CatalogItem
                v-for="(product, index) in discountsProducts"
                :key="index"
                :product="product"
        />
      </CatalogList>
    </Catalog>
  </div>
</template>

<script>
import axios from "axios"
import StoriesList from "@/components/StoriesList/StoriesList"
import Header from "@/components/Header/Header"
import Preloader from "@/components/Preloader/Preloader"
import Catalog from "@/components/Catalog/Catalog"
import CatalogHeader from "@/components/Catalog/CatalogHeader/CatalogHeader"
import CatalogTitle from "@/components/Catalog/CatalogTitle/CatalogTitle"
import CatalogMore from "@/components/Catalog/CatalogMore/CatalogMore"
import CatalogList from "@/components/Catalog/CatalogList/CatalogList"
import CatalogItem from "@/components/Catalog/CatalogList/CatalogItem/CatalogItem"
import Address from "@/components/Address/Address"
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'Home',
  components: {
    Address,
    Header,
    StoriesList,
    Catalog,
    CatalogHeader,
    CatalogTitle,
    CatalogMore,
    CatalogList,
    CatalogItem
  },
  computed: {
    ...mapGetters(['recommendationsProducts', 'discountsProducts'])
  },
  methods: {
    ...mapActions(['addRecommendationsProducts', 'addDiscountsProducts'])
  },
  created() {
    axios.get(`${process.env.VUE_APP_API}/products`)
      .then(res => {
        const products = res.data
        this.addRecommendationsProducts(products.slice(0, 10))
        this.addDiscountsProducts(products.slice(10, 20))
      })
  }
}
</script>
