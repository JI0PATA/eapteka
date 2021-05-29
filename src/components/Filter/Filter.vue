<template>
    <div class="filter">
        <FilterButton :active="true">Сначала дешевле</FilterButton>
        <FilterButton>Сначала популярные</FilterButton>
        <button class="filter--filter-btn">
            <img src="@/assets/img/icons/filter.svg" alt="Filter" class="filter--filter-icon">
        </button>
    </div>
</template>

<script>
import FilterButton from "./FilterButton/FilterButton";

export default {
    name: "FilterLine",
    components: {
        FilterButton
    }
}
</script>

<style lang="scss">
@import "Filter";
</style>
