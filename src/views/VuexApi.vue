<template>
  <div>
    <h2>Vuex Api useStore</h2>
    <h3>num1：{{ $store.state.num1 }}</h3>
    <h3>double：{{ $store.getters.double1 }}</h3>
    <button @click="change1">changenum1</button>
    <button @click="time1">timecnum1</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "VuexApi",
  setup() {
    const store = useStore();

    function change1() {
      store.commit("changenum1", 300);
    }
    function time1() {
      store.dispatch("timecnum1", 200);
    }
    return { change1, time1 };
  },
};
</script>

<style>
</style>
