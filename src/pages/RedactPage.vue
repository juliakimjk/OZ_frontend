<template>
  <div class="cont">
    <b-container>
      <h2 class="text text-center">Доступные для редактирования выпуски</h2>
      <Redact class="redact" />
    </b-container>
  </div>
</template>

<script>
import Redact from "../components/Redact";
export default {
  name: "RedactPage",
  components: { Redact },
};
</script>

<style scoped>
h2 {
    padding-top: 100px;
  margin-top: 50px;
  font-size: 26px;
  color: white;
}
.cont {
  background-image: url("../assets/img/bi.jpg");
  background-repeat: no-repeat;
}
</style>
