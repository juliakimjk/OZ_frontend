<template>
  <div class="error-indicator">
    <span class="boom">404</span>
    <span>страница не найдена</span>
    <router-link
      style="margin-top: 100px; margin-bottom: 500px"
      :to="{ path: '/' }"
      >Вернуться на главную</router-link
    >
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
};
</script>
<style scoped>
.error-indicator,
a {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  text-decoration: none;
}
a:hover {
  color: #7a7a7a;
}
.error-indicator .boom {
  margin-top: 150px;
  font-size: 1.7rem;
}
</style>