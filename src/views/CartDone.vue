<template>
    <div class="CartDone">
        <div class="CartDone--header">
            <h2 class="CartDone--header-title">Спасибо за заказ</h2>
            <h3 class="CartDone--header-subtitle">Курьер будет через 15 минут</h3>
        </div>
        <div class="CartDone--card">
            <router-link :to="{ name: 'Home' }" class="catalogCard--close">
                <span>&#x2715</span>
            </router-link>
            <div class="CartDone--card-title">
                В вашем списке покупок есть препараты с регулярным приёмом
            </div>
            <div class="CartDone--card-subtitle">Поставить напоминания по приёму?</div>
            <div class="CartDone--card-timer" v-if="product">
                <div class="CartDone--card-img-container">
                    <img :src="url + '/pics/' + product.image_id + '.webp'" alt="" class="CartDone--card-img">
                </div>
                <div class="CartDone--card-info">
                    <div class="CartDone--card-info-title">{{ product.name }}</div>
                    <div class="CartDone--card-info-inCount">{{ product.count }} шт.</div>
                    <ul class="CartDone--card-info--days">
                        <li class="CartDone--card-info--days-item"
                            :class="{'active': day.checked}"
                            @click="day.checked = !day.checked"
                            v-for="day in days">{{ day.name }}</li>
                    </ul>
                    <div class="CartDone--card-info--timers">
                        <div class="CartDone--card-info--timers-item" :key="index" v-for="(timer, index) in timers">
                            <input type="text" v-model="timer.value" class="CartDone--card-info--timers-item-time">
                            <button class="CartDone--card-info--timers-item-close" @click="removeTimer(timer)">&#x2715</button>
                        </div>
                        <div class="CartDone--card-info--timers-line"></div>
                        <button class="CartDone--card-info--timers-add" @click="addNewTimer">Добавить таймер</button>
                    </div>
                </div>
            </div>
            <div class="CartDone--card-buttons">
                <button @click="setNotify" class="CartDone--card-setTimer">Поставить таймер</button>
                <router-link :to="{ name: 'Home' }" class="CartDone--card-cancel">Нет, спасибо</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { mapGetters } from "vuex"

export default {
    name: "CartDone",
    data: () => ({
        days: [
            {
                name: "Пн",
                checked: true
            },
            {
                name: "Вт",
                checked: true
            },
            {
                name: "Ср",
                checked: true
            },
            {
                name: "Чт",
                checked: true
            },
            {
                name: "Пт",
                checked: true
            },
            {
                name: "Сб",
                checked: false
            },
            {
                name: "Вс",
                checked: false
            },
        ],
        timers: [],
        products: []
    }),
    computed: {
        ...mapGetters(['cart']),
        url() {
            return process.env.VUE_APP_URL
        },
        product() {
            return this.products[0]
        }
    },
    methods: {
        addNewTimer() {
            this.timers.push({
                value: "14:00"
            })
        },
        removeTimer(timer) {
            this.timers.splice(this.timers.indexOf(timer), 1)
        },
        async setNotify() {
            console.log({
                product_id: this.product.id,
                schedule: this.timers.map(timer => `${timer.value}:Europe/Moscow`)
            })
            await axios.post(`${process.env.VUE_APP_API}/notifiers`, {
                product_id: this.product.id,
                schedule: this.timers.map(timer => `${timer.value}:Europe/Moscow`)
            })
                .then(res => {
                    console.log(res.data);
                })
        }
    },
    async created() {
        await axios.get(`${process.env.VUE_APP_API}/purchases`)
        .then(async res => {
            await axios.get(`${process.env.VUE_APP_API}/purchase_products?purchase_id=${res.data[0].id}`)
                .then(res => {
                    this.products = res.data
                    this.$router.push({ name: "Profile" })
                })
        })
    }
}
</script>

<style lang="scss">
@import "../assets/css/cart";
</style>
