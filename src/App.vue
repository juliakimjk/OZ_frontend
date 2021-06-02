<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: Montserrat;
}
a,
.link {
  text-decoration: none;
}
</style>