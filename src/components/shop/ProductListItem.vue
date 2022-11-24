<template>
  <div class="card">
    <img src="https://picsum.photos/200">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text"> {{ shortDescription }}</p>
      <div class="text-center mt-3">
        <div class="lead">
          <strong class="text-vue">{{ product.price }} €</strong>
        </div>
      </div>
      <router-link
          :to="`/shop/read/product/${product.id}`"
          class="stretched-link"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    product: Object
  },
  computed: {
    shortDescription() {
      const descriptionLength = 80;
      if (this.product.description.length > descriptionLength) {
        return this.product.description.substring(0, descriptionLength) + '...';
      }
      return this.product.description;
    }
  }
}
</script>

<style scoped>

</style>