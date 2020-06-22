<!--
 * @Page: 友人帐
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-04-29 15:49:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-17 20:33:39
 -->
<template>
  <div class="friend-container">
      <Header />
      <div class="box">
            <div
      v-for="(item,index) in data"
      :key="index"
      @mouseenter="enterFriendBox(index)"
      @mouseleave="leaveFriendBox(index)"
      @click="toLinkBlog(item)"
      class="friend-box"
    >
      <div class="content">
        <div :class="`name-desc_${index}`">
          <p class="name">{{item.name}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
        <div :class="`animate_${index}`" class="misk">
          <div class="link-box">
              <p>
                  {{item.link}} 
              </p>
            <!-- <a :href="item.link" target="_blank"></a> -->
          </div>
        </div>
      </div>
      <img :src="item.avator" alt class="avtor" :class="`animate2_${index}`" />
    </div>
      </div>
    </div>
  
      
    </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "",
  data() {
    return {
      data: [
        {
          name: "artiely",
          avator: require("../../public/img/cherry14.jpg"),
          desc: "fer",
          link: "https://artiely.gitee.io/"
        },
        {
          name: "tommy",
          avator: require("../../public/img/cherry14.jpg"),
          desc: "gvrtgw",
          link: "https://tommymarc.gitee.io/tommyblog/"
        },
          {
          name: "tommy",
          avator: require("../../public/img/cherry14.jpg"),
          desc: "gvrtgw",
          link: "https://tommymarc.gitee.io/tommyblog/"
        }
      ]
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    enterFriendBox(index) {
      this.createAnime(`.animate_${index}`, { top: 0, opacity: 0.2 }, false);
      this.createAnime(`.animate2_${index}`, { rotateY: "720deg" }, false);
      this.createAnime(`.link-box`, { opacity: 1, delay: 200 }, false);
      this.createAnime(
        `.name-desc_${index}`,
        { opacity: 0.1, delay: 100 },
        false
      );
    },
    leaveFriendBox(index) {
      anime.remove(`.animate_${index}`);
      anime.remove(`.animate2_${index}`);
      anime.remove(`.lineOne`);
      anime.remove(`.lineTwo`);
      anime.remove(`.lineThree`);
      anime.remove(`.lineFour`);
      anime.remove(`.link-box`);
      anime.remove(`.name-desc_${index}`);
      this.createAnime(`.animate_${index}`, { top: 80, opacity: 0 }, false);
      this.createAnime(`.animate2_${index}`, { rotateY: "-720deg" }, false);
      this.createAnime(`.link-box`, { opacity: 0, delay: 300 }, false);
      this.createAnime(
        `.name-desc_${index}`,
        { opacity: 1, delay: 300 },
        false
      );
    },
    toLinkBlog(item){
      window.open(`${item.link}`,'_blank')
    // console.log(this.$route)
    },
    //封装anime
    createAnime(targets, obj, isLoop = true) {
      let param = {
        targets: targets,
        loop: isLoop,
        direction: "alternate",
        easing: "easeInOutCirc"
      };
      anime({ ...param, ...obj });
    }
  }
};
</script>

<style scoped lang="stylus">
[v-clock] {
  display: none;
}

.friend-container {
  width: 100%;
  height 100vh
  display: flex;
  flex-wrap: wrap;
  background:url('../../public/img/wallhaven-r7wd27.jpg') no-repeat center center;
  background-size: 100% 100%;
  .box {
      width: 100%;
      background: rgba(3, 3, 3, .5)
      padding 10% 40% 10% 10%
      display flex
      justify-content space-between
      flex-wrap wrap
  }

   
   .friend-box {
    width: 39%;
    margin: 5%;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    box-shadow: 5px 5px 5px #000;
  

    .content {
      position: relative;
      width: 100%;
      height: 100%;
    //   padding 0 20px
      overflow: hidden;
    }
  }
  .friend-box:hover {
     .misk {
        .link-box::before,
        .link-box::after {
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1)
        }
     } 
  }

  .avtor {
    position: absolute;
    top: 80px;
    left: 40%;
    width: 80px;
    height: 80px;
    // background-color: pink;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #999;
  }
   .name{
     font-size:20px;
     font-weight:700;
     color:#D2527F;
     margin-left 20px
    }
    .desc{
      font-size:14px; 
      color:#ccc; 
      margin-left 20px
    }

  .misk {
    position: absolute;
    background-color: #D2527F;
    // background-color: #000;
    opacity: 0;
    top: 80px;
    left: 0px;
    width: 100%;
    height: 100%;

    .link-box {
      width: 92%;
      height: 50%;
      padding:30px 5px;
      opacity: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &::before {
        position: absolute;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.4s, -webkit-transform .4s;
        -moz-transition: opacity 0.4s, -moz-transform .4s;
        -o-transition: opacity 0.4s, -o-transform .4s;
        transition: opacity 0.4s, transform .4s
        top: 14%;
        right: 5%;
        bottom: 14%;
        left: 5%;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: scale(0, 1);
        -moz-transform: scale(0, 1);
        -o-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0  ;
      }
      &::after {
        position: absolute;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.4s, -webkit-transform .4s;
        -moz-transition: opacity 0.4s, -moz-transform .4s;
        -o-transition: opacity 0.4s, -o-transform .4s;
        transition: opacity 0.4s, transform .4s
        top: 8%;
        right: 10%;
        bottom: 8%;
        left: 10%;
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
        -webkit-transform: scale(1, 0);
        -moz-transform: scale(1, 0);
        -o-transform: scale(1, 0);
        transform: scale(1, 0);
        -webkit-transform-origin: 100% 0;
        -moz-transform-origin: 100% 0;
        -o-transform-origin: 100% 0;
        transform-origin: 100% 0 
      }
      p {
        color: #fff;
        margin: 15px 40px;
        // word-wrap:break-word;
      }
    }
   

    .name-desc {
      padding: 10px;
      opacity: 1;
    }

    .lineOne {
      position: absolute;
      top: 20px;
      left: 90px;
      width: 160px;
      height: 1px;
      background-color: #fff;
    }

    .lineTwo {
      position: absolute;
      top: 30px;
      left: 50px;
      width: 1px;
      height: 40px;
      background-color: #fff;
    }

    .lineThree {
      position: absolute;
      top: 80px;
      left: 90px;
      width: 160px;
      height: 1px;
      background-color: #fff;
    }

    .lineFour {
      position: absolute;
      top: 30px;
      right: 50px;
      width: 1px;
      height: 40px;
      background-color: #fff;
    }
  }
}
</style>
