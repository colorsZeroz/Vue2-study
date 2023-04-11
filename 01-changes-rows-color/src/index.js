import $ from 'jquery'
import './css/index.css'

$(function(){
    $('li:odd').css('background-color','blue')
    $('li:even').css('background-color','pink')
})