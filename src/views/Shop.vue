<template>
  <div class="shop">
    <h2><strong>商品列表</strong></h2>
    <div id="product-list">
      <div v-for="item in productList" :key="item.id" class="product-item">
        <h2 class="product-name">
          {{ item.name }}
          <span @click="toglleToLike(item)">
            <v-icon name="heart"
            v-if="isLikeItem(item)" style="color:#ED4956;"/>
            <v-icon name="heart" v-else></v-icon>
          </span>
        </h2>
        <div class="product-container">
          <div class="product-img-container" @dblclick="toglleToLike(item)">
            <img :src="getImgUrl(item.id)"/>
            <div class="mask">
              <v-icon name="heart" v-if="isLikeItem(item)" style="color:#ED4956;"/>
              <v-icon name="heart" v-else></v-icon>
            </div>
          </div>
          <div class="product-info">
            <div>剩餘數量:{{ item.remainAmount }}</div>
            <div>
              <v-icon name="shopping-cart"></v-icon>
            </div>
            <div>NT${{ item.price }}</div>
            <button class="btn detail-btn">查看詳細資訊</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageUrlGetter from '../tools/ImageURL';

export default {
  name: 'Shop',
  mounted() {
    this.$store.dispatch('loadShop');
  },
  computed: {
    productList() {
      return this.$store.getters.shop;
    },
  },
  methods: {
    getImgUrl(pic) {
      return imageUrlGetter(pic);
    },
    isLikeItem(item) {
      const isFind = this.$store.getters.like.find((ele) => ele.id === item.id);
      return isFind;
    },
    toglleToLike(item) {
      // 增加或剔除like list
      this.$store.dispatch('toggleLike', item);
    },
  },
};
</script>
<style scope>
  .shop{
    max-width: 960px;
    margin: 0 auto;
  }
  #product-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
  .product-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .product-img-container{
    position: relative;
  }
  .product-img-container img{
    width: 100%;
    height: 100%;
  }
  .mask{
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    position: absolute;
    top:0;
    left:0;
  }
  .mask .icon{
    display: block;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    margin-top: 60px;
    color: white;
  }
  .product-img-container:hover .mask{
    display: block;
    cursor:pointer;
  }
  .product-name{
    font-size: 24px;
    font-weight: 600;
  }
  .product-name .icon:hover {
    cursor: pointer;
  }
  .product-info{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width: 80%;
    margin: 0 auto;
  }
  .product-info .icon {
    width: 14px;
    height: 14px;
  }
  .btn{
    background-color: #268DDD;
    color: white;
    border: none;
    font-size:14px;
    font-family: '微軟正黑體', Courier, monospace;
    cursor:pointer;
  }
  .btn:hover {
    background-color: rgb(30, 102, 156);
  }
  .detail-btn{
    padding: 10px 0px;
    border-radius: 5px;
  }
  @media (max-width:960px) and (min-width:680px){
    #product-list{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width:679px){
    #product-list{
      grid-template-columns: 1fr;
    }
  }
</style>
