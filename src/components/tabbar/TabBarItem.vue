<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        // isActive:true,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor: {
        type:String,
        default:'#409EFF'
      }
    },
    methods:{
      ItemClick(){
        return this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }

  .tab-bar-item img {
    height: 24px;
  }

  .active {
    color: #409EFF;
  }
</style>