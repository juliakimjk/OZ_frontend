<template>
  <b-container>
    <h2 class="text-center">Выпуски 1850 года</h2>
    <EditionsDownload />
  </b-container>
</template>

<script>
import EditionsDownload from "../components/EditionsDownload";
export default {
  name: "EditionPage",
  components: { EditionsDownload },
};
</script>

<style scoped>
h2 {
  margin-top: 50px;
  font-size: 26px;
}
</style>