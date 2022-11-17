<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Neuer Artikel
            <button class="btn btn-lg bg-vue float-end">Speichern</button>
          </h1>
          <div class="card mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                    src="https://dummyimage.com/600x400/34495e/fff"
                    class="card-img"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="card-title mb-4">Produkttitel</h5>
                    </div>
                    <div class="col-3">
                      <div class="d-grid">
                        <button class="btn  bg-vue2">15 €</button>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, aliquid
                      asperiores atque autem beatae commodi consequatur cumque cupiditate delectus deleniti
                      deserunt dignissimos doloremque doloribus eius enim eos esse est et eum ex excepturi
                      explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout";

export default {
  name: "CreateProductPage",
  components: {
    TheShopLayout
  },
}
</script>

<style scoped>

</style>