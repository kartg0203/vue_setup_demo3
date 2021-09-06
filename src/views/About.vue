<template>
  <div class="about">
    <h1>使用組合式api</h1>
    count：{{ data.count }}
    <br />
    double：{{ data.double }}
    <br />
    <button @click="add">count++</button>
    <br />
    <h3>user: {{ user.name }}, {{ user.age }}</h3>
    <h3>nameRef:{{ nameRef }}</h3>
    <button @click="changeRef">change nameRef.value</button>
    <br />
    <h3>name:{{ name }}, age: {{ age }}</h3>
    <button @click="changeRefs">change name.value & age.value</button>
  </div>
</template>

<script>
import { computed, reactive, toRef, toRefs } from "vue";
export default {
  name: "About",
  setup() {
    const data = reactive({
      count: 0,
      double: computed(() => data.count * 2),
    });

    const user = reactive({
      name: "user01",
      age: 18,
    });

    const nameRef = toRef(user, "name");
    function changeRef() {
      setTimeout(() => {
        nameRef.value = "user02";
      }, 3000);
    }

    const { name, age } = toRefs(user);
    function changeRefs() {
      setTimeout(() => {
        name.value = "user03";
        age.value = 30;
      }, 5000);
    }
    function add() {
      data.count++;
    }
    return { data, add, user, nameRef, changeRef, name, age, changeRefs };
  },
};
</script>
