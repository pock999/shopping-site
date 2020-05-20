<template>
  <div class="shop">
    <div id="product-list">
      <div v-for="item in productList" :key="item.id" class="product-item">
        <h2 class="product-name">{{ item.name }}</h2>
        <div class="product-container">
          <div class="product-img-container">
            <img :src="getImgUrl(item.id)"/>
          </div>
          <div class="product-info">
            <div>剩餘數量:{{ item.remainAmount }}</div>
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
  },
};
</script>
<style scope>
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
  .product-name{
    font-size: 24px;
    font-weight: 600;
  }
  .product-info{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width: 80%;
    margin: 0 auto;
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
</style>
