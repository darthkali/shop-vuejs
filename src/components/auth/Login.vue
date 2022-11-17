<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" class="img-fluid" alt="Welcome">
    </div>
    <div class="text-center">
      <h2>Jetzt anmelden</h2>
      <p> oder
        <a class="text-vue2" role="button" @click="changeComponent('register')">
          Erstellen Sie ein Konto
        </a>
      </p>
    </div>

    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
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


      <div class="form-row mt-3">
        <div class=" form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
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
  name: "Login",
  components: {
    Form,
    Field
  },
  emits: {
    'change-component': (payload) => {
      return payload.componentName === "register";

    }
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
    })
    return {
      schema,
      error: "",
      isLoading: false
    }
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("INVALID_PASSWORD")) {
          return "Das Passwort ist nicht gültig"
        } else if (this.error.includes("EMAIL_NOT_FOUND")) {
          return "Die Email Adresse ist nicht gültig"
        }
        return "Es ist ein unbekannter Fehler aufgetreten"
      }
      return ""
    }
  },
  methods: {
    changeComponent(componentName) {
      this.$emit('change-component', {componentName})
    },
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      this.$store
          .dispatch("signin", {
            email: values.email,
            password: values.password
          })
          .then(() => {
            this.isLoading = false;
            this.$router.push({path: "/shop"});
          }).catch((error) => {
        this.isLoading = false;
        this.error = error.message;
      })
    },
  }
}
</script>

<style scoped>

</style>