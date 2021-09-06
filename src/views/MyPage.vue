<template>
  <h2>id：{{ $route.params.id }}</h2>
  <h2>setup裡的id：{{ id }}</h2>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { ref, watch } from "vue";
export default {
  name: "MyPage",
  setup() {
    const route = useRoute();
    const id = ref();
    watch(
      () => route.params.id,
      (newId) => {
        id.value = newId;
      },
      { immediate: true }
    );

    onBeforeRouteLeave((to, from) => {
      //   const check = window.confirm(
      //     "確定要離開" + from.fullPath + "到" + to.fullPath + "嗎?"
      //   );
      const check = window.confirm(
        `確定要從${from.fullPath}到${to.fullPath}嗎?`
      );

      if (!check) return false;
    });

    return { id };
  },
};
</script>

<style>
</style>
