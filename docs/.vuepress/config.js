/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-01 11:26:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-22 12:21:27
 */ 
module.exports = {
    title: "Cherry14`S blog",
    description: "Just playing around",
    lastUpdated: true,  // 最后更新时间
    base:"/blog/", // 根路径
    repo: "https://gitee.com/",
    theme:require('../../'),
    head: [
      ['link', { rel: 'icon', type: "image", href: './public/img/cherry14.jpg' }],
    ],
    themeConfig: {
        logo:"./public/cherry14.jpg",
        author: 'cherry14',
        headImg: './public/cherry14.jpg', //头像
        nav: [//导航栏
          { text: '主页', link: '/' },
          { text: '博文',link:'/blog'},
          { text: '时间线',link:'/timeline'},
          { text: '友人帐',link:'/friend'},
          { text: '关于我',link:'/about'}
        ],
        sidebar: {
            '/foo/': [
              '',     /* /foo/ */
              'one',  /* /foo/one.html */
              'two'   /* /foo/two.html */
            ],
      
            '/bar/': [
              '',      /* /bar/ */
              'three', /* /bar/three.html */
              'four'   /* /bar/four.html */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
          },
          smoothScroll: true,  // 页面滚动
      },
      // configureWebpack: {
      //   output: {
      //     publicPath: "./"
      //   },
      //   resolve: {
      //     alias: {
      //       '@': 'public'
      //     }
      //   }
      // },
      plugins: {
        '@vssue/vuepress-plugin-vssue': {
          platform: 'github', //v3的platform是github，v4的是github-v4
          locale: 'zh', //语言
          // 其他的 Vssue 配置
          owner: 'xumenggit', //github账户名
          repo: 'blog', //github一个项目的名称
          clientId: '26a40eb15d28831b640afeaa94f633b70839487c58c912531e96f6d5d0b266b9',//注册的Client ID
          clientSecret: '05f48f087b76d018c7260d6b305797af2099b50b0256e59169684de0be4b9889',//注册的Client Secret
          autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        },
      },
}