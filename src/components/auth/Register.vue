<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" alt="Welcome">
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p> oder
        <a class="text-vue2" role="button">
          melden Sie sich mit Ihrem Konto an
        </a>
      </p>
    </div>

    <Form @submit="submitData" :validation-schema="schema" v-slot="{errors}">

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="email"><strong>Email Adresse</strong></label>
          <Field as="input" name="email" type="email" class="form-control" id="email" placeholder="Email"/>
          <small class="text-danger" v-if="errors.email">
            {{ errors.email }}
          </small>
        </div>
      </div>

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field as="input" name="password" type="password" class="form-control" id="password" placeholder="Password"/>
          <small class="text-danger" v-if="errors.password">
            {{ errors.password }}
          </small>
        </div>
      </div>

      <div class="form-row">
        <div class=" form-group col-md-8 offset-2">
          <label for="confirmPassword"><strong>Passwort wiederholen</strong></label>
          <Field as="input" name="confirmPassword" type="password" class="form-control" id="confirmPassword"
                 placeholder="Password"/>
          <small class="text-danger" v-if="errors.confirmPassword">
            {{ errors.confirmPassword }}
          </small>
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
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field
  },
  data() {
    const schema = yup.object().shape({
      email: yup
          .string()
          .required("Email Adresse wird benötigt")
          .trim()
          .email(),
      password: yup
          .string()
          .required("Ein Password wird benötigt")
          .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein")
          .trim(),
      confirmPassword: yup
          .string().required("Bitte wiederholen Sie Ihr Passwort")
          .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein")
    })
    return {
      schema,
    }
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