<template>
  <div id="app">
    <div id="nav">
      <router-link to="/shopping-site/" @click.native="closeLikeList" class="noFocusTab">
        <v-icon name="home"></v-icon><span class="tab-name">Home</span>
      </router-link>
      <div id="menu">
        <router-link to="/shopping-site/Shop" @click.native="closeLikeList"
        :class="focusTab('Shop')">
          <v-icon name="list"></v-icon><span class="tab-name">商品頁</span>
        </router-link>
        <router-link to="/shopping-site/Cart" @click.native="closeLikeList"
        :class="focusTab('Cart')">
          <v-icon name="shopping-cart"></v-icon>
          <span class="counter">{{ cartCount }}</span>
          <span class="tab-name">購物車</span>
        </router-link>
        <a id="like-list-btn" @click="toggleLikeList">
          <v-icon name="heart"></v-icon>
          <span class="counter">{{ likeCount }}</span>
          <LikeList :is-hide="isLikeListHide"/>
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import LikeList from './components/LikeList.vue';

export default {
  components: {
    LikeList,
  },
  computed: {
    likeCount() {
      return this.$store.getters.likeCount;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
    routerName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      isLikeListHide: true,
    };
  },
  methods: {
    toggleLikeList() {
      this.isLikeListHide = !this.isLikeListHide;
    },
    closeLikeList() {
      this.isLikeListHide = true;
    },
    focusTab(tabName) {
      let returnClass = 'noFocusTab';
      if (tabName === this.routerName) {
        returnClass = 'focusTab';
      }
      return returnClass;
    },
  },
};
</script>
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
  position: relative;
  margin-bottom: 5px;
}
.focusTab{
  border-bottom: 2px solid white;
}
.noFocusTab {
  border-bottom: 2px solid black;
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
#like-list-btn:hover{
  cursor: pointer;
}
.tab-name{
  padding-bottom:5px;
}
.counter {
  color: color;
  background-color: #ED4956;
  border-radius: 50%;
  position: absolute;
  width: 15px;
  height: 15px;
  font-size: 10px;
  top: 20px;
  left: 20px;
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
  .tab-name {
    display: none;
  }
}
</style>
