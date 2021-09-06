<template>
  name：{{ $route.query.name }}
  <br />
  age：{{ $route.query.age }}
  <br />
  setup回傳得name：{{ user.name }}age：{{ user.age }}
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, watch } from "vue";
export default {
  name: "MyArticle",
  setup() {
    const route = useRoute();
    const user = reactive({
      name: "",
      age: "",
    });

    watch(
      () => route.query,
      (newDate) => {
        // console.log(newDate);
        user.name = newDate.name;
        user.age = newDate.age;
      },
      { immediate: true }
    );

    return { user };
  },
};
</script>

<style>
</style>
