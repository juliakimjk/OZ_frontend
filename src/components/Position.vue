<template>
  <b-container>
    <h2>ГДЕ НАС НАЙТИ</h2>
    <div class="line"></div>
    <p class="title">Ярмарка проектов ФГН НИУ ВШЭ</p>
    <a to="https://pf.hse.ru/350549703.html" class="site"
      >https://pf.hse.ru/350549703.html</a
    >
    <p class="title">Страница проекта</p>
    <a to="https://pf.hse.ru/350549703.html" class="site"
      >https://hum.hse.ru/digital/archive_otzapiski/team</a
    >
  </b-container>
</template>

<script>
export default {
  name: "Position",
};
</script>

<style scoped>
.title {
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 5px;
}
.site {
  font-size: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.site:hover {
  color: rgb(136, 136, 136);
}
.line {
  margin-top: 20px;
  width: 30%;
  border-bottom: 1px solid black;
}
</style>