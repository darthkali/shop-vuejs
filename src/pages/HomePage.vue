<template>
  <TheTwoColumnsLayout
      :left-column-class="'col-md-8 bg-vue'"
      :right-column-class="'col-md-4'"
      :fullsize="true"
  >
    <template #left-col>
      <div class="mt-5 text-center">
        <div class="display-1 my-5"> Der Shop</div>
        <div class="display-4 my-5">
          Erhalten Sie Zugriff auf exklusive Artikel
        </div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/shopping.svg" class="img-fluid">
        </div>
      </div>
    </template>
    <template #right-col>
      <Register/>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout"; // @ is an alias to /src
import Register from "@/components/auth/Register";

export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    Register
  }
}
</script>

<style scoped>

</style>