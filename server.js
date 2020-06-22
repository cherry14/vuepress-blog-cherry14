/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-06-20 10:30:29
 * @LastEditors: 
 * @LastEditTime: 2020-06-20 10:30:51
 */ 
var express = require('express')
var path = require('path')
var app = express()
// var opn = require('opn')
var localhost = require('address').ip()
let staticDir = '/docs/.vuepress/dist'

app.use(express.static(path.join(__dirname, staticDir)))

app.listen(8888, err => {
  var uri = `http://${localhost}:8888`
  if (!err) {
    console.log(uri)
  } else {
    console.log(err)
  }
})