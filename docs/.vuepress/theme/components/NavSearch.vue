<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-09 17:46:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-10 11:11:07
--> 
<template>
    <div class='navSearch-container'>
       <input class="s-input" autofocus="autofocus" v-model="searchKey" placeholder="搜 索" />
    </div>
</template>

<script>
export default {
    name:'NavSearch',
    data() {
      return {
        searchKey: ""
      };
    },
   };
</script>

<style scoped lang="stylus">
.navSearch-container {
  margin 0 50px 0 20px
  .s-input {
    outline none
    width 200px
    height 30px
    border 1px solid #ccc
    border-radius 18px
    padding 0 30px
    background url('../../public/img/cherry14.jpg') no-repeat center left;
    background-size 24px 14px;
    background-color #fff;
    background-position 5px 7px
  }
}

</style>
