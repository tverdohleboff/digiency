(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function q(){const i=document.querySelectorAll(".our-work__examples-category");for(const n of i)n.addEventListener("click",e);function e(n){const r=n.target,t=r.getAttribute("data-tab");document.querySelector(".selected").classList.remove("selected"),r.classList.add("selected"),document.querySelector(".active").classList.remove("active"),document.querySelector(`[data-tab-content="${t}"]`).classList.add("active")}}function C(){document.querySelector("#contactUsForm").addEventListener("submit",function(e){e.preventDefault(),alert("We received your message.");const n=document.querySelectorAll(".contact-us__message-send-block-input");for(const r of n)r.value=""})}function I(){document.querySelector("#subscribeForm").addEventListener("submit",function(e){e.preventDefault(),alert("Thanks for subscribe.");const n=document.querySelector(".footer__newsletter-subscribe-input");n.value=""})}function A(){document.querySelector(".copyright__main-button").addEventListener("click",M)}function M(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function z(){const i=document.querySelector(".header__main-mobile-menu-container-button");i.addEventListener("click",o);const e=document.querySelector("body"),n=document.querySelector(".header__main-burger-menu"),r=document.querySelectorAll(".header__main-burger-menu-list-url");for(const s of r)s.addEventListener("click",a);let t=!1;function o(){t===!1?l():a(),c()}function c(){t===!0?i.classList.add("header__main-mobile-menu-container-button-close"):i.classList.remove("header__main-mobile-menu-container-button-close")}function l(){n.classList.remove("hidden"),e.classList.add("stop-scrolling"),e.addEventListener("touchmove",function(s){s.preventDefault()}),t=!0}function a(){n.classList.add("hidden"),e.classList.remove("stop-scrolling"),e.removeEventListener("touchmove",function(s){s.preventDefault()}),t=!1}}function O(){let i=!1;const e=document.querySelector(".header__main-theme-button");e.addEventListener("click",r);const n=document.querySelector("body");function r(){i===!1?(n.classList.add("dark"),e.setAttribute("title","Switch to light theme"),i=!0):(n.classList.remove("dark"),e.setAttribute("title","Switch to dark theme"),i=!1)}}function D(i){let e=document.querySelector(`.${i}`);const n=e.parentElement,r=n.innerHTML,t=document.createElement("div");t.classList.add("carousel-outer-container");const o=document.createElement("div");o.classList.add("carousel-parent-container"),o.innerHTML=r,t.append(o);const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("carousel-prev-button"),c.innerHTML='<img src="src/images/common/arrow-left.svg" alt="Previous" />',t.append(c);const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("carousel-next-button"),l.innerHTML='<img src="src/images/common/arrow-right.svg" alt="Next" />',t.append(l),n.replaceChild(t,e),e=t.querySelector(`.${i}`),e.classList.add("carousel-container"),l.addEventListener("click",h),c.addEventListener("click",L);let a=window.innerWidth>=768?2:1,s="next",d=a-1;function h(){s="next",b()}function L(){s="prev",b()}function b(){const p=e.children.length-1,_=a===1?0:1,w=e.children[0],m=getComputedStyle(e),x=parseInt(m.gap),E=getComputedStyle(w),k=parseInt(E.width);let u;if(s==="next"&&(u=d+1,u>p)||s==="prev"&&(u=d-1,u<_))return;d=u;const v=x+k;let f;s==="next"?f=parseInt(m.left)-v+"px":s==="prev"&&(f=parseInt(m.left)+v+"px"),e.classList.add("shifting"),e.style.left=f}window.addEventListener("resize",y),e.addEventListener("transitionend",T);function y(p){g(),S()}function g(){window.innerWidth>=600?a=2:a=1}function S(){e.style.left=0,d=a-1}function T(){e.classList.remove("shifting")}}C();q();I();A();z();O();D("clients-feedback__comments-container-mentions");