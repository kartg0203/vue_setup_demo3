<template>
  <div>
    <h2>這是根組件</h2>
    {{ title }}
    <input type="text" v-model="title" />
    <br />
    name：{{ name }}，age：{{ age }}
    <two-comp></two-comp>
  </div>
</template>

<script>
import { provide, reactive, ref, toRefs } from "vue";
import TwoComp from "../components/TwoComp.vue";
export default {
  name: "RootApp",
  components: {
    TwoComp,
  },
  setup() {
    const title = ref("這是根組件提供的數據");
    const obj = reactive({
      name: "いきものがかり",
      age: 3,
    });
    provide("title", title);
    provide("obj", obj);

    return { title, ...toRefs(obj) };
  },
};
</script>

<style>
</style>
