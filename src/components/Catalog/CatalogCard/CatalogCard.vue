<template>
    <div class="catalogCard"
         v-touch:swipe.bottom="closeCatalogCard"
    >
<!--        <div class="catalogCard&#45;&#45;overlay"></div>-->
        <div class="catalogCard--close" @click="closeCatalogCard">
            <span>&#x2715</span>
        </div>
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
                <div class="catalogCard--property-description catalogCard--property-description-blue">Хранить в холодильнике при -5</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "CatalogCard",
    computed: {
        ...mapGetters(['isOpenCatalogCard']),
        url() {
            return process.env.VUE_APP_URL
        },
        product() {
            return this.isOpenCatalogCard
        }
    },
    methods: {
        ...mapActions(['closeCatalogCard'])
    }
}
</script>

<style lang="scss">
@import "CatalogCard";
</style>
