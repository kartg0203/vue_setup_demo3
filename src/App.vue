<template>
  <div id="nav">
    <router-link to="/">原生Vue</router-link> |
    <router-link to="/about">組合式API</router-link>｜
    <router-link to="/setup">入口setup</router-link>｜
    <router-link to="/comapi">常用api</router-link>｜
    <router-link to="/computed">計算屬性</router-link>｜
    <router-link to="/watch">監聽屬性</router-link>｜
    <router-link to="/lifehook">生命週期</router-link>｜
    <router-link to="/rootapp">provide／inject</router-link>｜
    <router-link to="/routerapi">router api</router-link>｜
    <router-link to="/vuexapi">vuex api</router-link>｜
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
