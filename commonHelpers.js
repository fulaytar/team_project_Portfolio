import{S as T,N as _,K as k,M as I,P as V,A as X,a as g,i as C}from"./assets/vendor-2f00c9ca.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let B=0,N=0;const q=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),Y=50,S=1e3,K=["1.1rem","1.4rem",".8rem","1.7rem"],Z=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],u=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,x=s=>s[u(0,s.length-1)],U=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),J=(s,e)=>U(B,N,s,e)>=Y,G=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+u(-20,20)}px`,t.style.left=`${s}px`,t.style.color=x(Z),t.style.fontSize=x(K),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>q?q-e:r}px`,opacity:0,transform:`rotateX(${u(1,500)}deg) rotateY(${u(1,500)}deg)`},{duration:S,fill:"forwards"}),setTimeout(()=>{t.remove()},S)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;J(e,t)&&(G(e,t),B=e,N=t)});const Q=document.querySelector(".close"),p=document.querySelector(".burger"),P=document.querySelector(".mob-menu");Q.addEventListener("click",function(){p.classList.remove("activ-burger"),P.classList.add("is-open"),window.addEventListener("scroll",$)});function $(){window.scrollY>5&&(f(),window.removeEventListener("scroll",$))}p.addEventListener("scroll",E);const m=document.querySelector(".list-menu-header"),W=document.querySelector(".header_menu");let w=!1;const ee=`
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
        `;W.addEventListener("click",te);function te(s){if(s.preventDefault(),w){H();return}se(),window.addEventListener("scroll",D)}function H(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),m.style.opacity="0",m.style.visibility="hidden",m.style.pointerEvents="none",w=!1}function se(){m.style.cssText=ee,document.querySelectorAll(".list-menu-header-item").forEach(e=>{e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"}),w=!0}function D(){window.scrollY>10&&(H(),window.removeEventListener("scroll",D))}const R=document.querySelector(".close-modal"),re=document.querySelector(".burger-modal");R.addEventListener("click",f);R.addEventListener("scroll",E);function f(){re.classList.remove("activ-burger"),p.classList.remove("activ-burger"),P.classList.remove("is-open");const s=document.querySelectorAll(".list-open-item");console.log(s)}function E(){window.scrollY>1&&(p.classList.remove("activ-burger"),f(),window.removeEventListener("scroll",E))}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".list-open-item a");f(),s.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href").substring(1),o=document.getElementById(r);document.querySelector(".mob-menu").classList.remove("is-open"),o.scrollIntoView({behavior:"smooth"})})})});class oe{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const l=t[n]||"",h=e[n]||"",d=Math.floor(Math.random()*40),a=d+Math.floor(Math.random()*40);this.queue.push({from:l,to:h,start:d,end:a})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:l,start:h,end:d,char:a}=this.queue[r];this.frame>=d?(t++,e+=l):this.frame>=h?((!a||Math.random()<.28)&&(a=this.randomChar(),this.queue[r].char=a),e+=`<span class="dud">${a}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const A=["I&#39;m Fullstack developer Lloyd Jefferson."],ne=document.querySelector(".text"),le=new oe(ne);let v=0;const F=()=>{v<A.length&&(le.setText(A[v]).then(()=>{setTimeout(F,800)}),v++)};F();const ae=document.querySelectorAll('a[href^="#"]');ae.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const M=document.querySelector(".footer");M.getAttribute("id")!="order"&&M.setAttribute("id","order");new T(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[_,k,I,V],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const ce=document.querySelector(".accordion-container");new X(ce,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const j=document.querySelector(".reviews");function ie(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${t}"
        alt="${r}"
      />
      <div class="review-textbox">
        <h3 class="review-author">${r}</h3>
        <p class="review-text">${o}</p>
      </div>
    </li>`).join("");j.insertAdjacentHTML("beforeend",e),new T(".swiper3",{modules:[_,k,I],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}g.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function de(){try{const s=await me();ie(s)}catch{ue()}}function ue(s){C.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),j.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function me(){return(await g.get("reviews")).data}de();const i=document.getElementById("form"),pe=document.querySelector("[data-close-button]"),b=document.getElementById("overlay"),y=document.getElementById("modal"),fe=g.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),z=s=>{y!==null&&(s==="open"?(y.classList.add("active"),b.classList.add("active")):s==="close"&&(y.classList.remove("active"),b.classList.remove("active")))},he=()=>{z("open")},L=()=>{z("close")},ve=async s=>{try{const e=await fe.post("/requests",s);ye(e.data)}catch(e){be(e.message)}},ye=s=>{we(s),i.reset()},be=s=>{C.error({title:"Error",message:s,position:"topRight"})},c=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},ge=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},we=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),he()},O=()=>{const s=i.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(ge(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),c(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),c(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),c(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),c(t,"Success!","success"));break}}),e.length>0};document.addEventListener("keyup",s=>{s.key==="Escape"&&L()});pe.addEventListener("click",L);b.addEventListener("click",L);i.addEventListener("submit",s=>{if(s.preventDefault(),!O()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());ve(t),Array.prototype.forEach.call(i.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});i.addEventListener("input",s=>{O()});
//# sourceMappingURL=commonHelpers.js.map
