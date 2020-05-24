<template>
  <div id="like-list" :class="{hide: isHide}">
    期望清單
    <ul>
      <li v-for="item in likeList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LikeList',
  props: ['is-hide'],
  computed: {
    likeList() {
      return this.$store.getters.like;
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scope>
  .hide {
    display: none;
  }
  #like-list {
    background-color: #000;
    color: white;
    position: absolute;
    top: 40px;
    width: 150px;
    right: 0px;
    z-index: 5;
  }
  #like-list ul{
    list-style-type: none;
    padding-left: 0px;
  }
  #like-list li{
    font-size: 15px;
    line-height: 34px;
  }
</style>
