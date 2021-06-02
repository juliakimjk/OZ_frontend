<template>
  <b-card class="wrapper__image">
    <b-container>
      <h2 class="text text-center">Отечественные записки</h2>
      <b-row class="justify-content-center">
        <b-button squared class="button"> 18XX - 18XX </b-button>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "MainImage",
};
</script>


<style scoped>
.wrapper__image {
  background: url("../assets/img/bi.jpg");
  background-size: cover;
}
.text {
  margin-top: 20%;
  font-size: 3.5vw;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
}
.button {
  margin-bottom: 100px;
  background-color: Transparent;
  margin-top: 10px;
}
.button:hover {
  background-color: white;
  color: black;
}

@media (min-width: 2560px) {
  .wrapper__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .text {
    margin-top: 40%;
  }
}
</style>
