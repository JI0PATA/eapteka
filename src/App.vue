<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.addEventListener('contextmenu', ev => {
      ev.preventDefault()
    })
  }
}
</script>

<style lang="scss">

</style>
