<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-14 12:15:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 19:19:02
--> 
<template>
  <div class="Blog-container">
      <Header />
      <blogCard />
  </div>
</template>

<script>
import blogCard from './../components/blogCard'
export default {
  name: "Blog",
  components: {
     blogCard
  },
  data() {
    return {};
  },

  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.Blog-container {
 padding 150px
}
</style>
