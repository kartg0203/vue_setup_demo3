<template>
  <div>
    <h2>生命週期</h2>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "LifeHook",
  setup() {
    onMounted(() => {
      console.log("onMounted---------");
    });
  },
};
</script>

<style>
</style>
