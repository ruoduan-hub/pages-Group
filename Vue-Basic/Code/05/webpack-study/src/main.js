//这个main.js 是项目入口文件
//1.导入jQuery
import $ from 'jquery'
// const $ = require('jquery')

$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})