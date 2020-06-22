<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-14 19:22:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-15 19:35:57
--> 
<template>
  <div class="homeCard-container">
       <button @click="filt = 'all'">All</button>
      <button @click="filt = 'red'">Red</button>
      <button @click="filt = 'blue'">Blue</button>
      <button @click="filt = 'green'">Green</button>
      <button @click="shuffle">Shuffle</button>
        <hr />
    <div id="colored">
       <transition-group name="list-complete" tag="div">
        <div
          v-for="item in filteredItems"
          v-bind:key="item.id"
          class="list-complete-item block"
          :class="item.color"
        >
        <div class="box">
					<img src="../../public/img/two22.jpg" alt="">
					<div class="box-content">
						<div class="title-box">
							<span class="post">Web developer</span>
							<h3 class="title">Steve Thomas</h3>
						</div>
						<div class="content" style="color:#fff">
							 dhjekkhfheH
							 dhjekkhfheH
							 dhjekkhfheH
							 dhjekkhfheH
							 dhjekkhfheH
							 dhjekkhfheH
						</div>
						<ul class="icon">
							<li><a href="#"><i class="fa fa-search"></i></a></li>
							<li><a href="#"><i class="fa fa-link"></i></a></li>
						</ul>
					</div>
				</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeCard",
  data() {
    return {
          title: 'Colored filter',
        items: [
            {
                id: 1,
                color: 'red'
            },
            {
                id: 2,
                color: 'red'
            },
            {
                id: 3,
                color: 'red'
            },
            {
                id: 4,
                color: 'blue'
            },
            {
                id: 5,
                color: 'blue'
            },
            {
                id: 6,
                color: 'blue'
            },
            {
                id: 7,
                color: 'green'
            },
            {
                id: 8,
                color: 'green'
            },
            {
                id: 9,
                color: 'green'
            }
        ],
        filt: 'all'
    };
  },
   computed: {
        filteredItems: function () {
            console.log('filtered');
            var result;

            if  (this.filt != 'all'){
                var filt = this.filt
                result = this.items.filter(function (a) {
                    return a.color == filt
                });

            } else {
                result =  this.items;
            }

            return result;
        }
    },
  mounted() {
  
  },
  methods: {
       shuffle: function () {
            var currentIndex = this.items.length, temporaryValue, randomIndex;

            // Тут ф-ция рэндома 
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = this.items[currentIndex];
                this.items[currentIndex] = this.items[randomIndex];
                this.items[randomIndex] = temporaryValue;
            }

            this.items = this.items.reverse();
        }
  }
};
</script>

<style scoped lang="stylus">
.homeCard-container {
    width: 100%;
    text-align center
   
   #colored {
     width: 70%;
     margin 0 auto
    .block {
        width: 30%;
        margin: 1%;
        background: #ccc;
        img {
        width 100%
        height 100%
        }
     }
     .box{
	font-family: 'Niramit', sans-serif;
	text-align: center;
	position: relative;
	overflow: hidden;
}
.box:before,
.box:after,
.box-content:before,
.box-content:after{
	content: '';
	background: linear-gradient(transparent,rgba(0,0,0,0.9));
	height: 100%;
	width: 25%;
	transform: translateY(-100%);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	transition: all 0.3s;
}
.box:hover:before,
.box:hover:after,
.box:hover .box-content:before,
.box:hover .box-content:after{
	transform: translateY(0);
}
.box:after{ left: 25%; }
.box .box-content:before{ left: 50%; }
.box .box-content:after{ left: 75%; }
.box:hover:before{ transition-delay: 0.225s; }
.box:hover:after{ transition-delay: 0.075s; }
.box:hover .box-content:before{ transition-delay: 0.15s; }
.box:hover .box-content:after{ transition-delay: 0s; }
.box img{
	width: 100%;
	height: auto;
	transition: all 0.3s ease 0s;
}
.box:hover img{ filter: grayscale(100%); }
.box .box-content{
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	transition: all 0.2s;
}
.content{
	width: 100%;
	padding: 7px 0;
	opacity: 0;
	position: absolute;
	left: 0;
	bottom: -30px;
	z-index: 2;
	transition: all 0.3s ease 0.1s;
}
.box:hover .title-box{
	opacity: 0.5;
}
.box:hover .content{
	opacity: 1;
	bottom: 5px;
}
.box .title{
	color:red;
	font-size: 25px;
	font-weight: 500;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin: 0;
}
.box .post{
	color: var(--main-color);
	font-size: 16px;
	font-style: italic;
	text-transform: capitalize;
	letter-spacing: 1px;
	margin-bottom: 10px;
	display: block;
}
.box .icon{
	padding: 0;
	margin: 0;
	list-style: none;
	transform: translateX(-50%);
	position: absolute;
	top: 15px;
	right: -10px;
	z-index: 2;
	transition: all 0.5s ease 0.3s;
}
.box .icon li{
	opacity: 0;
	transform: scale(0) rotate(360deg);
	transition: all 400ms;
}
.box:hover .icon li{
	opacity: 1;
	transform: scale(1) rotate(0);
}
.box .icon li a{
	color: var(--color_1);
	background-color: var(--main-color);
	font-size: 20px;
	line-height: 40px;
	height: 40px;
	width: 40px;
	margin-bottom: 10px;
	border-radius: 50%;
	display: block;
	position: relative;
	transition: all 0.3s;
}
.box .icon li a:hover{
	text-decoration: none;
	color: var(--main-color);
	background-color: var(--color_1);
	border-radius: 0 20px 0 20px;
}
   }

 
  /* Colored */
  .red {
    background: #ef5350 !important;
  }

  .blue {
    background: #03a9f4 !important;
  }

  .green {
    background: #4caf50 !important;
  }

  .list-complete-item {
    transition: all 0.5s;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }
}
</style>
