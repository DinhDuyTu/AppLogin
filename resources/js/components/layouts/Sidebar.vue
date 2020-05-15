<template>
  <aside>
    <div id="sidebar" class="nav-collapse">
      <ul class="sidebar-menu" id="nav-accordion">
        <router-link tag="li" to="/" class="sub-menu">
          <a class="active">
            <i class="fa fa-dashboard"></i>
            <span>Dashboard</span>
          </a>
        </router-link>
        
        <router-link tag="li" to="/form" class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-tasks"></i>
            <span>Form Stuff</span>
          </a>
        </router-link>

        <router-link tag="li" to="/data-table" class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-th"></i>
            <span>Data Tables</span>
          </a>
        </router-link>

        <router-link tag="li" :to="{ name: 'listuser' }" class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-user"></i>
            <span>List User</span>
          </a>
        </router-link>

        <hr>

        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-book"></i>
            <span>UI Elements</span>
          </a>
        </li>

        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-cogs"></i>
            <span>Components</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-tasks"></i>
            <span>Form Stuff</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-th"></i>
            <span>Data Tables</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-envelope"></i>
            <span>Mail</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-bar-chart-o"></i>
            <span>Charts</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-shopping-cart"></i>
            <span>Shop</span>
          </a>
        </li>
        <li>
          <a href="google_maps.html">
            <i class="fa fa-map-marker"></i>
            <span>Google Maps</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-comments-o"></i>
            <span>Chat Room</span>
          </a>
        </li>
        <li class="sub-menu">
          <a href="javascript:;">
            <i class="fa fa-glass"></i>
            <span>Extra</span>
          </a>
        </li>
        <li>
          <a href="login.html">
            <i class="fa fa-user"></i>
            <span>Login Page</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style>
</style>