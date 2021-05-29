<template>
    <div class="groupProducts-header">
        <BackPage />
        <div class="groupProducts-title-container">
            <h2 class="groupProducts-title">{{ title }}</h2>
            <h3 class="groupProducts-subtitle" v-if="subtitle">{{ subtitle }}</h3>
        </div>
        <Search />
    </div>
</template>

<script>
import BackPage from "@/components/BackPage";
import Search from "@/components/Search/Search";

export default {
    props: [
        'title',
        'subtitle'
    ],
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
