<template>
  <NavbarComponent/>
  <Profile/>
  <Portfolio/>
  <FooterComponent/>
</template>
<script>
import Profile from "../components/Profile.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import Portfolio from "../components/Portfolio.vue";

export default {
  name: "home",
  components: {
    Profile,
    Portfolio,
    NavbarComponent,
    FooterComponent,
  }
}

</script>
<style scoped>

</style>