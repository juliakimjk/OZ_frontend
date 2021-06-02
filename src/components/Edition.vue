<template>
  <b-card
    class="card rounded-0"
    @click.prevent="openEdition()"
    title="1852"
    sub-title="Card subtitle"
  >
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up
      the bulk of the card's content.
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Edition",
  props: {
    edition: Object,
  },
  methods: {
    openEdition() {
      router.push({ name: "EditionPage", params: { id: edition.id } });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 30px;
  cursor: pointer;
}
</style>
