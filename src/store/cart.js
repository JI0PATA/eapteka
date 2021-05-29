export default {
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product)
        },
        removeFromCart(state, product) {
            state.cart.splice(state.cart.findIndex(item => product.id === item.id), 1)
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeFromCart({ commit }, product) {
            commit('removeFromCart', product)
        }
    },
    getters: {
        cart: (s) => s.cart
    }
}
