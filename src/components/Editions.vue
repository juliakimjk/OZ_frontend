<template>
  <b-container>
    <Edition v-for="edition of editions" :key="edition.id" />
  </b-container>
</template>

<script>
import axios from "axios";
import Edition from "./Edition";
export default {
  name: "Editions",
  components: { Edition },
  data() {
    return {
      editions: [{}, {}],
    };
  },
  //   mounted() {
  //     try {
  //       axios
  //         .get("")
  //         .then(
  //           (response) => (this.editions = response.editions),
  //         );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
};
</script>


<style scoped>
</style>
