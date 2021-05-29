<template>
  <div id="app">
    <fade-transition>
      <Preloader ref="preloader" v-show="preloader" />
    </fade-transition>
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDlqdLsjc1uBuQT4pRTl36en4IjvAgU9zA",
        authDomain: "eapteka-hack-2021.firebaseapp.com",
        databaseURL: "https://eapteka-hack-2021-default-rtdb.firebaseio.com",
        projectId: "eapteka-hack-2021",
        storageBucket: "eapteka-hack-2021.appspot.com",
        messagingSenderId: "1073231139868",
        appId: "1:1073231139868:web:93f77654e44a9832f63bd9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
</script>

<script>
import Preloader from "./components/Preloader/Preloader";

export default {
  name: "App",
  data: () => ({
    preloader: true
  }),
  components: {
    Preloader
  },
  mounted() {
    document.addEventListener('contextmenu', ev => {
      ev.preventDefault()
    })

    setTimeout(() => {
      this.preloader = false
    }, 1500)
  }
}
</script>

<style lang="scss">

</style>
