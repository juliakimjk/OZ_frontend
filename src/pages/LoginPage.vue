<template>
  <b-container>
    <Login class="login" />
  </b-container>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "LoginPage",
  components: { Login },
};
</script>

<style scoped>
.login {
  margin-bottom: 90px;
}
</style>
