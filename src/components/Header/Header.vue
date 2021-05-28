<template>
    <div class="header-container">
        <button class="header--profile">
            <img src="@/assets/img/icons/user.svg" alt="Profile">
        </button>
        <div class="header--search">
            <img src="@/assets/img/icons/search.svg" alt="Search" class="header--search-icon">
            <input type="text" placeholder="Искать в Еаптеке" class="header--search-input">
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
