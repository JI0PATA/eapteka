import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./cart";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      recommendations: [],
      discounts: []
    },
    isOpenCatalogCard: null
  },
  mutations: {
    setRecommendationsProducts(state, products) {
      state.products.recommendations = products
    },
    setDiscountsProducts(state, products) {
      state.products.discounts = products
    },
    setCatalogCard(state, product) {
      state.isOpenCatalogCard = product
    }
  },
  actions: {
    addRecommendationsProducts({ commit }, products) {
      commit('setRecommendationsProducts', products)
    },
    addDiscountsProducts({ commit }, products) {
      commit('setDiscountsProducts', products)
    },
    openCatalogCard({ commit }, product) {
      commit('setCatalogCard', product)
    },
    closeCatalogCard({ commit }) {
      commit('setCatalogCard', null)
    }
  },
  getters: {
    recommendationsProducts: (s) => s.products.recommendations,
    discountsProducts: (s) => s.products.discounts,
    isOpenCatalogCard: (s) => s.isOpenCatalogCard
  },
  modules: {
    cart
  }
})
