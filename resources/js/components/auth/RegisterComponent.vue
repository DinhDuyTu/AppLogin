<template>
  <div class="container">
    <div class="card card-default">
      <div class="card-header">Register</div>
      <div class="card-body">
        <div class="alert alert-danger" v-if="error && !success">
          <p>here was an error, unable to complete registration.</p>
        </div>
         <div class="alert alert-success" v-if="success">
          <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
        </div>
        <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
          <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" v-model="name">
            <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">
            <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password">
            <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
          </div>
          <button type="submit" class="btn btn-default">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      email: '',
      password: '',
      error: false,
      errors: {},
      success: false
    }
  },
  methods: {
    register: function () {
      var app = this
      this.$auth.register({
        url: '/api/auth/register',
        params: {
          name: app.name,
          email: app.email,
          password: app.password
        },
        success: function () {
          app.success = true
        },
        error: function (resp) {
          app.error = true;
          app.errors = resp.response.data.errors;
        },
        redirect: null
      })
    }
  }
}
</script>