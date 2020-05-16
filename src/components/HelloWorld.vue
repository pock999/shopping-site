<template>
  <div class="hello">
    <div v-for="item in productList" :key="item.id" style="width:200px; height:200px;">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import Service from '../service/ApiService';

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
  created() {
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
