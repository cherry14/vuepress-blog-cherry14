<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-04 11:46:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 20:19:41
--> 
<template>
  <div class="four-container">
    <img src="../../public/img/404.png" class="img" alt />
    <div class="text">
      <p>404</p>
      <p class="two" >^_^页面去月亮上玩了~</p>
    </div>
    <router-link tag="span" to="/">
       <button class="btn">Back Go Home </button>
    </router-link>
  </div>
</template>
<style lang="stylus">
.four-container {
  display flex
  padding  10% 30%
  text-align center
  min-width:1080px
 
  .img{
    margin-top 50px
  }
 .text {
     display flex
     flex-direction column
     font-size 99px
     color #666
     text-align left 
     .two {
        font-size 36px
        color #999
        margin-top -60px
     }
  }
  .btn {
    margin 340px 0 0 -529px
    width 240px
    height 30px
    border none
    box-shadow 2px 2px 2px #ccc
    outline none
  }
  .btn:hover {
    background #666
    color #999
  }
}
</style>

