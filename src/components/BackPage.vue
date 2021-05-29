<template>
    <router-link :to="{ name: 'Home' }" class="returnBack">
        <img src="@/assets/img/icons/arrow-left.svg" alt="Back page" class="returnBack-img">
    </router-link>
</template>

<script>
export default {
    name: "BackPage"
}
</script>

<style lang="scss">
.returnBack {
    width: 53px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $buttonBg;
    border-radius: 40px;
}
</style>
