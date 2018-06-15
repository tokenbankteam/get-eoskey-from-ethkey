<template>
  <div id="app">
    <img class="logo" src="./assets/logo.jpg">
    <ul class="lang">
      <li><a href="/?locale=zh-CN#/">中文</a></li>
      <li><a href="/?locale=en#/">English</a></li>
    </ul>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.lang {
    width: 100%;
    list-style: none;
    text-align: right;
    max-width: 600px;
    margin: 0 auto;
    position: absolute;
    left: 0;
    padding: 0;
    right: 0;
    top: 10px;
}
.lang a {
    color: #c2c2c2;
    text-decoration: none;
    margin: 2px 15px;
    display: inline-block;
}

img.logo {
  width: 100%;
  max-width: 600px;
}
</style>
