<template>
    <div class="stories-popup"
         ref="storyPopup"
         v-touch:swipe.left="swipeNext"
         v-touch:swipe.right="swipePrev"
         v-touch:swipe.bottom="closeStory"
         v-touch:start="pauseStory"
         v-touch:end="playStory"
    >

        <keep-alive>
            <fade-transition>
                <div class="stories-popup--progress"
                     v-show="isShowProgressBar"
                     :style="{'grid-template-columns': `repeat(${story.images.length}, 1fr)`}"
                >
                    <div class="stories-popup--progress-item"
                         :key="index"
                         v-for="(image, index) in story.images">
                        <div class="stories-popup--progress-item--bar"
                             :class="{'end': index < currentSlide}"
                             :style="{width: `calc(${calcWidthBar(index)}%)`}"></div>
                    </div>
                </div>
            </fade-transition>
        </keep-alive>
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
        animation: "fade-transition",
        interval: 0,
        isPauseInterval: false,
        isShowProgressBar: true
    }),
    methods: {
        calcWidthBar(index) {
            return this.currentSlide === index ? this.interval / (this.intervalTimer / 100) : 0
        },
        clearInterval() {
            this.interval = 0
        },
        changeActiveBar(currentSlide) {
            if (currentSlide >= this.story.images.length) {
                return this.closeStory()
            }

            this.performanceStart = performance.now()
            this.currentSlide = currentSlide
            this.clearInterval()
            this.startInterval()
        },
        swipeNext() {
            if (this.currentSlide + 1 >= this.story.images.length) this.closeStory()
            this.clearInterval()
            this.changeActiveBar(this.currentSlide + 1)
        },
        swipePrev() {
            this.clearInterval()
            this.changeActiveBar(this.currentSlide - 1 < 0 ? 0 : this.currentSlide - 1)
        },
        pauseStory() {
            this.timeoutHiddenProgressBar = setTimeout(() => {
                this.isShowProgressBar = false
            }, 500)
            this.isPauseInterval = true
        },
        playStory() {
            this.isShowProgressBar = true
            clearTimeout(this.timeoutHiddenProgressBar)
            this.performanceStart = performance.now() - this.interval
            this.isPauseInterval = false
            this.startInterval()
        },
        closeStory() {
            this.clearInterval()
            return this.$emit('closeStory')
        },
        startInterval() {
            if (this.isPauseInterval) return;
            requestAnimationFrame(() => {
                if (this.interval >= this.intervalTimer) this.changeActiveBar(this.currentSlide + 1)

                this.interval = performance.now() - this.performanceStart
                this.startInterval()
            })
        }
    },
    created() {
        this.changeActiveBar(0)
        this.startInterval()
    },
    mounted() {
        this.$root.$el.style.overflow = "hidden"

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
    },
    destroyed() {
        this.$root.$el.style.overflow = "auto"
        this.isPauseInterval = true
    }
}
</script>

<style lang="scss">
@import "StoriesPopup";
</style>
