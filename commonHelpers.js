import{A as $,S as T,N as z,K as D,M as R,P as X,a as j,i as V}from"./assets/vendor-1adda497.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let N=0,k=0;const x=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),Y=50,M=1e3,K=["1.1rem","1.4rem",".8rem","1.7rem"],W=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],m=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,A=s=>s[m(0,s.length-1)],Z=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),U=(s,e)=>Z(N,k,s,e)>=Y,J=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+m(-20,20)}px`,t.style.left=`${s}px`,t.style.color=A(W),t.style.fontSize=A(K),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>x?x-e:r}px`,opacity:0,transform:`rotateX(${m(1,500)}deg) rotateY(${m(1,500)}deg)`},{duration:M,fill:"forwards"}),setTimeout(()=>{t.remove()},M)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;U(e,t)&&(J(e,t),N=e,k=t)});const G=document.querySelector(".close"),w=document.querySelector(".burger"),L=document.querySelector(".mob-menu");G.addEventListener("click",function(){w.classList.toggle("activ-burger"),L.classList.toggle("is-open"),console.log(L),window.addEventListener("scroll",C)});function C(){window.scrollY>0&&(E(),window.removeEventListener("scroll",C))}w.addEventListener("scroll",q);const p=document.querySelector(".list-menu-header"),Q=document.querySelector(".header_menu");let f=!1;const ee=`
            display: flex;
            text-align: center;
            flex-direction: column;
            row-gap: 5px;
            position: absolute;
            left: 50.2%;
            top: 119px;
            transform: translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        `;Q.addEventListener("click",te);function te(){if(f){P();return}se(),window.addEventListener("scroll",H)}function P(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),p.style.opacity="0",p.style.visibility="hidden",p.style.pointerEvents="none",f=!1}function se(){p.style.cssText=ee,document.querySelectorAll(".list-menu-header-item").forEach(e=>{e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"}),f=!0}function H(){const s=window.scrollY;console.log("Прокручено на "+s+" пікселів."),s>160&&f&&(P(),window.removeEventListener("scroll",H))}const I=document.querySelector(".close-modal"),re=document.querySelector(".burger-modal");I.addEventListener("click",E);I.addEventListener("scroll",q);function E(){re.classList.toggle("activ-burger"),w.classList.toggle("activ-burger"),L.classList.toggle("is-open")}function q(){let s=window.scrollY;console.log(s),s>5&&(E(),window.removeEventListener("scroll",q))}class oe{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const l=t[n]||"",h=e[n]||"",u=Math.floor(Math.random()*40),a=u+Math.floor(Math.random()*40);this.queue.push({from:l,to:h,start:u,end:a})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:l,start:h,end:u,char:a}=this.queue[r];this.frame>=u?(t++,e+=l):this.frame>=h?((!a||Math.random()<.28)&&(a=this.randomChar(),this.queue[r].char=a),e+=`<span class="dud">${a}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const _=["I&#39;m Fullstack developer Lloyd Jefferson."],ne=document.querySelector(".text"),le=new oe(ne);let y=0;const B=()=>{y<_.length&&(le.setText(_[y]).then(()=>{setTimeout(B,800)}),y++)};B();const v=document.querySelectorAll(".arrow"),ae=document.querySelector(".accordion-container"),ce=document.querySelector(".accordion-container");new $(ce,{showMultiple:!0});ae.addEventListener("click",s=>{var e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?v[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?v[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&v[2].classList.toggle("rotate"))});const ie=document.querySelector(".arrow-next"),i=new T(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0,navigation:{nextEl:".arrow"}});ie.addEventListener("click",()=>{i.slideNext()});window.innerWidth>767&&window.innerWidth<1440&&(i.params.slidesPerView=3,i.update());window.innerWidth>=1440&&(i.params.slidesPerView=6,i.update());new T(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[z,D,R,X],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const d=document.getElementById("form"),de=document.querySelector("[data-close-button]"),b=document.getElementById("overlay"),g=document.getElementById("modal"),ue=j.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),F=s=>{g!==null&&(s==="open"?(g.classList.add("active"),b.classList.add("active")):s==="close"&&(g.classList.remove("active"),b.classList.remove("active")))},me=()=>{F("open")},S=()=>{F("close")},pe=async s=>{try{const e=await ue.post("/requests",s);fe(e.data)}catch(e){he(e.message)}},fe=s=>{ve(s),d.reset()},he=s=>{V.error({title:"Error",message:s,position:"topRight"})},c=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},ye=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},ve=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),me()},O=()=>{const s=d.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(ye(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),c(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),c(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),c(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break}}),e.length>0};document.addEventListener("keyup",s=>{s.key==="Escape"&&S()});de.addEventListener("click",S);b.addEventListener("click",S);d.addEventListener("submit",s=>{if(s.preventDefault(),!O()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());pe(t),Array.prototype.forEach.call(d.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});d.addEventListener("input",s=>{O()});
//# sourceMappingURL=commonHelpers.js.map
