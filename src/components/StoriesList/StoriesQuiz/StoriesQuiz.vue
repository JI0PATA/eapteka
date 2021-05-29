<template>
    <div class="stories-popup"
         ref="storyPopup"
         v-touch:swipe.bottom="close"
    >
        <div class="stories-popup--close" @click="close">
            <span>&#x2715</span>
        </div>

        <fade-transition
                class="stories-popup--group"
                group>
            <div
                    key="main"
                    v-if="currentSlide === 0"
                    :style="story.startSlide.styles"
                    class="stories-popup--slide"
            >
                <div class="stories-popup--slide-info">
                    <div class="stories-popup--slide-title">{{ story.title }}</div>
                    <button class="stories-popup--slide-btn" @click="currentSlide++">Пройти тест!</button>
                </div>
            </div>
            <div
                    v-for="(question, index) in story.questions"
                    :key="index"
                    v-if="(currentSlide - 1) === index"
                    class="stories-popup--slide"
                    :style="question.styles"
            >
                <div class="stories-popup--quiz-header">
                    <div class="stories-popup--quiz-steps">ШАГ {{ currentSlide }}/{{ story.questions.length }}</div>
                </div>
                <div class="stories-popup--quiz-answers">
                    <div class="stories-popup--quiz-answers--title">{{ question.question }}</div>
                    <div class="stories-popup--quiz-answers--list">
                        <div class="stories-popup--quiz-answers--item"
                             :key="index"
                             @click="currentSlide++"
                             v-for="(answer, index) in question.answers">{{ answer }}</div>
                    </div>
                </div>
            </div>
            <div
                    key="end"
                    v-if="currentSlide - 1 >= story.questions.length"
                    class="stories-popup--slide"
                    :style="story.endSlide.styles"
            >
                <div class="stories-popup--slide-info">
                    <div class="stories-popup--slide-subtitle">В конце вы получите список индивидуальных препаратов для вас</div>
                    <button class="stories-popup--slide-btn" @click="close">Спасибо!</button>
                </div>
            </div>
        </fade-transition>
    </div>
</template>

<script>
export default {
    name: "StoriesQuiz",
    props: [
        "story"
    ],
    data: () => ({
        currentSlide: 0
    }),
    methods: {
        close() {
            return this.$emit('closeStory')
        },
    }
}
</script>

<style lang="scss">
@import "StoriesQuiz";
</style>

