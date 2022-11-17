<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
      <router-link to="/shop" class="navbar-brand">Der Shop</router-link>
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <router-link to="/shop" class="nav-link">Startseite</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop/item/create" class="nav-link">Neuer Artikel</router-link>
        </li>
      </ul>
      <button class="btn bg-vue me-3">
        <i class="fa fa-shopping-card"></i> Warenkorb (10 €)
      </button>
      <button class="btn bg-vue2" @click="signout()">
        <i class="fa fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    async signout() {
      try {
        await this.$store.dispatch("signout")
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>

</style>