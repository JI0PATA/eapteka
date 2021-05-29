<template>
    <div class="groupProducts-header">
        <BackPage />
        <div class="groupProducts-title-container">
            <h2 class="groupProducts-title">Название вещества</h2>
            <h3 class="groupProducts-subtitle">Дополнительное название</h3>
        </div>
        <Search />
    </div>
</template>

<script>
import BackPage from "@/components/BackPage";
import Search from "@/components/Search/Search";

export default {
    name: "GroupProductsHeader",
    components: {
        BackPage,
        Search
    }
}
</script>

<style lang="scss">
@import "GroupProductsHeader";
</style>
