import{A as P,S as b,N as L,K as B,M as I,P as K,a as E,i as N}from"./assets/vendor-2f00c9ca.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let C=0,$=0;const A=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),U=50,M=1e3,Z=["1.1rem","1.4rem",".8rem","1.7rem"],J=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],u=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,T=s=>s[u(0,s.length-1)],G=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),Q=(s,e)=>G(C,$,s,e)>=U,W=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+u(-20,20)}px`,t.style.left=`${s}px`,t.style.color=T(J),t.style.fontSize=T(Z),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>A?A-e:r}px`,opacity:0,transform:`rotateX(${u(1,500)}deg) rotateY(${u(1,500)}deg)`},{duration:M,fill:"forwards"}),setTimeout(()=>{t.remove()},M)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;Q(e,t)&&(W(e,t),C=e,$=t)});const ee=document.querySelector(".close"),p=document.querySelector(".burger"),H=document.querySelector(".mob-menu");ee.addEventListener("click",function(){p.classList.remove("activ-burger"),H.classList.add("is-open"),window.addEventListener("scroll",D)});function D(){window.scrollY>5&&(f(),window.removeEventListener("scroll",D))}p.addEventListener("scroll",S);const m=document.querySelector(".list-menu-header"),te=document.querySelector(".header_menu");let q=!1;const se=`
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
        `;te.addEventListener("click",re);function re(s){if(s.preventDefault(),q){R();return}oe(),window.addEventListener("scroll",F)}function R(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),m.style.opacity="0",m.style.visibility="hidden",m.style.pointerEvents="none",q=!1}function oe(){m.style.cssText=se,document.querySelectorAll(".list-menu-header-item").forEach(e=>{e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"}),q=!0}function F(){window.scrollY>10&&(R(),window.removeEventListener("scroll",F))}const O=document.querySelector(".close-modal"),ne=document.querySelector(".burger-modal");O.addEventListener("click",f);O.addEventListener("scroll",S);function f(){ne.classList.remove("activ-burger"),p.classList.remove("activ-burger"),H.classList.remove("is-open");const s=document.querySelectorAll(".list-open-item");console.log(s)}function S(){window.scrollY>1&&(p.classList.remove("activ-burger"),f(),window.removeEventListener("scroll",S))}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".list-open-item a");f(),s.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href").substring(1),o=document.getElementById(r);document.querySelector(".mob-menu").classList.remove("is-open"),o.scrollIntoView({behavior:"smooth"})})})});class ie{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const i=t[n]||"",h=e[n]||"",d=Math.floor(Math.random()*40),l=d+Math.floor(Math.random()*40);this.queue.push({from:i,to:h,start:d,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:i,start:h,end:d,char:l}=this.queue[r];this.frame>=d?(t++,e+=i):this.frame>=h?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[r].char=l),e+=`<span class="dud">${l}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const _=["I&#39;m Fullstack developer Lloyd Jefferson."],le=document.querySelector(".text"),ae=new ie(le);let v=0;const V=()=>{v<_.length&&(ae.setText(_[v]).then(()=>{setTimeout(V,800)}),v++)};V();const y=document.querySelectorAll(".arrow"),j=document.querySelector(".accordion-wrapper");new P(j,{showMultiple:!0});j.addEventListener("click",s=>{var e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?y[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?y[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&y[2].classList.toggle("rotate"))});document.querySelector(".arrow-next");new b(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0,modules:[L],navigation:{nextEl:".sbn"},breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}}});const ce=document.querySelectorAll('a[href^="#"]');ce.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{this.blur()},2e3),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const k=document.querySelector(".footer");k.getAttribute("id")!="order"&&k.setAttribute("id","order");new b(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[L,B,I,K],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const de=document.querySelector(".accordion-container");new P(de,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const z=document.querySelector(".reviews");function ue(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${t}"
        alt="${r}"
      />
      <div class="review-textbox">
        <h3 class="review-author">${r}</h3>
        <p class="review-text">${o}</p>
      </div>
    </li>`).join("");z.insertAdjacentHTML("beforeend",e),new b(".swiper6",{modules:[L,B,I],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}E.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function me(){try{const s=await fe();ue(s)}catch{pe()}}function pe(s){N.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),z.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function fe(){return(await E.get("reviews")).data}me();const c=document.getElementById("form"),he=document.querySelector("[data-close-button]"),w=document.getElementById("overlay"),g=document.getElementById("modal"),ve=E.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),X=s=>{g!==null&&(s==="open"?(g.classList.add("active"),w.classList.add("active")):s==="close"&&(g.classList.remove("active"),w.classList.remove("active")))},ye=()=>{X("open")},x=()=>{X("close")},ge=async s=>{try{const e=await ve.post("/requests",s);we(e.data)}catch(e){be(e.message)}},we=s=>{Ee(s),c.reset()},be=s=>{N.error({title:"Error",message:s,position:"topRight"})},a=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},Le=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},Ee=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),ye()},Y=()=>{const s=c.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(Le(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),a(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),a(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),a(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break}}),e.length>0};document.addEventListener("keyup",s=>{s.key==="Escape"&&x()});he.addEventListener("click",x);w.addEventListener("click",x);c.addEventListener("submit",s=>{if(s.preventDefault(),!Y()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());ge(t),Array.prototype.forEach.call(c.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});c.addEventListener("input",s=>{Y()});
//# sourceMappingURL=commonHelpers.js.map
