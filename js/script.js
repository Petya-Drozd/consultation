let ready=e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)};ready((()=>{$(document).ready((function(){let e=$("#header"),t=$("#headFix").innerHeight(),n=$(window).scrollTop();function o(t,n){t>n?e.addClass("header__fixed"):e.removeClass("header__fixed")}o(n,t),$(window).on("scroll resize",(function(){n=$(this).scrollTop(),o(n,t)}))}));let e=document.querySelector(".icon__menu");e.addEventListener("click",(t=>{e.classList.toggle("active")})),$(document).ready((function(){$(".item-blog_link").click((function(e){$(".item-blog_text").toggleClass("expand")}))}));let t=document.querySelector("body"),n=document.querySelector(".menu");e.addEventListener("click",(e=>{t.classList.toggle("lock"),n.classList.toggle("active")})),document.querySelectorAll(".slider").forEach((e=>{new Glide(e,{type:"carousel",perView:1}).mount()})),function(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}()})),$(".load-more").on("click",(function(){let e=document.querySelector(".load-more");e.addEventListener("click",(t=>{e.classList.toggle("dis")}));const t=$(this),n=t.find("span");$.ajax({url:"data.html",type:"GET",beforeSend:function(){t.attr("disabled",!0),n.addClass("active")},success:function(o){setTimeout((function(){n.removeClass("active"),t.attr("disabled",!0),$(".show-all").before(o)}),1e3),e.classList.toggle("dis")},error:function(){alert("Error 404 Reload Page"),t.attr("disabled",!0)}})})),$(document).ready((function(){$(".item-faq_title").click((function(e){$(".faq__row").hasClass("one")&&($(".item-faq_title").not($(this)).removeClass("active"),$(".item-faq_text").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)}))}));const animItems=document.querySelectorAll(".anim-on");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],n=t.offsetHeight,o=offset(t).top,i=4;let l=window.innerHeight-n/i;n>window.innerHeight&&(l=window.innerHeight-window.innerHeight/i),pageYOffset>o-l&&pageYOffset<o+n?t.classList.add("active"):t.classList.contains("anim-onetime")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}