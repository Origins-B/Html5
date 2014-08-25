/* 
 * Copyright (C) 2014 infinityserivce.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301  USA
 */ 
var open = false;
$(document).ready(function(){
           $('.head').click(function(){
               $('.head').toggleClass("blue");
           }); 
           $('.toggle').click(function(){
               if(open){
               open=false;
               $('.pull-left').animate({left:'-285px'},200);
           }
           else{
               open=true;
               $('.pull-left').animate({left:'0px'},200);
           }
           });
           $(".toggle").on({
    mouseenter: function () {
        $(this).css('background-color','blue');
    },
    mouseleave: function () {
        $(this).css('background-color','red');
    }
});
        });

