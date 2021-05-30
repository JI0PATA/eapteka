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
    },
    getNotify({ commit }) {
      importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
      importScripts(
          "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
      );
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
      importScripts(
          "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
      );

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
      firebase.initializeApp({
        messagingSenderId: "1073231139868",
        apiKey: "AIzaSyDlqdLsjc1uBuQT4pRTl36en4IjvAgU9zA",
        projectId: "eapteka-hack-2021",
        appId: "1:1073231139868:web:93f77654e44a9832f63bd9"
      });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
      const messaging = firebase.messaging();

      messaging.setBackgroundMessageHandler(function(payload) {
        console.log(
            "[firebase-messaging-sw.js] Received background message ",
            payload,
        );
        // Customize notification here
        const notificationTitle = "Background Message Title";
        const notificationOptions = {
          body: "Background Message body.",
          icon: "/itwonders-web-logo.png",
        };

        return self.registration.showNotification(
            notificationTitle,
            notificationOptions,
        );
      });

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
