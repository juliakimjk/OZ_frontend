<template>
  <b-container>
    <b-card class="card">
      <h3 class="title">ОТЕЧЕСТВЕННЫЕ ЗАПИСКИ - КРУТОЙ ЖУРНАЛ</h3>
      <b-card-text class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        faucibus ex nec ultricies. Donec mattis egestas nisi non pretium.
        Suspendisse nec eros ut erat facilisis maximus. In congue et leo in
        varius. Vestibulum sit amet felis ornare, commodo orci ut, feugiat
        lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non
        pretium. Suspendisse nec eros ut erat facilisis maximus. In congue et
        leo in varius. Vestibulum sit amet felis ornare, commodo orci ut,
        feugiat lorem.
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
.card {
  margin-top: 80px;
  border: none;
  width: 60%;
  margin-bottom: 150px;
}
.title {
  font-size: 16px;
}
.text {
  margin-top: 30px;
  font-size: 12px;
}
@media (max-width: 768px) {
  .card {
    margin-top: 30px;
    width: 100%;
  }
}
</style>