<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="register" method="POST">
      <h2 class="form-signin-heading">registration now</h2>
      <div class="login-wrap">
        <p v-if="error" class="error">here was an error, unable to complete registration.</p>
        <p>Enter your personal details below</p>
        <input type="text" class="form-control" placeholder="Full Name" v-model="name" />
        <span class="help-block error" v-if="error && errors.name">{{ errors.name }}</span>
        <input type="text" class="form-control" placeholder="Email" v-model="email" />
        <span class="help-block error" v-if="error && errors.email">{{ errors.email }}</span>
        <input type="password" class="form-control" placeholder="Password" v-model="password" />
        <span class="help-block error" v-if="error && errors.password">{{ errors.password }}</span>
        <input type="password" class="form-control" placeholder="Re-type Password" v-model="repassword" />
        <label class="checkbox">
          <input type="checkbox" value="agree this condition" v-model="iAgree" /> I agree to the Terms of Service and Privacy Policy
        </label>
        <button class="btn btn-lg btn-login btn-block" type="submit">Submit</button>
        <div class="registration">
          Already Registered.
          <router-link tag="a" :to="{name: 'login'}">Login</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      repassword: "",
      iAgree: false,
      error: false,
      errors: [],
      errorWhenRegistion: false,
    };
  },
  methods: {
    register: function() {
      if (this.checkRepassword) {
        if (this.iAgree) {
          var app = this;
          this.$auth.register({
            url: "/api/register",
            params: {
              name: app.name,
              email: app.email,
              password: app.password,
              password_confirmation: app.repassword
            },
            success: function(resp) {
              app.$router.push({ name: "login" });
            },
            error: function(resp) {
              app.errors = resp.response.data.errors;
            },
            redirect: null
          });
        } else {
          this.error = true;
        }
      }
    },
    checkInput: function() {
      var name = this.name,
        email = this.email,
        password = this.password,
        repassword = this.repassword,
        isVerify = true;
      if (name.length == 0) {
        isVerify = false;
      }
      if (email.length == 0) {
        isVerify = false;
      }
      if (password.length == 0) {
        isVerify = false;
      }
      if (repassword.length == 0) {
        isVerify = false;
      }

      return isVerify;
    },
    checkRepassword: function () {
      let password = this.password,
          repassword = this.repassword,
          isVerify = true;
      if (password != repassword) {
          isVerify = false;
      }

      return isVerify;
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
#email {
  font-size: 12px;
  margin-bottom: 15px;
}
</style>
