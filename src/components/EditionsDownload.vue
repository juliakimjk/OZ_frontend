<template>
  <b-card-group columns>
    <EditionDownload v-for="edition of editions" :key="edition.id" />
  </b-card-group>
</template>

<script>
import EditionDownload from "./EditionDownload";
export default {
  name: "EditionsDownload",
  components: { EditionDownload },
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
  //           (response) => (response.editions.forEach(e=>{
  //             if(e.id==${this.$route.params.id}{
  //                   this.editions=e
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
