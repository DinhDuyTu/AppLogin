<template>
  <section id="main-content">
    <section class="wrapper">
      <div class="row">
        <div class="col-lg-12">
          <section class="panel">
            <header class="panel-heading">
              List User |
              <button class="btn btn-primary btn-sm" data-toggle="modal" href="#modalCreateUser">
                <i class="fa fa-plus"></i>
              </button>
            </header>
            <table class="table table-striped table-advance table-hover">
              <thead>
                <tr>
                  <th>
                    <i class="fa fa-bullhorn"></i> ID
                  </th>
                  <th class="hidden-phone">
                    <i class="fa fa-question-circle"></i> User Name
                  </th>
                  <th>
                    <i class="fa fa-bookmark"></i> User Email
                  </th>
                  <th>
                    <i class="fa fa-edit"></i> Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in list_user" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td class="hidden-phone">{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <button class="btn btn-success btn-xs">
                      <i class="fa fa-check"></i>
                    </button>
                    <button class="btn btn-primary btn-xs">
                      <i class="fa fa-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-xs">
                      <i class="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section>
    <modal />
  </section>
</template>

<script>
import modal from "./ModelsCreateUser";
export default {
  data() {
    return {
      list_user: []
    };
  },
  components: {
    modal
  },
  created() {
    this.getListUsers();
  },
  methods: {
    getListUsers() {
      axios
        .get("/api/get_list_user")
        .then(response => {
          this.list_user = response.data;
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
</style>