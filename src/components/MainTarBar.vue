<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="red">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <img slot="item-active-icon" src="../assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="pink">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
      <img slot="item-active-icon" src="../assets/img/tabbar/category-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" active-color="white">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-active-icon" src="../assets/img/tabbar/shopcart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="darkgreen">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-active-icon" src="../assets/img/tabbar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";
  export default {
    name: "MainTarBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>