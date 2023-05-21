<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import $ from 'jquery'

export default{
  components: {
    NavBar
  },
  setup() {
    $.ajax({
      url: "http://127.0.0.1:3000/user/account/token/",
      type: "post",
      data: {
        username: "b",
        password: "yb",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    })

    $.ajax({
      url: "http://127.0.0.1:3000/user/account/info/",
      type: "get",
      headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzOWNiMzZjNDFhZTQ0NDU4ODY1MzcyYzVmMjExODA4YiIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY4MzQ2MTQxNywiZXhwIjoxNjg0NjcxMDE3fQ.tt9WRU-SsIw1I527emv44RKkWQqpUouexY16IOCkHBg",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    })

    $.ajax({
      url: "http://127.0.0.1:3000/user/account/register/",
      type: "post",
      data: {
        username: "d",
        password: "yd",
        confirmedPassword: "yd",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    })

  }
}
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
