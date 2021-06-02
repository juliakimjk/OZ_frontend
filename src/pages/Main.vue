<template>
  <div>
    <MainImage></MainImage>
    <Info></Info>
  </div>
</template>

<script>
import Info from "../components/Info";
import MainImage from '../components/MainImage'
export default {
  name: "Main",
  components: { Info, MainImage },
};
</script>
