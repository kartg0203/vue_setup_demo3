<template>
  <h2>這是Setup組件</h2>
  {{ test }}
  <hr />
  <sub-comp @cadd="fadd" one="father one" :two="test"
    >這是父組件傳入slot的</sub-comp
  >
</template>

<script>
import SubComp from "../components/SubComp.vue";
import { ref } from "vue";
export default {
  name: "Setup",
  components: {
    SubComp,
  },
  setup() {
    const test = ref(2);
    function fadd(num) {
      test.value *= num;
    }
    return { test, fadd };
  },
};
</script>

<style>
</style>
