import{A as k,S as w,N as b,K as B,M as I,P as Y,a as L,i as P}from"./assets/vendor-0d44c75d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let N=0,C=0;const M=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),K=50,A=1e3,U=["1.1rem","1.4rem",".8rem","1.7rem"],Z=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],u=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,T=s=>s[u(0,s.length-1)],J=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),G=(s,e)=>J(N,C,s,e)>=K,Q=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+u(-20,20)}px`,t.style.left=`${s}px`,t.style.color=T(Z),t.style.fontSize=T(U),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>M?M-e:r}px`,opacity:0,transform:`rotateX(${u(1,500)}deg) rotateY(${u(1,500)}deg)`},{duration:A,fill:"forwards"}),setTimeout(()=>{t.remove()},A)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;G(e,t)&&(Q(e,t),N=e,C=t)},{passive:!0});const W=document.querySelector(".close"),p=document.querySelector(".burger"),$=document.querySelector(".mob-menu");W.addEventListener("click",ee);function ee(){p.classList.add("activ-burger"),$.classList.toggle("is-open"),window.addEventListener("scroll",H)}function H(){window.scrollY>5&&(q(),window.removeEventListener("scroll",H))}p.addEventListener("scroll",S);const m=document.querySelector(".list-menu-header"),te=document.querySelector(".header_menu");let E=!1;const se=`
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
        `;te.addEventListener("click",re);function re(s){if(s.preventDefault(),E){D();return}oe(),window.addEventListener("scroll",z)}function D(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),m.style.opacity="0",m.style.visibility="hidden",m.style.pointerEvents="none",E=!1}function oe(){m.style.cssText=se,document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{setTimeout(()=>{e.style.transition="all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"},t*100)}),E=!0}function z(){window.scrollY>10&&(D(),window.removeEventListener("scroll",z))}const R=document.querySelector(".close-modal"),ne=document.querySelector(".burger-modal");R.addEventListener("click",q);R.addEventListener("scroll",S);function q(){ne.classList.remove("activ-burger"),p.classList.remove("activ-burger"),$.classList.remove("is-open")}function S(){window.scrollY>1&&(p.classList.remove("activ-burger"),q(),window.removeEventListener("scroll",S))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".list-open-item a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href").substring(1),o=document.getElementById(r);document.querySelector(".mob-menu").classList.remove("is-open"),o.scrollIntoView({behavior:"smooth"})})})});class ae{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const a=t[n]||"",f=e[n]||"",d=Math.floor(Math.random()*40),i=d+Math.floor(Math.random()*40);this.queue.push({from:a,to:f,start:d,end:i})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:a,start:f,end:d,char:i}=this.queue[r];this.frame>=d?(t++,e+=a):this.frame>=f?((!i||Math.random()<.28)&&(i=this.randomChar(),this.queue[r].char=i),e+=`<span class="dud">${i}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const _=["I&#39;m Fullstack developer Lloyd Jefferson."],ie=document.querySelector(".text"),le=new ae(ie);let h=0;const F=()=>{h<_.length&&(le.setText(_[h]).then(()=>{setTimeout(F,800)}),h++)};F();const v=document.querySelectorAll(".arrow"),O=document.querySelector(".accordion-wrapper"),ce=new k(O,{showMultiple:!0});ce.open(0);O.addEventListener("click",s=>{const e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?v[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?v[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&v[2].classList.toggle("rotate"))});document.querySelector(".arrow-next");new w(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0,modules:[b],navigation:{nextEl:".sbn"},breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}}});const de=document.querySelectorAll('a[href^="#"]');de.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{this.blur()},500),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});new w(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[b,B,I,Y],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const ue=document.querySelector(".accordion-container");new k(ue,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const V=document.querySelector(".reviews");function me(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
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
    </li>`).join("");V.insertAdjacentHTML("beforeend",e),new w(".swiper6",{modules:[b,B,I],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-btn-next-review",prevEl:".swiper-btn-prev-review"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}L.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function pe(){try{const s=await he();me(s)}catch{fe()}}function fe(s){P.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),V.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function he(){return(await L.get("reviews")).data}pe();const c=document.getElementById("form"),ve=document.querySelector("[data-close-button]"),g=document.getElementById("overlay"),y=document.getElementById("modal"),ye=L.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),j=s=>{y!==null&&(s==="open"?(y.classList.add("active"),g.classList.add("active")):s==="close"&&(y.classList.remove("active"),g.classList.remove("active")))},ge=()=>{j("open")},x=()=>{j("close")},we=async s=>{try{const e=await ye.post("/requests",s);be(e.data)}catch(e){Le(e.message)}},be=s=>{qe(s),c.reset()},Le=s=>{P.error({title:"Error",message:s,position:"topRight"})},l=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},Ee=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},qe=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),ge()},X=()=>{const s=c.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(Ee(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),l(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break}}),e.length>0};document.addEventListener("keyup",s=>{s.key==="Escape"&&x()});ve.addEventListener("click",x);g.addEventListener("click",x);c.addEventListener("submit",s=>{if(s.preventDefault(),!X()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());we(t),Array.prototype.forEach.call(c.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});c.addEventListener("input",s=>{X()});
//# sourceMappingURL=commonHelpers.js.map
