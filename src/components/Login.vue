<template>
  <div class="text-center">
    <h2>АВТОРИЗАЦИЯ</h2>
    <hr class="line" />
    <h3>ВВЕДИТЕ ДАННЫЕ, ПОЛУЧЕННЫЕ ПРИ РЕГИСТРАЦИИ НА ПРОЕКТ</h3>
    <b-form @submit="onSubmit()">
      <b-container>
        <b-row class="d-flex justify-content-center">
          <b-form-input
            class="input rounded-0"
            v-model="name"
            placeholder="NAME"
            required
          ></b-form-input>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-form-input
            required
            class="input rounded-0"
            v-model="email"
            placeholder="EMAIL"
          ></b-form-input>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-button
            class="button"
            squared
            variant="outline-secondary"
            type="submit"
          >
            ВОЙТИ
          </b-button>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    async onSubmit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      this.$router.push("redact");

      // try {
      //   let res = await axios.post("", formData, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   if (res.status == "OK") {
      //   } else {
      //     this.$bvToast.toast("Неверно введены данные", {
      //       title: `Ошибка`,
      //       variant: 'danger',
      //       solid: true,
      //     });
      //   }
      // } catch (err) {
      //   console.log(err);
      // }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 50px;
  font-size: 26px;
}
h3 {
  margin-top: 10px;
  font-size: 12px;
}

.line {
  margin-top: 20px;
  width: 10%;
  border-bottom: 1px solid black;
}

.input {
  margin-top: 10px;
  width: 40%;
}

.button {
  margin-top: 20px;
}
</style>