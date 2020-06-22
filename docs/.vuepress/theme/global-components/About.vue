<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-14 12:16:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-17 20:10:58
--> 
<template>
    <div class='about-container'>
       <Header />
       <div class="left">
            <div class="white">
               <p>姓名: &nbsp;&nbsp; *檬</p>
               <p>星座: &nbsp;&nbsp; 摩羯座</p>
               <p>血型: &nbsp;&nbsp; A型</p>
               <p>所在地: &nbsp;&nbsp; 武汉</p>
            </div> 
            <div class="red">
               <p>职业: &nbsp;&nbsp; 前端工程师</p>
               <p>颜色: &nbsp;&nbsp; 黑、白</p>
               <p>口味: &nbsp;&nbsp;淮扬菜</p>
               <p>书籍: &nbsp;&nbsp; 《红楼梦》</p>
            </div> 
       </div>
       <div class="right">
            <div class="white">
               <p>Name: &nbsp;&nbsp; Cherry</p>
               <p>Constellation: &nbsp;&nbsp; Capricorn</p>
               <p>BloodType:&nbsp;&nbsp;  A</p>
               <p>Location: &nbsp;&nbsp; WuHan</p>
            </div> 
            <div class="red">
               <p>Professional:&nbsp;&nbsp; Front End Engineer</p>
               <p>Color:&nbsp;&nbsp;  black、white</p>
               <p>Taste: &nbsp;&nbsp; Huaiyang cuisine</p>
               <p>Books: &nbsp;&nbsp; 《A Dream of Red Mansions》</p>
            </div> 
       </div>
    </div>
</template>

<script>
export default {
    name:'About',
    data() {
        return {

        };
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    };
</script>

<style scoped lang="stylus">
.about-container {
    width 100%
    height 100vh
    min-width: 80%
    background url('../../public/img/about.jpg') no-repeat center center 
    background-size 100% 100%
    position relative
    .left {
        position absolute
        top 445px
        left 26%
    }
    .right {
        position absolute
        top 445px
        right 18% 
    }
    .white {
        color:#fff;
        
    }
    .red {
        color:#D2527F
    }
}

</style>
