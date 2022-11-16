<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid">
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p> oder
        <a class="text-vue2" role="button">
          melden Sie sich mit Ihrem Konto an
        </a>
      </p>
    </div>

    <Form @submit="submitData">

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="email"><strong>Email Adresse</strong></label>
          <Field as="input" name="email" type="email" class="form-control" id="email" placeholder="Email"/>
        </div>
      </div>

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field as="input" name="password" type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
      </div>

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="confirmPassword"><strong>Passwort wiederholen</strong></label>
          <Field as="input" name="confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="Password"/>
        </div>
      </div>

      <div class="form-row mt-3">
        <div class=" form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">Registrieren</button>
          </div>
        </div>
      </div>

    </Form>

  </div>
</template>

<script>
import {Form, Field} from "vee-validate";

export default {
  name: "Register",
  components: {
    Form,
    Field
  },
  methods: {
    submitData(values) {
      console.log(values)
    }
  }
}
</script>

<style scoped>

</style>