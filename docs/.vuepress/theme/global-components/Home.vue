<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-10 20:08:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-19 16:51:10
--> 
<template>
  <div class="home-container">
    <div class="nav" :class="navAnime ? 'nav-anime' : 'nav-anime-to'">
      <div class="nav-left">
        Cherry14
        <img
          src="../../public/img/love.png"
          class="love"
          style="width:14px;height:14px;"
          alt
        />
      </div>
      <div class="nav-right">
        <ul class="menu-ul">
          <li class="menu-text" v-for="(item, index) in navList">
            <router-link tag="span" :to="item.link">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content" id="content" @mousewheel="contentSroll($event)">
      <div class="content-one" @mousemove="contentonemove($event)">
        <div class="content-one-text">
          <h1>WELCOME TO CHERRY14</h1>
          <p>Always trust your instincts or feelings</p>
        </div>
        <div class="content-one-btn" @click.stop="clickMore">
          <span class="arrow">></span>
          <button>more</button>
        </div>
      </div>
      <div class="content-two">
        <!-- 首页卡片 -->
        <div class="content-two-top">
           <homeCard />
        </div>
        <!-- 名人名言 -->
        <div class="content-two-mid">
           <homeQuotes />
        </div>
        <!-- 留言板 -->
        <div class="content-two-bot">
           <MessageBoard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeCard from './../components/homeCard' 
import homeQuotes from './../components/homeQuotes'   
import MessageBoard from './../components/MessageBoard' 
import anime from "animejs";
export default {
  name: "home",
  components: {
    homeCard,
    homeQuotes,
    MessageBoard
  },
  data() {
    return {
      navAnime: null
    };
  },
  computed: {
    navList() {
       return this.$themeConfig.nav
    }
  },
  methods: {
    contentSroll(el) {
      let scroTop = document.getElementById("content").scrollTop;
      if (scroTop > 1600) {
        this.navAnime = true;
      } else {
        this.navAnime = false;
      }
    },
    contentonemove(el) {
      let px = -el.movementX;
      let py = -el.movementY;
      anime({
        targets: ".content-one-text",
        translateX: px,
        translateY: py,
        round: false,
        loop: false
      });
    },
    clickMore() {
      anime({
        targets: ".content",
        scrollTop: 1700,
        duration: 6000
      });
      document
        .getElementById("content")
        .addEventListener("scroll", this.contentSroll);
    }
  }
};
</script>

<style scoped lang="stylus">
.home-container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('../../public/img/home.png') no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  overflow: hidden;

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: transparent;
    height: 80px;
    z-index: 9999;
    color: #fff;
    display: flex;
    font-weight: 700;
    font-size: 20px;
    justify-content: space-around;

    .nav-left {
      margin: 50px 0 0 -50px;
      font-size: 32px;
      font-style: italic;
      font-weight: 900;

      .love {
        margin: 10px;
      }
    }

    .nav-right {
      z-index: 9999;

      ul {
        display: flex;
        justify-content: flex-start;
        line-height: 100px;

        .menu-text {
          margin: 0 20px;
          cursor: pointer;
        }

        .menu-text:hover {
          color: #D2527F;
        }
      }
    }
  }

  .nav-anime {
    animation: navanime 1s ease-in;
    animation-fill-mode: forwards;

    .nav-left {
      margin: 10px 0 0 -50px;
    }

    .nav-right {
      ul {
        line-height: 30px;
      }
    }
  }

  @keyframes navanime {
    from {
      opacity: 0;
      background: transparent;
      height: 100px;
    }

    to {
      opacity: 1;
      background: #000;
      height: 60px;
    }
  }

  .nav-anime-to {
    animation: navanimeto 1s ease-in;
    animation-fill-mode: forwards;

    .nav-left {
      margin: 50px 0 0 -50px;

      .love {
      }
    }

    .nav-right {
      ul {
        line-height: 100px;
      }
    }
  }

  @keyframes navanimeto {
    from {
      opacity: 0;
      background: transparent;
      height: 60px;
    }

    to {
      opacity: 1;
      background: transparent;
      height: 100px;
    }
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 9;
    background: transparent;

    .content-one {
      width: 100%;
      height: 100%;
      background: transparent;
      text-align: center;
      color: #fff;
      font-size: 36px;
      padding: 300px 0;
      text-shadow: 5px 5px 5px #000;

      .content-one-text {
        width: 80%;
        height: 60%;
        padding-left: 150px;

        h1 {
          font-size: 43px;
        }

        p {
          font-family: Serif;
        }
      }

      .content-one-btn {
        margin: 0 auto;
        width: 80px;
        display: flex;
        flex-direction: column;

        .arrow {
          transform: rotate(90deg);
          font-size: 26px;
          font-weight: 400;
          text-shadow: none;
        }

        button {
          border: none;
          outline: none;
          background-color: transparent;
          color: #fff;
          font-size: 26px;
          text-shadow: 2px 2px 2px #000;
        }
      }

      .content-one-btn:hover {
        color: #999;

        button {
          color: #999;
        }
      }
    }

    /* 白色框样式 */
    .content-two {
      width: 100%;
      height: 6000px;
      background: #fff;

      .content-two-top {
        width: 100%;
        background-color: #fff;
        padding 100px 0
      }

      .content-two-mid {
        width: 100%;
        height 600px
      }

      .content-two-bot {
        width: 100%;
        height: 120px;
        background-color: #fff;
        text-align center
      }
    }
  }

  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #000;
  }

  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #fff;
  }
}
</style>
