<template>
  <section id="container">
      <Header :user="user" />
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
    data() {
        return {
            user: ''
        }
    },
    components: {
        Header,
        Sidebar,
        RightSidebar,
        Footer,
    },
    created() {
        axios.get('/api/user')
        .then(response => {
            this.user = response.data.user
            if (this.user.email_verified_at == null) {
                this.$router.push({name: 'verify'})
            }
        })
    },
}
</script>

<style>

</style>