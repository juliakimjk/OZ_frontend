<template>
  <b-card-group deck>
    <b-card
      border-variant="white"
      class="card"
      sub-title="Должность"
      title="Name"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text class="text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card
      class="card"
      border-variant="white"
      sub-title="Должность"
      title="Name"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text class="text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </b-card-text>
    </b-card>

    <b-card
      class="card"
      title="Name"
      sub-title="Должность"
      border-variant="white"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text class="text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </b-card-text>
    </b-card>

    <b-card
      class="card"
      title="Name"
      sub-title="Должность"
      border-variant="white"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text class="text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "Contacts",
  methods: {
    // openEdition() {
    //   router.push({ name: "EditionPage", params: { id: edition.id } });
    // },
  },
};
</script>

<style scoped>
.card {
  margin-top: 30px;
}

.text {
  font-size: 14px;
}
</style>
