import $ from 'jquery'
import '@/css/index.css'
import '@/css/index.less'
import logo from '@/images/backiee-67970.jpg'
import  '@/js/test/info.js'

$('.box').attr('src',logo)
// console.log(logo);
$(function(){
    $('li:odd').css('background-color','aqau')
    $('li:even').css('background-color','pink')
})

function info(target){
    target.info = 'Person info'
}
@info
class Person{}
console.log(Person.info);