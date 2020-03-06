<template>
  <div id="fix-bar">
    <div class="fix-bar-item">
      <img src="../assets/img/fixbar/message.svg" alt="">
    </div>
    <div class="fix-bar-item">
      <img src="../assets/img/fixbar/user.svg" alt="">
    </div>
    <div class="fix-bar-item">
      <img src="../assets/img/fixbar/setting.svg" alt="">
    </div>
    <div class="fix-bar-item">
      <img src="../assets/img/fixbar/labor.svg" alt="">
    </div>
    <div class="fix-bar-item">
      <img src="../assets/img/fixbar/cart.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "FixBar"
  }
</script>

<style scoped>
#fix-bar{
  position: fixed;
  bottom: 70px;
  right:0;
  height: 200px;
  width: 40px;
}
  .fix-bar-item img{
    height: 25px;
    margin: 5px;
    padding: 2px;
  }
</style>