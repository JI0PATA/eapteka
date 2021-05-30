<template>
    <div class="stories-list">
        <StoriesItem
                @click.native="openStory(story)"
                v-for="(story, index) in stories"
                :story="story"
                :key="index" />
        <div class="stories-item--empty"></div>

        <slide-y-down-transition>
            <component :is="activeStory.component"
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
import StoriesQuiz from "./StoriesQuiz/StoriesQuiz";

export default {
    name: "StoriesList",
    data: () => ({
        isOpenStory: false,
        activeStory: null,
        animation: "zoom-center-transition",
        stories: [
            {
                title: "Пройдите двухминутный тест и получите полезные рекомендации ",
                mainImage: require('../../assets/img/story-quiz.png'),
                styles: {
                    backgroundColor: "#8168F0"
                },
                startSlide: {
                    styles: {
                        backgroundImage: `url('${require('../../assets/img/start-quiz.png')}')`,
                    },
                    giftCaption: 'А так же ватные палочки в подарок!'
                },
                endSlide: {
                    styles: {
                        backgroundImage: `url('${require('../../assets/img/quiz-5.png')}')`
                    }
                },
                gift: {
                    image: require('../../assets/img/gift.png'),
                    name: 'Bella Cotton Ватные палочки E Vita, 100 шт.'
                },
                questions: [
                    {
                        question: `Часто ли вы покупаете лекарства, которые рекламируют?`,
                        answers: [
                            'Да',
                            'Нет'
                        ],
                        styles: {
                            backgroundImage: `url('${require('../../assets/img/quiz-1.png')}')`
                        }
                    },
                    {
                        question: `Доверяете ли вы рекомендациям лекарств от врачей в СМИ и блогах?`,
                        answers: [
                            'Да',
                            'Нет'
                        ],
                        styles: {
                            backgroundImage: `url('${require('../../assets/img/quiz-2.png')}')`
                        }
                    },
                    {
                        question: `Знаете ли вы, что аналог действует так же, как и оригинальный препарат?`,
                        answers: [
                            'Да',
                            'Нет'
                        ],
                        styles: {
                            backgroundImage: `url('${require('../../assets/img/quiz-3.png')}')`
                        }
                    },
                    {
                        question: `В какой форме предпочитаете принимать лекарства?`,
                        answers: [
                            'Таблетки',
                            'Мазь',
                            'Сироп'
                        ],
                        styles: {
                            backgroundImage: `url('${require('../../assets/img/quiz-4.png')}')`
                        }
                    },
                    {
                        question: `Знаете ли вы о том, что такое «дженерики»? Чем отличается аналог лекарственного средства от «дженерика»?`,
                        answers: [
                            'Знаю',
                            'Нет',
                            'Расскажите подробнее'
                        ],
                        styles: {
                            backgroundImage: `url('${require('../../assets/img/quiz-5.png')}')`
                        }
                    },
                ],
                component: StoriesQuiz
            },
            {
                title: "Дешево - не значит плохо",
                mainImage: 'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                images: [
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ],
                component: StoriesPopup
            },
            {
                title: 'Какие бывают качества',
                mainImage: 'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                images: [
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ],
                component: StoriesPopup
            },
            {
                title: "Story 4",
                mainImage: 'https://auto-desk.pro/wp-content/uploads/head.jpg',
                images: [
                    'https://auto-desk.pro/wp-content/uploads/head.jpg',
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg'
                ],
                component: StoriesPopup
            },
            {
                title: "Пройдите тест, чтобы получить индивидуальный список рекомендаций",
                mainImage: 'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                images: [
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ],
                component: StoriesPopup
            },
            {
                title: "Пройдите тест, чтобы получить индивидуальный список рекомендаций",
                mainImage: 'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                images: [
                    'https://i.pinimg.com/originals/dc/8a/c7/dc8ac79668d2a18d6065b0c42b7f539e.jpg',
                    'https://blog.allo.ua/wp-content/uploads/Glavnaya-kartinka-15.jpg',
                    'https://cdnimg.rg.ru/img/content/187/13/91/iStock-1012400706_d_850_d_850.jpg',
                    'https://auto-desk.pro/wp-content/uploads/head.jpg'
                ],
                component: StoriesPopup
            },
        ]
    }),
    components: {
        StoriesItem,
        StoriesPopup,
        StoriesQuiz
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
