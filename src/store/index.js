import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      recommendations: [],
      discounts: []
    }
  },
  mutations: {
    setRecommendationsProducts(state, products) {
      state.products.recommendations = products
    },
    setDiscountsProducts(state, products) {
      state.products.discounts = products
    }
  },
  actions: {
    addRecommendationsProducts({ commit }, products) {
      commit('setRecommendationsProducts', products)
    },
    addDiscountsProducts({ commit }, products) {
      commit('setDiscountsProducts', products)
    }
  },
  getters: {
    recommendationsProducts: (s) => s.products.recommendations,
    discountsProducts: (s) => s.products.discounts
  },
  modules: {
  }
})
