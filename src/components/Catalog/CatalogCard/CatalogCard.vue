<template>
    <div class="catalogCard"
         v-touch:swipe.bottom="closeCatalogCard"
    >
        <!--        <div class="catalogCard&#45;&#45;overlay"></div>-->
        <div class="catalogCard--close" @click="closeCatalogCard">
            <span>&#x2715</span>
        </div>
        <button class="catalogCard--buy">
            <span class="catalogCard--buy-stroke" v-if="product.price.old">{{ product.price.old }}</span>
            <span class="catalogCard--buy-price">{{ product.price.new }} ₽</span>
            <img src="@/assets/img/icons/plus-white.svg" alt="Buy" class="catalogCard--buy-add">
        </button>
        <div class="catalogCard--img-container">
            <img :src="url + '/pics/' + product.image_id + '.webp'" alt="" class="catalogCard--img">
            <div class="catalogCard--pickup">
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
                <CatalogMore :link="{name: 'GroupProducts', params: { id: 3 }}">Больше</CatalogMore>
            </CatalogHeader>
            <CatalogList>
                <CatalogItem
                        v-for="(product, index) in recommendationsProducts"
                        :key="index"
                        :product="product"
                />
            </CatalogList>
        </Catalog>
        <div class="catalogCard--comment">
            <div class="catalogCard--comment-title">Чем аналоги отличаются от данного вещества?</div>
            <div class="catalogCard--comment-subtitle">Оценка эксперта</div>
            <div class="catalogCard--comment-description">
                Аналоги производятся по тем же технологиям, и их качество не
                отличается. Действующее вещество - Ибупрофен, действует одинаково, и одинаково доходит до организма,
                отличия могут возникать лишь в капсулах и внешнем виде упаковки.
            </div>
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
        ]
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
        ...mapGetters(['isOpenCatalogCard', 'recommendationsProducts']),
        url() {
            return process.env.VUE_APP_URL
        },
        product() {
            return this.isOpenCatalogCard
        }
    },
    methods: {
        ...mapActions(['closeCatalogCard']),
        fetchExpertsInfo() {
            axios.get(`${process.env.VUE_APP_API}/experts/${this.product.substance_id}`)
            .then(res => {
                console.log(res.data);
            })
        }
    },
    created() {
        this.fetchExpertsInfo()
    }
}
</script>

<style lang="scss">
@import "CatalogCard";
</style>
