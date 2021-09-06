<template>
  <div>
    <h1>常用API的應用</h1>
    原生的：num：{{ num }}
    <button @click="myfun">console.log</button>
    <hr />
    ref的變量：{{ num2 }}
    <button @click="myfun2(30)">ref++</button>
    <br />
    reactive的對象：{{ name }}，{{ age }}，{{ sex }}
    <br />
    obj.name<input type="text" v-model="name" />

    obj.age<input type="number" v-model="age" />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "ComApi",
  setup() {
    const num = 1;
    const num2 = ref(2);
    const myfun = () => {
      console.log("原生的");
    };
    const myfun2 = (num) => {
      num2.value += num;
    };

    const obj = reactive({
      name: "おかゆ",
      age: 24,
      sex: "女",
    });
    return { num, myfun, num2, myfun2, ...toRefs(obj) };
  },
};
</script>

<style>
</style>
