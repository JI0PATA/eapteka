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
            <div class="Profile--notifies">
                <div class="CartDone--card-timer" v-for="product in distinctProductsInCart">
                    <div class="CartDone--card-img-container">
                        <img :src="url + '/pics/' + product.image_id + '.webp'" alt="" class="CartDone--card-img">
                    </div>
                    <div class="CartDone--card-info">
                        <div class="CartDone--card-info-title">Аркетал Ромфарм р-р для инфузий и в/мыш. введ. 50мг/мл 2 мл ампулы</div>
                        <div class="CartDone--card-info-inCount">10 шт.</div>
                        <ul class="CartDone--card-info--days">
                            <li class="CartDone--card-info--days-item"
                                :class="{'active': day.checked}"
                                @click="day.checked = !day.checked"
                                v-for="day in days">{{ day.name }}</li>
                        </ul>
                        <div class="CartDone--card-info--timers">
                            <div class="CartDone--card-info--timers-item" v-for="timer in timers">
                                <input type="text" :value="timer.value" class="CartDone--card-info--timers-item-time">
                                <button class="CartDone--card-info--timers-item-close" @click="removeTimer(timer)">&#x2715</button>
                            </div>
                            <div class="CartDone--card-info--timers-line"></div>
                            <button class="CartDone--card-info--timers-add" @click="addNewTimer">Добавить таймер</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        distinctProductsInCart() {
            return this.cart.reduce((products, product) => {
                if (!products.some(item => item.id === product.id))
                    products.push(product)

                return products
            }, [])
        },
        url() {
            return process.env.VUE_APP_URL
        },
    },
    data: () => ({
        activeToggle: false,
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
        timers: [
            {
                value: "14:00"
            }
        ]
    }),
    methods: {
        addNewTimer() {
            this.timers.push({
                value: "14:00"
            })
        },
        removeTimer(timer) {
            this.timers.splice(this.timers.indexOf(timer), 1)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/css/profile";
</style>
