<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
      <a class="navbar-brand">Der Shop</a>
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <a class="nav-link">Startseite</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Neuer Artikel</a>
        </li>
      </ul>
      <button class="btn bg-vue me-3">
        <i class="fa fa-shopping-card"></i> Warenkorb (10 €)
      </button>
      <button class="btn bg-vue2">
        <i class="fa fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>