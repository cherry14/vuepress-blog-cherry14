<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-12 19:49:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 09:54:51
--> 
<template>
  <div class="blogCard-container">
    <div class="content">
      <div class="card" v-for="item in 9">
        <div class="front" :style="`'background': url('../../public/img/cherry14.jpg')`">
          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
        </div>
        <div class="back">
          <div>
            <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
            <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
            <button class="button">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCard",
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
*, *:before, *:after {
  box-sizing: border-box;
}

.blogCard-container {
  .content {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;

    .card {
      color: inherit;
      cursor: pointer;
      width: calc(33% - 2rem);
      min-width: calc(33% - 2rem);
      height: 400px;
      min-height: 400px;
      perspective: 1000px;
      margin: 1rem;
      position: relative;

      .front, .back {
        display: flex;
        border-radius: 6px;
        background-position: center;
        background-size: cover;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: ease-in-out 600ms;
      }

      .front {
        background-size: cover;
        padding: 2rem;
        font-size: 1.618rem;
        font-weight: 600;
        color: #fff;
        overflow: hidden;
        font-family: Poppins, sans-serif;
      }

      .back {
        background: #fff;
        transform: rotateY(-180deg);
        padding: 0 2em;

        .button {
          transform: translateZ(40px);
          cursor: pointer;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          font-weight: bold;
          color: #fff;
          padding: 0.5em 1em;
          border-radius: 100px;
          font: inherit;
          background: linear-gradient(135deg, #1a9be6, #1a57e6);
          border: none;
          position: relative;
          transform-style: preserve-3d;
          transition: 300ms ease;
        }

        .button:before {
          transition: 300ms ease;
          position: absolute;
          display: block;
          content: '';
          transform: translateZ(-40px);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          height: calc(100% - 20px);
          width: calc(100% - 20px);
          border-radius: 100px;
          left: 10px;
          top: 16px;
          box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
          background-color: rgba(26, 87, 230, 0.25);
        }

        .button:hover {
          transform: translateZ(55px);
        }

        .button:hover:before {
          transform: translateZ(-55px);
        }

        .button:active {
          transform: translateZ(20px);
        }

        .button:active:before {
          transform: translateZ(-20px);
          top: 12px;
        }
      }

      .front:before {
        position: absolute;
        display: block;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #1a9be6, #1a57e6);
        opacity: 0.25;
        z-index: -1;
      }
    }

    .card:hover {
      &:nth-child(even):hover {
        .back {
          transform: rotateY(0deg);
        }
      }

      .front {
        transform: rotateY(180deg);

        &:nth-child(even):hover {
          transform: rotateY(-180deg);
        }
      }

      .back {
        transform: rotateY(0deg);

        &:nth-child(even):hover {
          transform: rotateY(0deg);
        }
      }
    }
  }
}
</style>
