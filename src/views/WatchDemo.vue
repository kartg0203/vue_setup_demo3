<template>
  <div>
    <h2>監聽器 watch()</h2>
    <button @click="a++">a={{ a }}</button>
    <button @click="b--">b={{ b }}</button>
  </div>
</template>

<script>
import { reactive, ref, watch, toRefs } from "vue";
export default {
  name: "WatchDemo",
  setup() {
    const user = reactive({
      a: 1,
      b: 2,
    });
    watch(
      [() => user.a, () => user.b],
      ([newA, newB], [oldA, oldB]) => {
        console.log(newA + "===A===" + oldA);
        console.log(newB + "===B===" + oldB);
      },
      { immediate: true }
    );
    // watch(
    //   () => user.a,
    //   (newA, oldA) => {
    //     console.log(newA + "=====A=====" + oldA);
    //   }
    // );
    // watch(
    //   user,
    //   () => {
    //     console.log("========");
    //   },
    //   { immediate: true }
    // );
    // watch(() => {
    //   console.log(user.a + "============" + user.b);
    // });
    return { ...toRefs(user) };
  },
  //   setup() {
  //     const a = ref(1);
  //     const b = ref(2);

  //     // watch(() => {
  //     //   console.log(a.value + "============" + b.value);
  //     // });

  //     watch(
  //       [a, b],
  //       ([newA, newB], [oldA, oldB]) => {
  //         console.log(newA + "====A====" + oldA);
  //         console.log(newB + "====B====" + oldB);
  //       },
  //       { immediate: true }
  //     );
  //     return { a, b };
  //   },
};
</script>

<style>
</style>
