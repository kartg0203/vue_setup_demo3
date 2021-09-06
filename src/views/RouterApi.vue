<template>
  <div>
    <h2>Router Api</h2>
    <div style="display: flex">
      <div id="menu">
        <ul>
          <li v-for="item in pages" :key="item.id">
            <router-link :to="'/routerapi/page/' + item.id">{{
              item.title
            }}</router-link>
          </li>
        </ul>
        <br />
        <router-link to="/routerapi/article?name=miko&age=33"
          >文章二</router-link
        >
        <br />
        <button @click="repa">文章三</button>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
export default {
  name: "RouterApi",
  setup() {
    const router = useRouter();
    const pages = reactive([
      { id: 1, title: "文章一" },
      { id: 2, title: "文章二" },
      { id: 3, title: "文章三" },
      { id: 4, title: "文章四" },
      { id: 5, title: "文章五" },
    ]);
    const repa = () => {
      router.push({
        path: "/routerapi/article",
        query: { name: "pekora", age: 24 },
      });
    };

    return { repa, pages };
  },
};
</script>

<style scoped>
#menu {
  width: 30%;
  background: #f0fff0;
  height: 300px;
}
#content {
  width: 70%;
  height: 300px;
  background: #cccccccc;
}
</style>
