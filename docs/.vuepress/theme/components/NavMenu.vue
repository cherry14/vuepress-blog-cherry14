<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-09 17:39:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 16:52:54
--> 
<template>
  <div class="navMenu-container">
    <ul>
      <li class="menu-text"  v-for="(item, index) in navList" :class="{'active':pathIndex == index}">
        <router-link tag="span" :to="item.link">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  computed: {
    navList() {
      return this.$themeConfig.nav;
    },
    pathIndex() {
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
  }
};
</script>

<style scoped lang="stylus">
.navMenu-container {
  ul {
    display: flex;
    justify-content: flex-start;
    line-height: 30px;

    .menu-text {
      display: block;
      color: #333;
      font-size: 17px;
      margin: 0 8px;
      cursor: pointer;
    }
    .active {
      color: #D2527F; 
    }

    .menu-text:hover {
      color: #D2527F;
    }
  }
}
</style>

