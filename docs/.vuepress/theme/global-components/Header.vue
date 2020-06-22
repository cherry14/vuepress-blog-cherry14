<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-01 14:48:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 16:32:15
--> 
<template>
    <div class='navbar-container'>
        <logo /> 
        <div class="right">
           <NavMenu />
           <NavSearch />
        </div>
    </div>
</template>

<script>
import Logo from './../components/Logo'
import NavMenu from './../components/NavMenu'
import NavSearch from './../components/NavSearch'
export default {
    name:'Navbar',
    components:{
      Logo,
      NavMenu,
      NavSearch
    },
    data() {
        return {

        };
    },
 };
</script>

<style scoped lang="stylus">
.navbar-container {
    display flex
    justify-content space-between
    position fixed
    top 0
    left 0
    width 100%
    height 60px
    background-color #fff
    box-shadow 3px 3px 3px #ccc
    line-height 60px
    z-index:999
    .right{
        display flex
        justify-content start
    }
    
}

</style>
