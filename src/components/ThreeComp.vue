<template>
  <hr />
  <h3>這是孫子組件</h3>
  {{ chtitle }}
  <input type="text" v-model="chtitle" />
  <br />
  {{ name }}，{{ age }}
  <br />
  {{ charr[0] }}=={{ charr[1] }}=={{ charr[2] }}
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ThreeComp",
  setup() {
    const chtitle = inject("title");
    const chobj = inject("obj");
    const charr = inject("arr");
    return { chtitle, ...toRefs(chobj), charr };
  },
};
</script>

<style>
</style>
