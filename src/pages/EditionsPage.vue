<template>
  <b-container>
    <h2 class="text text-center">Все выпуски</h2>
    <Editions />
  </b-container>
</template>

<script>
import Editions from "../components/Editions";
export default {
  name: "EditionsPage",
  components: { Editions },
};
</script>

<style scoped>
h2 {
  margin-top: 50px;
  font-size: 26px;
}
</style>