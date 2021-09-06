<template>
  <div class="home">
    count：{{ count }}
    <br />
    double：{{ double }}
    <br />
    <button @click="count++">count++</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
};
</script>
