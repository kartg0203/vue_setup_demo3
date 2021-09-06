<template>
  <div>
    <h3>這是子組件</h3>
    父組件傳來的值：own=>{{ one }}，two=>{{ two }}
    <br />
    <button @click="two++">two++</button>
    two*2：{{ double }}
    <br />
    <slot>這是slot</slot>
    <br />
    <button @click="cadd">使用context.emit觸發事件修改父組件</button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  name: "SubComp",
  props: {
    one: String,
    two: Number,
  },
  setup(props, { emit }) {
    // console.log("subcomp-----------");
    const double = computed(() => props.two * 2);

    // console.log(context.slots.default()[0]);
    function cadd() {
      emit("cadd", 3);
    }
    return { double, cadd };
  },
};
</script>

<style>
</style>
