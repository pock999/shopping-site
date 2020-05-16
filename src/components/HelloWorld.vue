<template>
  <div class="hello">
    <div v-for="item in productList" :key="item.id" style="width:200px; height:200px;">
      {{ item.name }}
      <img :src="getImgUrl(item.id)"/>
    </div>
  </div>
</template>

<script>
import Service from '../service/ApiService';
import imageUrlGetter from '../tools/ImageURL';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.loadAllProduct();
  },
  methods: {
    loadAllProduct() {
      Service.allProducts()
        .then((products) => {
          this.productList = products;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getImgUrl(pic) {
      return imageUrlGetter(pic);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
