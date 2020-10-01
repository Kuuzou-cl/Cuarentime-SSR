<template>
  <div v-if="!$store.state.token">
    <div
      type="button"
      class="signin"
      v-if="!$store.state.token"
      data-toggle="modal"
      data-target="#exampleModal2"
    >
      Registro
      <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="icon-navbar" />
    </div>
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content user_card">
          <div class="modal-header">
            <font size="5">
              <p class="text-info">Registro</p>
            </font>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <p v-if="loginError" class="error">{{ loginError }}</p>
            </div>
            <div class="form-row justify-content-center">
              <input
                v-model="email"
                class="custom-input-login"
                placeholder="Email"
              />
            </div>
            <div class="form-row justify-content-center">
              <input
                type="password"
                v-model="password"
                class="custom-input-login"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-more"
              @click="signUp"
              data-dismiss="modal"
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      loginError: null,
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      try {
        await this.$store
          .dispatch("signUp", {
            email: this.email,
            password: this.password,
          })
          .catch((e) => {
            console.log(e);
          });
        this.email = "";
        this.password = "";
        this.loginError = null;
      } catch (e) {
        this.loginError = e.message;
      }
    },
  },
};
</script>

<style lang="scss">
</style>