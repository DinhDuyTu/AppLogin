<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="logo">
      <router-link :to="{}" class="navbar-brand">SPA-Vue</router-link>
    </div>
    <div class="my-2 my-lg-0 dropdown navbar-right">
      <a class="nav-link dropdown-toggle"
        href="#" id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        {{ $auth.user().name }}
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item text-black" href="#" @click="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$auth.logout()
    }
  }
}
</script>


<style lang="scss">
.navbar {
  a {
    font-weight: bold;
    color: white !important;
  }

  a:hover {
    text-decoration: none;
  }

  .text-black {
    color: black !important;
  }

  .dropdown-menu {
    margin-top: 7px;
  }
}
</style>