import axios from "axios";

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
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeFromCart({ commit }, product) {
            commit('removeFromCart', product)
        },
        async addPurchase({ commit, getters }) {
            const cart = getters.cart.reduce((products, product) => {
                if (!products.some(item => item.id === product.id))
                    products.push(product)

                return products
            }, [])

            await axios.post(`${process.env.VUE_APP_API}/purchases`, cart.map(product => ({
                product_id: product.id,
                count: getters.cart.filter(item => item.id === product.id).length,
                price: product.price.new
            })))
                .then(res => {
                    commit('clearCart')
                })
        }
    },
    getters: {
        cart: (s) => s.cart
    }
}
