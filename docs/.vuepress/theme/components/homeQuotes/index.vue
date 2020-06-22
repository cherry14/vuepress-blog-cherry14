<!--
 * @Page: homeQuotes
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-18 16:03:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 20:37:57
--> 
<template>
 <div class="homeQuotes-container">
    <div class="misk">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in quoteslist" :key="index">
            <img :src="item.avatar" alt />
            <div class="content">
             <div class="text">{{item.text}}</div>
              <p class="author">{{item.author}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "homeQuotes",
  data() {
    return {
      quoteslist: [
        {
          avatar: require("./img/quo_1.jpg"),
          text: "把活着的每一天看作生命的最后一天。",
          author: "——海伦·凯勒"
        },
        {
          avatar: require("./img/quo_2.jpg"),
          text: "我们若已接受最坏的，就再没有什么损失。",
          author: "——卡耐基"
        },
        {
          avatar: require("./img/quo_3.jpg"),
          text: "人的一生是短的，但如果卑劣地过这一生，就太长了。",
          author: "——莎士比亚"
        },
        {
          avatar: require("./img/quo_4.jpg"),
          text: "不要垂头丧气，即使失去一切，明天仍在你的手里。",
          author: "——王尔德"
        },
        {
          avatar: require("./img/quo_5.jpg"),
          text: "我这个人走得很慢，但是我从不后退。",
          author: "——亚伯拉罕·林肯"
        },

        {
          avatar: require("./img/quo_6.jpg"),
          text: "我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。",
          author: "——笛卡儿"
        },
        {
          avatar: require("./img/quo_7.jpg"),
          text: "生命不等于是呼吸，生命是活动。",
          author: "——卢梭"
        },
        {
          avatar: require("./img/quo_8.jpg"),
          text: "内外相应，言行相称。",
          author: "——韩非"
        },
        {
          avatar: require("./img/quo_9.jpg"),
          text: "只有永远躺在泥坑里的人，才不会再掉进坑里。",
          author: "——黑格尔"
        },

        {
          avatar: require("./img/quo_10.jpg"),
          text: "业余生活要有意义，不要越轨。",
          author: "——华盛顿"
        },
        {
          avatar: require("./img/quo_11.jpg"),
          text: "你若要喜爱你自己的价值，你就得给世界创造价值。",
          author: "—— 歌德"
        },
        {
          avatar: require("./img/quo_12.jpg"),
          text: "人生不是一种享乐，而是一桩十分沉重的工作。",
          author: "—— 列夫·托尔斯泰"
        },
        {
          avatar: require("./img/quo_13.jpg"),
          text: " 生活真象这杯浓酒，不经三番五次的提炼呵，就不会这样可口！",
          author: " —— 郭小川"
        },
        {
          avatar: require("./img/quo_14.jpg"),
          text: "先相信你自己，然后别人才会相信你。",
          author: " —— 屠格涅夫"
        },

        {
          avatar: require("./img/quo_15.jpg"),
          text: "不戚戚于贫贱，不汲汲于富贵。",
          author: "—— 陶渊明"
        },
        {
          avatar: require("./img/quo_16.jpg"),
          text: "创造者才是真正的享受者。",
          author: "——富尔克"
        },
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      speed: 2000,
      loop: true,
      effect: 'fade',
      fadeEffect: { 
        crossFade: true, 
      } 
 
    });
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
@import '~swiper/css/swiper.min.css';

.homeQuotes-container {
  width: 100%;
  height: 100%;
  background: url('./img/timg (12).jpg') no-repeat center center;
  background-size: 100% 100%;

  .misk {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    position: relative;
   

    .swiper-container {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 0 20%;
     
    }

    img {
      position: absolute;
      top: 30%;
      left: 0;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #fff;
    }

    .content {
      position: absolute;
      top: 35%;
      left: 15%;

      .text {
        font-size: 36px;
        margin-top: 20px;
      }

      .author {
        font-size: 20px;
        text-align: right;
      }
    }
  }
}
</style>
