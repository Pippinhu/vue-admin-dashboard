<template>
  <div id="app">  
    <router-view />
  </div>
</template>

<style lang="scss">

body{
  background:red;
  }

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  background-color:red
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white
;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>