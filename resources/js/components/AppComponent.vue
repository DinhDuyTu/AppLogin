<template>
  <div class="panel panel-default">
    <div class="panel-heading" v-if="$auth.check()">
      <TopMenu />
    </div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopMenu from "./layouts/TopMenuComponent";

export default {
  components: {
    TopMenu
  }
};
</script>