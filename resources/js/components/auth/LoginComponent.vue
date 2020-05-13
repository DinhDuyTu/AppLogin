<template>
  <!-- <div class="container">
    <div class="card card-default">
      <div class="card-header">Sign In</div>
      <div class="card-body">
        <div class="alert alert-danger" v-if="error">
          <p>Sign in fail. Please try again!</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="user@example.com"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-default">Sign In</button>
        </form>
      </div>
    </div>
  </div> -->
  <div class="login-body">
    <div class="container">
      <form class="form-signin" autocomplete="off" @submit.prevent="login" method="post">
        <h2 class="form-signin-heading">sign in now</h2>
        <div class="login-wrap">
          <div v-if="error">
            <p style="color:red">Sign in fail. Please try again!</p>
          </div>
          <input type="email" class="form-control" placeholder="User ID" autofocus v-model="email" required />
          <input style="margin-bottom: 10px" type="password" class="form-control" placeholder="Password" v-model="password" required />
          <label class="checkbox">
            <input type="checkbox" value="remember-me" /> Remember me
            <span class="pull-right">
              <a data-toggle="modal" href="#myModal">Forgot Password?</a>
            </span>
          </label>
          <button class="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
          <p>or you can sign in via social network</p>
          <div class="login-social-link">
            <a href="index.html" class="facebook">
              <i class="fa fa-facebook"></i>
              Facebook
            </a>
            <a href="index.html" class="twitter">
              <i class="fa fa-twitter"></i>
              Twitter
            </a>
          </div>
          <div class="registration">
            Don't have an account yet?
            <a class href="registration.html">Create an account</a>
          </div>
        </div>

        <!-- Modal -->
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabindex="-1"
          id="myModal"
          class="modal fade"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Forgot Password ?</h4>
              </div>
              <div class="modal-body">
                <p>Enter your e-mail address below to reset your password.</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  autocomplete="off"
                  class="form-control placeholder-no-fix"
                />
              </div>
              <div class="modal-footer">
                <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                <button class="btn btn-success" type="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <!-- modal -->
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data: function() {
    return {
      email: null,
      password: null,
      error: false
    };
  },
  methods: {
    login: function() {
      var app = this;
      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function(response) {},
        error: function() {
          app.error = true;
        }
      });
    }
  }
};
</script>