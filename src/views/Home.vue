<template>
  <div class="home">
    <Header />
    <StoriesList />
  </div>
</template>

<script>
import StoriesList from "@/components/StoriesList/StoriesList";
import Header from "@/components/Header/Header";

export default {
  name: 'Home',
  components: {
    Header,
    StoriesList
  }
}
</script>
