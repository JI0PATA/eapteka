<template>
    <div>
        <div class="groupProducts-header">
            <BackPage />
            <div class="groupProducts-title-container">
                <h2 class="groupProducts-title">Личный кабинет</h2>
            </div>
            <Search :style="{opacity: 0}" />
        </div>
        <div class="Profile">
            <div class="Profile--info">
                <div class="Profile--info-name">Павел</div>
                <div class="Profile--info-phone">+7 987 234 95 31</div>
            </div>
            <div class="Profile--buttons">
                <button class="Profile--buttons-item active">Товары с напоминанием</button>
                <button class="Profile--buttons-item">Все товары</button>
            </div>
            <div class="Profile--notify">
                <div class="Profile--notify-title">Отправлять напоминания</div>
                <div class="toggle"
                     @click="activeToggle = !activeToggle"
                     :class="{'active': activeToggle}">
                    <div class="toggle-circle"></div>
                </div>
            </div>
        </div>
        <div class="Profile--notifies">
            <div class="CartDone--card-timer" v-for="notify in notifiers">
                <div class="CartDone--card-img-container">
                    <img :src="url + '/pics/' + notify.product.image_id + '.webp'" alt="" class="CartDone--card-img">
                </div>
                <div class="CartDone--card-info">
                    <div class="CartDone--card-info-title">{{ notify.product.name }}</div>
                    <div class="CartDone--card-info-inCount">10 шт.</div>
                    <ul class="CartDone--card-info--days">
                        <li class="CartDone--card-info--days-item"
                            :class="{'active': day.checked}"
                            @click="day.checked = !day.checked"
                            v-for="day in notify.days">{{ day.name }}</li>
                    </ul>
                    <div class="CartDone--card-info--timers">
                        <div class="CartDone--card-info--timers-item" v-for="(timer, index) in notify.schedule">
                            <input type="text"
                                   v-model="notify.schedule[index]"
                                   v-mask="'##:##'"
                                   class="CartDone--card-info--timers-item-time"
                            >
                            <button class="CartDone--card-info--timers-item-close" @click="removeTimer(notify, timer)">&#x2715</button>
                        </div>
                        <div class="CartDone--card-info--timers-line"></div>
                        <button class="CartDone--card-info--timers-add" @click="addNewTimer(notify)">Добавить таймер</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import BackPage from "@/components/BackPage"
import Search from "@/components/Search/Search"
import { mapGetters } from "vuex"

export default {
    name: "Profile",
    components: {
        BackPage,
        Search
    },
    computed: {
        ...mapGetters(['cart']),
        url() {
            return process.env.VUE_APP_URL
        },
    },
    data: () => ({
        activeToggle: false,
        notifiers: []
    }),
    methods: {
        addNewTimer(notify) {
            notify.schedule.push("")
        },
        removeTimer(notify, timer) {
            notify.schedule.splice(notify.schedule.indexOf(timer), 1)
        },
        async getInfoProduct(id) {
            let product

            await axios.get(`${process.env.VUE_APP_API}/products/${id}`)
                .then(res => {
                    product = res.data
                })

            return product
        }
    },
    async created() {
        await axios.get(`${process.env.VUE_APP_API}/notifiers`)
            .then(async res => {
                const notifiers = []
                await res.data.forEach(async (notify) => {
                    notifiers.push({
                        ...notify,
                        schedule: notify.schedule.map(item => `${item.split(':')[0]}:${item.split(':')[1]}`),
                        product: await this.getInfoProduct(notify.product_id),
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
                    })
                })
                this.notifiers = notifiers
            })
    }
}
</script>

<style lang="scss">
@import "../assets/css/profile";
</style>
