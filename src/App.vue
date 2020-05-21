<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <v-icon name="home"></v-icon><span class="tab-name">Home</span>
      </router-link>
      <div id="menu">
        <router-link to="/Shop">
          <v-icon name="list"></v-icon><span class="tab-name">商品頁</span>
        </router-link>
        <router-link to="/Cart">
          <v-icon name="shopping-cart"></v-icon><span class="tab-name">購物車</span>
        </router-link>
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
  padding-left: 5px;
  padding-right: 5px;
  padding-top:5px;
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
  padding-top: 5px;
}
#menu {
  display: flex;
  flex-direction: row;
}
.icon{
  width:26px;
  height: 26px;
}
.tab-name{
  padding-bottom:5px;
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
