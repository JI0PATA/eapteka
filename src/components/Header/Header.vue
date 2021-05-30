<template>
    <div class="header-container">
        <router-link :to="{ name: 'Profile' }" class="header--profile">
            <img src="@/assets/img/icons/user.svg" alt="Profile">
        </router-link>
        <div class="header--search">
            <img src="@/assets/img/icons/search.svg" alt="Search" class="header--search-icon">
            <input type="text" placeholder="Искать в Еаптеке" class="header--search-input">
            <img src="@/assets/img/icons/microphone.svg" alt="Microphone" class="header--microphone-icon">
            <img src="@/assets/img/icons/camera.svg" alt="Camera" class="header--camera-icon">
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
@import "Header";
</style>
