<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
    <fix-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/MainTarBar';
import FixBar from './components/FixBar'
  export default {
    components:{
      MainTabBar,
      FixBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
