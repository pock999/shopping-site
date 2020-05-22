<template>
  <div class="cart">
    <h2><strong>您的購物車清單</strong></h2>
    <!-- only large -->
    <div id="cart-list">
      <div v-for="item in cartList" :key="item.id" class="cart-item">
        <div class="product-img-container">
          <img :src="getImgUrl(item.id)"/>
          <div class="mask">
            <div style="color:white; margin-top:80px;">點擊查看詳細資訊</div>
          </div>
        </div>
        <ul>
          <li>{{ item.name }}</li>
          <li>
            購買數量: {{ item.amount }}
          </li>
          <li style="display:flex; flex-direction: row; justify-content: start;">
            <v-icon name="plus" class="add"></v-icon>
            <v-icon name="minus" class="minus"></v-icon>
          </li>
          <li>價格: {{ item.price }}</li>
        </ul>
        <div class="subtotal">
          <div>
            <v-icon name="trash"></v-icon>
            小計:NT$ {{ item.amount*item.price }}
          </div>
        </div>
      </div>
    </div>
    <!-- only small -->
    <div id="cart-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>單價</th>
            <th>購買數量</th>
            <th>操作</th>
            <th>小計</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartList" :key="item.id" class="cart-item-row">
            <td><img :src="getImgUrl(item.id)"/></td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <v-icon name="plus" class="add"></v-icon>
              <v-icon name="minus" class="minus"></v-icon>
            </td>
            <td>{{ item.amount*item.price }}</td>
            <td><v-icon name="trash"></v-icon></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 不隨RWD隱藏 -->
    <div id="bill">
      <div id="total">
        總計:NT${{ total }}
      </div>
      <div id="function-all">
        <button id="checkout">結帳</button>
        <button id="clear-all">清空</button>
      </div>
    </div>
  </div>
</template>
<script>
import imageUrlGetter from '../tools/ImageURL';

export default {
  name: 'Cart',
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    cartList() {
      return this.$store.getters.cart;
    },
  },
  created() {
    this.caculateTotal();
  },
  methods: {
    getImgUrl(pic) {
      return imageUrlGetter(pic);
    },
    caculateTotal() {
      let s = 0;
      this.cartList.forEach((ele) => {
        s += (ele.price * ele.amount);
      });
      this.total = s;
    },
  },
};
</script>
<style scope>
  .cart{
    max-width: 960px;
    margin: 0 auto;
  }
  /* 大螢幕 */
  #cart-list {
    display: flex;
    flex-direction: column;
  }
  #cart-list .product-img-container, #cart-list{
    margin: 0 auto;
  }
  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10px;
  }
  #cart-list ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #cart-list ul li{
    text-align:left;
    font-size: 20px;
  }
  .add{
    background-color: rgb(40, 133, 219);
    border-radius: 3px 0 0 3px;
    padding: 5px;
    color: white;
  }
  .minus{
    background-color: #e26650;
    border-radius: 0 3px 3px 0;
    padding: 5px;
    color: white;
  }
  .add:hover, .minus:hover{
    cursor: pointer;
  }
  .subtotal{
    font-size: 24px;
    font-weight: bold;
    position: relative;
  }
  #cart-list .subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #cart-list .subtotal .icon{
    position: absolute;
    right: 0;
    padding: 5px;
  }
  #cart-list .subtotal .icon:hover{
    background-color: rgb(61, 76, 104);
    color: white;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }
  /* 小螢幕 */
  #cart-table{
    display: none;
    width: 100%;
  }
  #cart-table table{
    margin: 0 auto;
  }
  #cart-table tr{
    width: 100%;
  }
  #cart-table td img{
    max-width: 100px;
    max-height: 100px;
  }
  /* 底下 */
  #bill{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size:30px;
  }
  #total{
    font-weight: bolder;
    text-decoration:underline;
  }
  #function-all button{
    font-size: 26px;
    border: 0;
    border-radius: 3px;
    color: white;
    margin: 0 5px;
    font-family: '微軟正黑體', Courier, monospace;
    font-weight: bolder;
  }
  #function-all button:hover {
    cursor: pointer;
  }
  #function-all #checkout{
    background-color: #41B883;
  }
  #function-all #clear-all{
    background-color: #FFC107;
  }
  @media screen and (max-width:679px){
    #cart-list{
      display: none;
    }
    #cart-table{
      display:block;
    }
  }
</style>
