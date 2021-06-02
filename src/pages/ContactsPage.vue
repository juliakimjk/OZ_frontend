<template>
  <b-container>
    <h2 class="text-center">Основатели проекта</h2>
    <Contacts />
    <Position class="position" />
  </b-container>
</template>

<script>
import Contacts from "../components/Contacts";
import Position from "../components/Position";
export default {
  name: "ContactsPage",
  components: { Contacts, Position },
};
</script>

<style scoped>
h2 {
  margin-top: 50px;
  font-size: 26px;
}
.position{
    margin-top: 300px;
}
</style>