<template>
  <div class="shop">
    Shoptgreyw
    <div id="product-list">
      <div v-for="item in productList" :key="item.id" class="product-item">
        {{ item.name }}
        <div class="product-img-container">
          <img :src="getImgUrl(item.id)"/>
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
</style>
