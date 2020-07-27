<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="user_card">
        <div class="row justify-content-center">
          <img
            src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.webp"
            width="25%"
            height="25%"
          />
        </div>
        <div class="row justify-content-center">
          <p v-if="loginError" class="error">{{ loginError }}</p>
        </div>
        <form>
          <div class="form-row justify-content-center">
            <input v-model="email" class="custom-input-login" placeholder="Email" />
          </div>
          <div class="form-row justify-content-center">
            <input
              type="password"
              v-model="password"
              class="custom-input-login"
              placeholder="Password"
            />
          </div>
          <div class="form-row justify-content-center">
            <button type="button" name="button" class="btn btn-more" @click="login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginError: null,
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .catch(e => {
            console.log(e);
          });
        this.email = "";
        this.password = "";
        this.loginError = null;
        this.$router.push({ path: "/dashboard" });
      } catch (e) {
        this.loginError = e.message;
      }
    }
  }
};
</script>
