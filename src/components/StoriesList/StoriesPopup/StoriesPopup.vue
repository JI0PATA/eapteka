<template>
    <div class="stories-popup"
         ref="storyPopup"
         v-touch:swipe.left="swipeNext"
         v-touch:swipe.right="swipePrev"
         v-touch:swipe.bottom="closeStory"
    >

        <div class="stories-popup--progress"
             :style="{'grid-template-columns': `repeat(${story.images.length}, 1fr)`}"
        >
            <div class="stories-popup--progress-item"
                 :key="index"
                 v-for="(image, index) in story.images">
                <div class="stories-popup--progress-item--bar" :class="{'animate': index === currentSlide, 'end': index < currentSlide}"></div>
            </div>
        </div>
        <button class="stories-popup--controls stories-popup--controls-left"
                @click="swipePrev()"
        ></button>
        <button class="stories-popup--controls stories-popup--controls-right"
                @click="swipeNext()"
        ></button>
        <fade-transition
                class="stories-popup--group"
                mode="out-in"
                group>
            <img
                v-for="(image, index) in story.images"
                :key="image"
                :src="image"
                v-if="currentSlide === index"
                alt="" class="stories-popup--img">
        </fade-transition>
    </div>
</template>

<script>
export default {
    name: "StoriesPopup",
    props: [
        "story"
    ],
    data: () => ({
        currentSlide: 0,
        intervalTimer: 5000,
        animation: "fade-transition"
    }),
    methods: {
        changeActiveBar(currentSlide) {
            this.currentSlide = currentSlide
            this.startInterval()
        },
        swipeNext() {
            if (this.currentSlide + 1 >= this.story.images.length) this.closeStory()
            clearInterval(this.interval)
            this.changeActiveBar(this.currentSlide + 1)
        },
        swipePrev() {
            clearInterval(this.interval)
            this.changeActiveBar(this.currentSlide - 1 < 0 ? 0 : this.currentSlide - 1)
        },
        closeStory() {
            clearInterval(this.interval)
            return this.$emit('closeStory')
        },
        startInterval() {
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                this.changeActiveBar(this.currentSlide + 1)
                if (this.currentSlide >= this.story.images.length) this.closeStory()
            }, this.intervalTimer)
        }
    },
    created() {
        this.changeActiveBar(0)
        this.startInterval()
    },
    mounted() {
        let touchStartHandler,
            touchMoveHandler,
            touchPoint;
        // Only needed for touch events on chrome.
        if ((window.chrome || navigator.userAgent.match("CriOS"))
            && "ontouchstart" in document.documentElement) {
            touchStartHandler = function() {
                // Only need to handle single-touch cases
                touchPoint = event.touches.length === 1 ? event.touches[0].clientY : null;
            };
            touchMoveHandler = function(event) {
                let newTouchPoint;
                // Only need to handle single-touch cases
                if (event.touches.length !== 1) {
                    touchPoint = null;

                    return;
                }
                // We only need to defaultPrevent when scrolling up
                newTouchPoint = event.touches[0].clientY;
                if (newTouchPoint > touchPoint) {
                    event.preventDefault();
                }
                touchPoint = newTouchPoint;
            };
            this.$refs.storyPopup.addEventListener("touchstart", touchStartHandler, {
                passive: false
            });
            this.$refs.storyPopup.addEventListener("touchmove", touchMoveHandler, {
                passive: false
            });
        }
    }
}
</script>

<style lang="scss">
@import "StoriesPopup";
</style>
