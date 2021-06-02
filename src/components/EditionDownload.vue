<template>
  <b-card class="card rounded-0" title="Том 10">
    <b-button @click.prevent="download()" squared variant="outline-secondary">
      Скачать в TEI
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: "EditionDownload",
  props: {
    edition: Object,
  },
  methods: {
    download() {
      let requestParams = {
        method: "get",
        url: "some-url",
        responseType: "blob",
      };

      axios.request(requestParams).then((data) => {
        let filename = "filename" + Math.floor(Date.now() / 1000) + ".xlsx";
        let url = window.URL.createObjectURL(
          new Blob([data], {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          })
        );
        let link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
