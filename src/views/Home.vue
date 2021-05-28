<template>
  <div class="home">
    <fade-transition>
      <Preloader v-if="preloader" />
    </fade-transition>
    <Header />
    <StoriesList />

    <Catalog>
      <CatalogHeader>
        <CatalogTitle>Скидки</CatalogTitle>
        <CatalogMore>Больше</CatalogMore>
      </CatalogHeader>
      <CatalogList>
        <CatalogItem
              v-for="(product, index) in products"
              :key="index"
              :product="product"
        />
      </CatalogList>
    </Catalog>
  </div>
</template>

<script>
import StoriesList from "@/components/StoriesList/StoriesList"
import Header from "@/components/Header/Header"
import Preloader from "@/components/Preloader/Preloader"
import Catalog from "@/components/Catalog/Catalog"
import CatalogHeader from "@/components/Catalog/CatalogHeader/CatalogHeader"
import CatalogTitle from "@/components/Catalog/CatalogTitle/CatalogTitle"
import CatalogMore from "@/components/Catalog/CatalogMore/CatalogMore"
import CatalogList from "@/components/Catalog/CatalogList/CatalogList"
import CatalogItem from "@/components/Catalog/CatalogList/CatalogItem/CatalogItem";

export default {
  name: 'Home',
  data: () => ({
    preloader: true, // TODO: на проде активировать
    products: [
      {
        name: "Лекарство 1",
        sku: 44,
        price: {
          actual: 977,
          stroke: 1200
        }
      },
      {
        name: "Лекарство 1",
        sku: 44,
        price: {
          actual: 977,
          stroke: 1200
        }
      },
      {
        name: "Лекарство 1",
        sku: 44,
        price: {
          actual: 977,
          stroke: 1200
        }
      },
      {
        name: "Лекарство 1",
        sku: 44,
        price: {
          actual: 977,
          stroke: 1200
        }
      },
      {
        name: "Лекарство 1",
        sku: 44,
        price: {
          actual: 977,
          stroke: 1200
        }
      }
    ]
  }),
  components: {
    Header,
    StoriesList,
    Preloader,
    Catalog,
    CatalogHeader,
    CatalogTitle,
    CatalogMore,
    CatalogList,
    CatalogItem
  },
  created() {
    setTimeout(() => {
      this.preloader = false
    }, 1500)
  }
}
</script>
