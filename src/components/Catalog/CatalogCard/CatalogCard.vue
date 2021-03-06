<template>
    <div class="catalogCard"
         :key="product.id"
         v-touch:swipe.bottom="closeCatalogCard"
    >
        <!--        <div class="catalogCard&#45;&#45;overlay"></div>-->
        <div class="catalogCard--close" @click="closeCatalogCard">
            <span>&#x2715</span>
        </div>
        <div class="catalogCard--buy">
            <button class="catalog-item--add-button catalog-item--remove-button"
                    :class="{'catalogCard--buy-inCart': issetInCart(product)}"
                    v-show="issetInCart(product)"
                    @click.prevent="removeFromCart(product)">
                <img src="@/assets/img/icons/minus-purple.svg" alt="Plus" class="catalog-item--add-icon">
            </button>
            <span class="catalogCard--buy-stroke" v-if="product.price.old && !issetInCart(product)">{{ product.price.old }}</span>
            <span class="catalogCard--buy-price"><span v-if="issetInCart(product)">{{ issetInCart(product) }} x </span>{{ product.price.new }} ₽</span>
            <button class="catalog-item--add-button" :class="{'catalogCard--buy-inCart': issetInCart(product)}" @click.prevent="addToCart(product)">
                <img src="@/assets/img/icons/plus-white.svg" v-if="!issetInCart(product)" alt="Plus" class="catalogCard--buy-add">
                <img src="@/assets/img/icons/plus-purple.svg" v-else  alt="Plus" class="catalogCard--buy-add">
            </button>
        </div>
        <div class="catalogCard--img-container">
            <img :src="url + '/pics/' + product.image_id + '.webp'" alt="" class="catalogCard--img">
            <div class="catalogCard--pickup" v-if="product.id % 2 === 0">
                <img src="@/assets/img/icons/truck.svg" alt="Pickup">
                <span>Только самовывоз</span>
            </div>
        </div>
        <div class="catalogCard--info">
            <div class="catalogCard--title">{{ product.name }}</div>
            <div class="catalogCard--stars">
                <img src="@/assets/img/icons/star.svg" v-for="star in 5" alt="Star">
            </div>
            <div class="catalogCard--sku">{{ product.sku }} шт.</div>
            <div class="catalogCard--line"></div>
            <div class="catalogCard--property">
                <div class="catalogCard--property-title">Производитель</div>
                <div class="catalogCard--property-description">Северная Звезда, Россия</div>
            </div>
            <div class="catalogCard--property">
                <div class="catalogCard--property-title">Срок годности</div>
                <div class="catalogCard--property-description">1 год</div>
            </div>
            <div class="catalogCard--property">
                <div class="catalogCard--property-title">Условия хранения</div>
                <div class="catalogCard--property-description catalogCard--property-description-blue">Хранить в
                    холодильнике при -5
                </div>
            </div>
            <div class="catalogCard--line"></div>
        </div>
        <Catalog>
            <CatalogHeader>
                <CatalogTitle>Аналоги</CatalogTitle>
                <CatalogMore :link="{name: 'GroupProducts', params: { id: 3 }}"><span @click="closeCatalogCard">Больше</span></CatalogMore>
            </CatalogHeader>
            <CatalogList>
                <CatalogItem
                        v-for="(product, index) in recommendationsProducts"
                        :key="index"
                        :product="product"
                />
            </CatalogList>
        </Catalog>
        <div class="catalogCard--comment" v-if="JSON.stringify(expert) != JSON.stringify({})">
            <div class="catalogCard--comment-title">{{ expert.title }}</div>
            <div class="catalogCard--comment-subtitle">Оценка эксперта</div>
            <div class="catalogCard--comment-description">{{ expert.text }}</div>
            <div class="catalogCard--comment-expert-container">
                <div class="catalogCard--comment-expert-img-container">
                    <img src="@/assets/img/expert.png" class="catalogCard--comment-expert-img" alt="Expert">
                </div>
                <div class="catalogCard--comment-expert-info">
                    <div class="catalogCard--comment-expert-title">Наталья Викторовна</div>
                    <div class="catalogCard--comment-expert-job">Врач с опытом 10 лет</div>
                </div>
            </div>
            <button class="catalogCard--comment-btn">Посмотреть аналоги</button>
        </div>
        <div class="catalogCard--faq">
            <div class="catalogCard--faq-title">Инструкция</div>
            <div class="catalogCard--faq-list">
                <div class="catalogCard--faq-item" v-for="item in faq">
                    <div class="catalogCard--faq-item-plus">
                        <img src="@/assets/img/icons/plus-purple.svg" alt="Plus">
                    </div>
                    <div class="catalogCard--faq-item-title">{{ item }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {mapGetters, mapActions} from "vuex"
import Catalog from "@/components/Catalog/Catalog"
import CatalogHeader from "@/components/Catalog/CatalogHeader/CatalogHeader"
import CatalogTitle from "@/components/Catalog/CatalogTitle/CatalogTitle"
import CatalogMore from "@/components/Catalog/CatalogMore/CatalogMore"
import CatalogList from "@/components/Catalog/CatalogList/CatalogList"
import CatalogItem from "@/components/Catalog/CatalogList/CatalogItem/CatalogItem"


export default {
    name: "CatalogCard",
    data: () => ({
        faq: [
            'Состав',
            'Фармакологическое действие',
            'Показания',
            'Преминение при беременности и кормлению грудью',
            'Противопоказания',
            'Побочные действия',
            'Взаимодействие',
            'Способ применения и дозы',
            'Передозировка',
            'Описание',
        ],
        expert: {}
    }),
    components: {
        Catalog,
        CatalogHeader,
        CatalogTitle,
        CatalogMore,
        CatalogList,
        CatalogItem
    },
    computed: {
        ...mapGetters(['cart', 'isOpenCatalogCard', 'recommendationsProducts']),
        url() {
            return process.env.VUE_APP_URL
        },
        product() {
            return this.isOpenCatalogCard
        }
    },
    methods: {
        ...mapActions(['closeCatalogCard', 'addToCart', 'removeFromCart']),
        async fetchExpertsInfo() {
            await axios.get(`${process.env.VUE_APP_API}/experts/${this.product.substance_id}`)
            .then(res => {
                this.expert = res.data
            })
            .catch(e => {
                this.expert = {}
            })
        },
        issetInCart(product) {
            return this.cart.filter(item => {
                return product.id === item.id
            }).length
        }
    },
    async created() {
        await this.fetchExpertsInfo()
    }
}
</script>

<style lang="scss">
@import "CatalogCard";
</style>
