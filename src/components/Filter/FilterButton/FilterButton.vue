<template>
    <button
            :class="{'active': active}"
            class="filterButton">
        <slot />
    </button>
</template>

<script>
export default {
    props: [
        'active'
    ],
    name: "FilterButton"
}
</script>

<style lang="scss" scoped>
.filterButton {
    background: $buttonBg;
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
    padding: 10px 13px;
    border-radius: 40px;
    border: transparent;
    margin-right: 10px;

    &.active {
        background: $blue
    }
}
</style>
