<template>
  <div class="login-body">
    <div class="container">
      <form class="form-signin" @submit.prevent="verification" method="GET">
        <h2 class="form-signin-heading">Verify Your Email Address</h2>
        <div
          class="alert alert-success"
          v-if="success"
        >A fresh verification link has been sent to your email address.</div>
        <div
          class="alert alert-danger"
          v-if="error"
        >Please Check Email</div>
        <p>Before proceeding, please check your email for a verification link.</p>
        <p>If you did not receive the email</p>
        <div class="login-wrap">
          <button
            id="btn-send"
            class="btn btn-lg btn-login btn-block"
            type="submit"
            :class="[sent ? '' : 'btn-success']"
            @click="send"
          >
            <span v-if="!sent">SEND</span>
            <span v-else>RESENT</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sent: false,
      time: 10,
      success: false,
      error: false
    };
  },
  methods: {
    verification: function() {
      axios
        .get("/api/email/resend")
        .then(response => {
          if (response.status == 200) {
            this.success = true 
            document.getElementById("btn-send").disabled = true;
          }
        })
        .catch(error => {
          if (error.response.status == 429 || error.response.status == 401) {
            this.error = true;
            document.getElementById("btn-send").disabled = true;
          }
        });
    },
    send: function() {
      this.error = false;
      this.success = false;
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
        document.getElementById("btn-send").disabled = false;
      }, this.time * 1000);
      // this.countDown();
    },
    // countDown: function() {
    //   var countDown = setInterval(() => {
    //     this.time--;
    //     if (this.time == 0) {
    //       clearInterval(countDown);
    //       this.error = false
    //     }
    //   }, 1000);
    // }
  }
};
</script>
<style scoped>
p {
  color: black;
}
.form-signin {
  max-width: 60%;
}
.btn-success {
  background: #5cb85c !important;
  box-shadow: 0 4px #358c35 !important;
}
.alert {
  text-align: center;
}
</style>