<template>
  <div>
    <h2>計算屬性</h2>
    FirstName：<input type="text" v-model="FirstName" />
    <br />
    LastName：<input type="text" v-model="LastName" />
    <br />
    {{ FirstName + "." + LastName }} ==== {{ fullname }}
    <br />
    <input type="number" v-model="age" />
    age：{{ age }}，{{ show }}
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
export default {
  name: "ComputedDemo",
  setup() {
    const user = reactive({
      FirstName: "moona",
      LastName: "hoshinova",
      age: 20,
    });

    const fullname = computed(() => user.FirstName + "." + user.LastName);

    const show = computed(() => {
      if (user.age < 20) return "還很年輕";
      else if (user.age < 40) return "青年了";
      else return "不行了";
    });

    return { ...toRefs(user), fullname, show };
  },
};
</script>

<style>
</style>
