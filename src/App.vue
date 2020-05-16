<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <div id="menu">
        <router-link to="/Shop">商品列表</router-link>
        <router-link to="/Cart">購物車</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "微軟正黑體" ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
  margin-left: -10px;
  width:100%;
}
#nav a{
  display: block;
  color: white;
  text-decoration: none;
  font-size: 24px;
  line-height: 40px;
  padding-left: 5px;
  padding-right: 5px;
}
#nav {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: black;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  width:100%;
}
#menu {
  display: flex;
  flex-direction: row;
}
.product-img-container {
  width: 200px;
  height: 200px;
}
.product-img-container img{
  width: 100%;
  height: 100%;
}
@media (max-width:550px){
  #nav a{
    font-size: 20px;
  }
  #nav #menu a {
    font-size: 16px;
  }
}
</style>
