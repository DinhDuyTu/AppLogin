<template>
  <section id="container">
      <Header/>
      <Sidebar/>
      <router-view></router-view>
      <RightSidebar/>
      <!-- <Footer/> -->
    </section>
</template>

<script>
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import RightSidebar from "../layouts/RightSidebar";
import Footer from "../layouts/Footer";


export default {
    components: {
        Header,
        Sidebar,
        RightSidebar,
        Footer,
    }
}
</script>

<style>

</style>