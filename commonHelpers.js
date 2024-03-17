import{A as N,S as L,N as P,K as B,M as I,P as U,a as E,i as C}from"./assets/vendor-1810fee5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();let $=0,H=0;const A=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),W=50,M=1e3,Z=["1.1rem","1.4rem",".8rem","1.7rem"],J=["#E23636","#F9F3EE","#E1F8DC","#B8AFE6","#AEE1CD","#5EB0E5"],m=(s,e)=>Math.floor(Math.random()*(e-s+1))+s,T=s=>s[m(0,s.length-1)],G=(s,e,t,r)=>Math.sqrt(Math.pow(t-s,2)+Math.pow(r-e,2)),Q=(s,e)=>G($,H,s,e)>=W,ee=(s,e)=>{const t=document.createElement("div");t.innerHTML="&#10022;",t.className="star",t.style.top=`${e+m(-20,20)}px`,t.style.left=`${s}px`,t.style.color=T(J),t.style.fontSize=T(Z),document.body.appendChild(t);const r=10+5*parseFloat(getComputedStyle(t).fontSize);t.animate({translate:`0 ${e+r>A?A-e:r}px`,opacity:0,transform:`rotateX(${m(1,500)}deg) rotateY(${m(1,500)}deg)`},{duration:M,fill:"forwards"}),setTimeout(()=>{t.remove()},M)};addEventListener("mousemove",s=>{const{clientX:e,clientY:t}=s;Q(e,t)&&(ee(e,t),$=e,H=t)});const te=document.querySelector(".close"),f=document.querySelector(".burger"),D=document.querySelector(".mob-menu");te.addEventListener("click",function(){f.classList.remove("activ-burger"),D.classList.add("is-open"),window.addEventListener("scroll",R)});function R(){window.scrollY>5&&(h(),window.removeEventListener("scroll",R))}f.addEventListener("scroll",q);const p=document.querySelector(".list-menu-header"),se=document.querySelector(".header_menu");let S=!1;const re=`
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
        `;se.addEventListener("click",oe);function oe(s){if(s.preventDefault(),S){F();return}ne(),window.addEventListener("scroll",O)}function F(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),p.style.opacity="0",p.style.visibility="hidden",p.style.pointerEvents="none",S=!1}function ne(){p.style.cssText=re,document.querySelectorAll(".list-menu-header-item").forEach(e=>{e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"}),S=!0}function O(){window.scrollY>10&&(F(),window.removeEventListener("scroll",O))}const V=document.querySelector(".close-modal"),ie=document.querySelector(".burger-modal");V.addEventListener("click",h);V.addEventListener("scroll",q);function h(){ie.classList.remove("activ-burger"),f.classList.remove("activ-burger"),D.classList.remove("is-open");const s=document.querySelectorAll(".list-open-item");console.log(s)}function q(){window.scrollY>1&&(f.classList.remove("activ-burger"),h(),window.removeEventListener("scroll",q))}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".list-open-item a");h(),s.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href").substring(1),o=document.getElementById(r);document.querySelector(".mob-menu").classList.remove("is-open"),o.scrollIntoView({behavior:"smooth"})})})});class ae{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const i=t[n]||"",v=e[n]||"",u=Math.floor(Math.random()*40),a=u+Math.floor(Math.random()*40);this.queue.push({from:i,to:v,start:u,end:a})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:i,start:v,end:u,char:a}=this.queue[r];this.frame>=u?(t++,e+=i):this.frame>=v?((!a||Math.random()<.28)&&(a=this.randomChar(),this.queue[r].char=a),e+=`<span class="dud">${a}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const _=["I&#39;m Fullstack developer Lloyd Jefferson."],le=document.querySelector(".text"),ce=new ae(le);let y=0;const j=()=>{y<_.length&&(ce.setText(_[y]).then(()=>{setTimeout(j,800)}),y++)};j();const w=document.querySelectorAll(".arrow"),z=document.querySelector(".accordion-wrapper");new N(z,{showMultiple:!0});z.addEventListener("click",s=>{var e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?w[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?w[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&w[2].classList.toggle("rotate"))});const de=document.querySelector(".arrow-next"),c=new L(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0});de.addEventListener("click",()=>{c.slideNext()});window.innerWidth>767&&window.innerWidth<1440&&(c.params.slidesPerView=3,c.update());window.innerWidth>=1440&&(c.params.slidesPerView=6,c.update());const ue=document.querySelectorAll('a[href^="#"]');ue.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{this.blur()},2e3),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const k=document.querySelector(".footer");k.getAttribute("id")!="order"&&k.setAttribute("id","order");new L(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[P,B,I,U],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const me=document.querySelector(".accordion-container");new N(me,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const X=document.querySelector(".reviews");function pe(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${t}"
        alt="${r}"
      />
      <div class="review-textbox">
        <h3 class="review-author">${r}</h3>
        <p class="review-text">${o}</p>
      </div>
    </li>`).join("");X.insertAdjacentHTML("beforeend",e),new L(".swiper6",{modules:[P,B,I],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}E.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function fe(){try{const s=await ve();pe(s)}catch{he()}}function he(s){C.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),X.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function ve(){return(await E.get("reviews")).data}fe();const d=document.getElementById("form"),ye=document.querySelector("[data-close-button]"),b=document.getElementById("overlay"),g=document.getElementById("modal"),we=E.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),Y=s=>{g!==null&&(s==="open"?(g.classList.add("active"),b.classList.add("active")):s==="close"&&(g.classList.remove("active"),b.classList.remove("active")))},ge=()=>{Y("open")},x=()=>{Y("close")},be=async s=>{try{const e=await we.post("/requests",s);Le(e.data)}catch(e){Ee(e.message)}},Le=s=>{qe(s),d.reset()},Ee=s=>{C.error({title:"Error",message:s,position:"topRight"})},l=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},Se=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},qe=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),ge()},K=()=>{const s=d.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(Se(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),l(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),l(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),l(t,"Success!","success"));break}}),e.length>0};document.addEventListener("keyup",s=>{s.key==="Escape"&&x()});ye.addEventListener("click",x);b.addEventListener("click",x);d.addEventListener("submit",s=>{if(s.preventDefault(),!K()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());be(t),Array.prototype.forEach.call(d.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});d.addEventListener("input",s=>{K()});
//# sourceMappingURL=commonHelpers.js.map
