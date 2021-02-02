<template>
  <div id="app">
    <oeuvre></oeuvre>
  </div>
</template>

<script>
import Oeuvre from "./components/Oeuvre.vue";
import semantic from "semantic-ui-vue";

export default {
  semantic,
  name: "App",
  components: {
    Oeuvre,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
