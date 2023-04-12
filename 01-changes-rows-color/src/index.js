import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import logo from './images/backiee-67970.jpg'

$('.box').attr('src',logo)
// console.log(logo);
$(function(){
    $('li:odd').css('background-color','aqau')
    $('li:even').css('background-color','pink')
})