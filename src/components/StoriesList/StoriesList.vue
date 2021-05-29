<template>
    <div class="stories-list">
        <StoriesItem
                @click.native="openStory(story)"
                v-for="(story, index) in stories"
                :story="story"
                :key="index" />
        <div class="stories-item--empty"></div>

        <slide-y-down-transition>
            <StoriesPopup
                    @closeStory="closeStory"
                    :story="activeStory"
                    v-if="isOpenStory"
            />
        </slide-y-down-transition>

    </div>
</template>

<script>
import StoriesItem from './StoriesItem/StoriesItem'
import StoriesPopup from './StoriesPopup/StoriesPopup'

export default {
    name: "StoriesList",
    data: () => ({
        isOpenStory: false,
        activeStory: null,
        animation: "zoom-center-transition",
        stories: [
            {
                title: "Пройдите тест что бы получить индивидуальный список препаратов",
                mainImage: 'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                images: [
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                ]
            },
            {
                title: "Дешево не значит плохо",
                mainImage: 'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                images: [
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ]
            },
            {
                title: 'Какие бывают качества',
                mainImage: 'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                images: [
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ]
            },
            {
                title: "Story 4",
                mainImage: 'https://auto-desk.pro/wp-content/uploads/head.jpg',
                images: [
                    'https://auto-desk.pro/wp-content/uploads/head.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg'
                ]
            },
            {
                title: "Пройдите тест что бы получить индивидуальный список препаратов",
                mainImage: 'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                images: [
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ]
            },
            {
                title: "Пройдите тест что бы получить индивидуальный список препаратов",
                mainImage: 'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                images: [
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ]
            },
        ]
    }),
    components: {
        StoriesItem,
        StoriesPopup
    },
    methods: {
        openStory(story) {
            this.animation = "zoom-center-transition"
            this.activeStory = story
            this.isOpenStory = true
        },
        closeStory() {
            this.animation = "slide-y-down-transition"
            this.activeStory = null
            this.isOpenStory = false
        }
    }
}
</script>

<style lang="scss">
@import "./StoriesList";
</style>
