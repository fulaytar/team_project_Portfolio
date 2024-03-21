import{A,S as w,N as b,K as T,M as _,P as X,a as g,i as k}from"./assets/vendor-0d44c75d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let B=0,N=0;const q=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),U=50,S=1e3,Z=["1.1rem","1.4rem",".8rem","1.7rem"],J=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],u=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,x=s=>s[u(0,s.length-1)],G=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),Q=(s,e)=>G(B,N,s,e)>=U,W=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+u(-20,20)}px`,t.style.left=`${s}px`,t.style.color=x(J),t.style.fontSize=x(Z),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>q?q-e:r}px`,opacity:0,transform:`rotateX(${u(1,500)}deg) rotateY(${u(1,500)}deg)`},{duration:S,fill:"forwards"}),setTimeout(()=>{t.remove()},S)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;Q(e,t)&&(W(e,t),B=e,N=t)},{passive:!0});const ee=document.querySelector(".close"),P=document.querySelector(".burger"),$=document.querySelector(".mob-menu");ee.addEventListener("click",te);function te(){P.classList.add("activ-burger"),$.classList.add("is-open"),ae.addEventListener("click",z),window.addEventListener("scroll",C)}function C(){window.scrollY>10&&(z(),window.removeEventListener("scroll",C))}const m=document.querySelector(".list-menu-header"),se=document.querySelector(".header_menu");let L=!1;const re=`
            display: flex;
            text-align: center;
            flex-direction: column;
            row-gap: 5px;
            position: absolute;
            left: 50.6%;
            top: 119px;
            transform: translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        `;se.addEventListener("click",oe);function oe(s){if(s.preventDefault(),L){H();return}window.addEventListener("scroll",I),ne()}function H(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),m.style.opacity="0",m.style.visibility="hidden",m.style.pointerEvents="none",L=!1}function ne(){m.style.cssText=re,document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{setTimeout(()=>{e.style.transition="all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"},t*100)}),L=!0}function I(){window.scrollY>10&&(H(),window.removeEventListener("scroll",I))}const ae=document.querySelector(".close-modal"),ie=document.querySelector(".burger-modal");function z(){ie.classList.remove("activ-burger"),P.classList.remove("activ-burger"),$.classList.remove("is-open")}const le={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>600?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};le.addEventListener();class ce{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const a=t[n]||"",p=e[n]||"",d=Math.floor(Math.random()*40),i=d+Math.floor(Math.random()*40);this.queue.push({from:a,to:p,start:d,end:i})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:a,start:p,end:d,char:i}=this.queue[r];this.frame>=d?(t++,e+=a):this.frame>=p?((!i||Math.random()<.28)&&(i=this.randomChar(),this.queue[r].char=i),e+=`<span class="dud">${i}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const M=["I&#39;m Fullstack developer Lloyd Jefferson."],de=document.querySelector(".text"),ue=new ce(de);let h=0;const R=()=>{h<M.length&&(ue.setText(M[h]).then(()=>{setTimeout(R,800)}),h++)};R();const f=document.querySelectorAll(".arrow"),D=document.querySelector(".accordion-wrapper"),me=new A(D,{showMultiple:!0});me.open(0);D.addEventListener("click",s=>{const e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?f[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?f[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&f[2].classList.toggle("rotate"))});document.querySelector(".arrow-next");new w(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0,modules:[b],navigation:{nextEl:".sbn"},breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}}});const pe=document.querySelectorAll('a[href^="#"]');pe.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{this.blur()},500),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});new w(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[b,T,_,X],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const he=document.querySelector(".accordion-container");new A(he,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const F=document.querySelector(".reviews");function fe(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${t}"
        alt="${r}"
        loading="lazy"
        height="48"
        width="48"
      />
      <div class="review-textbox">
        <h3 class="review-author">${r}</h3>
        <p class="review-text">${o}</p>
      </div>
    </li>`).join("");F.insertAdjacentHTML("beforeend",e),new w(".swiper6",{modules:[b,T,_],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-btn-next-review",prevEl:".swiper-btn-prev-review"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}g.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function ve(){try{const s=await we();fe(s)}catch{ye()}}function ye(s){k.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),F.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function we(){return(await g.get("reviews")).data}ve();const c=document.getElementById("form"),be=document.querySelector("[data-close-button]"),y=document.getElementById("overlay"),v=document.getElementById("modal"),ge=g.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),j=s=>{v!==null&&(s==="open"?(v.classList.add("active"),y.classList.add("active")):s==="close"&&(v.classList.remove("active"),y.classList.remove("active")))},Le=()=>{j("open"),Y()},E=()=>{j("close"),K()},Ee=async s=>{try{const e=await ge.post("/requests",s);qe(e.data)}catch(e){Se(e.message)}},qe=s=>{Me(s),c.reset()},Se=s=>{k.error({title:"Error",message:s,position:"topRight"})},l=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},xe=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},Me=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),Le(),Y()},O=()=>{const s=c.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(xe(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),l(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break}}),e.length>0},V=s=>{s.key==="Escape"&&(E(),K())},Y=()=>{document.addEventListener("keydown",V)},K=()=>{document.removeEventListener("keydown",V)};be.addEventListener("click",E);y.addEventListener("click",E);c.addEventListener("submit",s=>{if(s.preventDefault(),!O()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());Ee(t),Array.prototype.forEach.call(c.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});c.addEventListener("input",s=>{O()});
//# sourceMappingURL=commonHelpers.js.map
