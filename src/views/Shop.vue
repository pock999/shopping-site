<template>
  <div class="shop">
    Shoptgreyw
    <div v-for="item in productList" :key="item.id">
      {{ item.name }}
      <div class="product-img-container">
        <img :src="getImgUrl(item.id)"/>
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
