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
          <img src="@/assets/shopping.svg" class="img-fluid" alt="">
        </div>
      </div>
    </template>
    <template #right-col>
      <component
          :is="componentName"
          @change-component="changeComponent"
      >
        <Register/>
      </component>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout"; // @ is an alias to /src
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";

export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    Register,
    Login
  },
  data() {
    return {
      componentName: "register",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
}
</script>

<style scoped>

</style>