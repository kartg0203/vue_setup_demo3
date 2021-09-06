<template>
  <hr />
  <h2>這是第二層組件</h2>
  {{ title }}
  <input type="text" v-model="title" />
  <br />
  {{ obj.name }}，{{ obj.age }}
  <br />
  {{ arr[0] }}=={{ arr[1] }}=={{ arr[2] }}
  <three-comp></three-comp>
</template>

<script>
import { inject, provide, reactive } from "vue";
import ThreeComp from "./ThreeComp.vue";
export default {
  name: "TwoComp",
  components: {
    ThreeComp,
  },
  setup() {
    const title = inject("title");
    const obj = inject("obj");

    const arr = reactive(["aaa", "bbb", "333"]);
    provide("arr", arr);
    return { title, obj, arr };
  },
};
</script>

<style>
</style>
