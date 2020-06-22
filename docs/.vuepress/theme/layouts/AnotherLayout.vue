<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-04 19:28:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 14:49:59
--> 
<template>
  <div class="AnotherLayout-container">
    <div v-if="path == 1">
      <Blog />
    </div>
    <div v-if="path == 2">
       <Timeline />
    </div>
    <div v-if="path == 3">
       <Friend />
    </div>
    <div v-if="path == 4">
       <About />
    </div>
 </div>
</template>
<script>
export default {
  name:'AnotherLayout',
  data(){
    return {
      
    }
  },
  computed: {
    path() {
      if (this.$page.path == '/blog.html') {
         return 1
      } else if (this.$page.path == '/timeline.html') {
        return 2
      }else if (this.$page.path == '/friend.html') {
        return 3
      }else if (this.$page.path == '/about.html') {
        return 4
      }
      
    }
  },
  mounted() {
    
  }
}
</script>