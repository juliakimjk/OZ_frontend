<template>
  <b-card-group columns>
    <RedactEdition v-for="edition of editions" :key="edition.id" />
  </b-card-group>
</template>

<script>
import RedactEdition from "./RedactEdition";
export default {
  name: "Redact",
  components: { RedactEdition },
  data() {
    return {
      editions: [{}, {}, {}, {}, {}, {}],
    };
  },
  //   mounted() {
  //     try {
  //       axios
  //         .get("")
  //         .then(
  //           (response) => (this.editions = response.editions
  //})
  //   })),
  //         );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
};
</script>


<style scoped>

</style>
