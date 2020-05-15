<template>
  <div
    class="modal fade"
    id="modalCreateUser"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Form Create User</h4>
        </div>
        <div class="modal-body">
          <div role="form" class="form-horizontal tasi-form">
            <div class="form-group">
              <label class="col-lg-2 col-lg-offset-1 control-label">Full Name</label>
              <div class="col-lg-8">
                <input
                  type="text"
                  placeholder
                  id="full-name"
                  class="form-control"
                  v-model="user.fullname"
                />
                <p v-if="user.fullname == ''" class="help-block haserror">Field is required</p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 col-lg-offset-1 control-label">Address</label>
              <div class="col-lg-8">
                <input
                  type="text"
                  placeholder
                  id="address"
                  class="form-control"
                  v-model="user.address"
                />
                <p v-if="user.address == ''" class="help-block haserror">Field is required</p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 col-lg-offset-1 control-label">City</label>
              <div class="col-lg-8">
                <input type="text" placeholder id="city" class="form-control" v-model="user.city" />
                <p v-if="user.city == ''" class="help-block haserror">Field is required</p>
              </div>
            </div>
            <div class="form-group has-warning">
              <label class="col-lg-2 col-lg-offset-1 control-label">Gender</label>
              <div class="radios">
                <label class="label_radio col-lg-4 col-sm-4" for="radio-01">
                  <input
                    name="sample-radio"
                    id="radio-01"
                    value="Male"
                    type="radio"
                    v-model="user.gender"
                  /> Male
                </label>
                <label class="label_radio col-lg-4 col-sm-4" for="radio-02">
                  <input
                    name="sample-radio"
                    id="radio-02"
                    value="Female"
                    type="radio"
                    v-model="user.gender"
                  /> Female
                </label>
              </div>
            </div>
            <div class="form-group" :class="{haserror: emailExist}">
              <label class="col-lg-2 col-lg-offset-1 control-label">Email</label>
              <div class="col-lg-8">
                <input
                  type="email"
                  placeholder
                  id="email"
                  class="form-control"
                  :class="{inputerror: emailExist}"
                  v-model="user.email"
                  v-on:keyup="checkEmail"
                />
                <p
                  v-if="emailExist"
                  class="help-block haserror"
                >Email already exists! Please use another email</p>
                <p v-if="user.email == ''" class="help-block haserror">Field is required</p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 col-lg-offset-1 control-label">Password</label>
              <div class="col-lg-8">
                <input
                  type="password"
                  placeholder
                  id="password"
                  class="form-control"
                  v-model="user.password"
                />
                <p v-if="user.password == ''" class="help-block haserror">Field is required</p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 col-lg-offset-1 control-label">Repassword</label>
              <div class="col-lg-8">
                <input
                  type="password"
                  placeholder
                  id="repassword"
                  class="form-control"
                  v-model="user.repassword"
                />
                <p v-if="user.repassword == ''" class="help-block haserror">Field is required</p>
                <p
                  v-if="user.repassword != user.password"
                  class="help-block haserror"
                >Password does not match</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button data-dismiss="modal" class="btn btn-default" type="button">Close</button>
          <button class="btn btn-success" type="button" @click="confirm">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullname: "",
        address: "",
        city: "",
        gender: "Male",
        email: "",
        password: "",
        repassword: ""
      },
      emailExist: false,
      error: false
    };
  },
  methods: {
    checkEmail(e) {
      axios
        .post(
          "/api/check-email",
          {
            email: this.user.email
          },
          {
            "X-CSRF-TOKEN": document.querySelector(
              'head meta[name="csrf-token"]'
            )
          }
        )
        .then(response => {
          if (response.data == 1) {
            this.emailExist = true;
          } else {
            this.emailExist = false;
          }
        })
        .catch(error => {});
    },
    confirm() {
      this.checkInput();
      if (this.error == false) {
        axios
          .post("/api/registion", {
            fullname: this.user.fullname,
            address: this.user.address,
            city: this.user.city,
            gender: this.user.gender,
            email: this.user.email,
            password: this.user.password
          })
          .then(response => {
            if (response.data == 0) {
              this.errorWhenRegistion = true;
            } else {
              this.$router.push("/dashboard/listuser");
            }
          })
          .catch(error => {});
      }
    },
    checkInput() {
      if (this.user.iAgree == true) {
        if (this.user.fullname == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.address == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.city == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.email == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.password == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.repassword == "") {
          this.error = true;
        } else {
          this.error = false;
        }
        if (this.user.repassword != this.user.password) {
          this.error = true;
        } else {
          this.error = false;
        }
      }
    }
  }
};
</script>

<style>
.haserror {
  color: red;
}
.inputerror {
  border: 1px solid red;
}
</style>