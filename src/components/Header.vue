<template>
  <b-container>
    <b-navbar toggleable="lg" type="leight" variant="leight">
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link class="link" exact to="/"> Главная </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" exact to="/editions">
              Все выпуски
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" exact to="/search"> Поиск </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" exact to="/contacts">
              Контакты
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" exact to="/login">
              Редактирование
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a,
.link {
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway;
  color: rgb(159, 159, 159);
  text-decoration: none;
}

a:hover,
.brand {
  color: black;
}

.brand {
  text-decoration: none;
  font-size: 16px;
}
</style>