var e=globalThis,t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o.register;i("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("PP2np",function(e,t){e.exports=new URL("no-poster-available.c6ce9600.jpg",import.meta.url).toString()}),o("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["jKFFk","my-library.0f543975.js","2NfRA","no-poster-available.c6ce9600.jpg","9zqhd","index.040f7924.js"]')),o("5PtdM"),o("3xRUa"),o("8sx2c");var r=o("PP2np");const l=document.querySelector(".film-list"),a=document.querySelector(".pagination");function s(e){try{return JSON.parse(localStorage.getItem(e))||[]}catch(e){return console.log(e),[]}}function c(e){if(0===e.length){l.innerHTML="Sorry, there are no films in your LIBRARY.";return}let t=e.slice(0,9).map(e=>{let t;let n=e.genres||[];return t=n.length>2?`${"Science Fiction"===n[0].name?"Sci-Fi":n[0].name}, ${"Science Fiction"===n[1].name?"Sci-Fi":n[1].name}, Others`:n.map(e=>"Science Fiction"===e.name?"Sci-Fi":e.name).join(", "),`<div class="movie-item" data-modal-open data-id="${e.id}"> 
      <img src="${e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:r&&r.__esModule?r.default:r}" alt="${e.title}" loading="lazy" /> 
      <h2>${e.title}</h2>
      <div class="content-wrapper">
          <p>${t}</p>
          <p class="movie-year"> | ${new Date(e.release_date).getFullYear()}</p>
          <p class="main-rating">${e.vote_average.toFixed(1)}</p>
      </div>
  </div>`}).join("");l.innerHTML=t}window.addEventListener("load",async()=>{let e=[];JSON.parse(localStorage.getItem("queue"))||JSON.parse(localStorage.getItem("watched"))?c(e=[...await s("queue"),...await s("watched")]):l.innerHTML="Sorry, there are no films in your LIBRARY.",function e(t,n){let o=Math.ceil(t/9);a.innerHTML="";let i=document.createElement("button");i.innerHTML=`
        <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
        </svg>
    `,i.style.cursor="pointer",i.classList.add("page-button","first-button"),n>1&&i.addEventListener("click",()=>{let o=Math.max(n-1,1);c(allMovies.slice((o-1)*9,9*o)),e(t,o),window.scroll({top:0,behavior:"smooth"})}),a.appendChild(i);let r=Math.min(5,o);for(let o=1;o<=r;o++){let i=document.createElement("button");i.textContent=o,i.style.cursor="pointer",i.classList.add("page-button"),o===n&&i.classList.add("active"),i.addEventListener("click",()=>{c(allMovies.slice((o-1)*9,9*o)),e(t,o),window.scroll({top:0,behavior:"smooth"})}),a.appendChild(i)}let l=document.createElement("button");l.innerHTML=`
        <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
        </svg>
    `,l.classList.add("page-button","last-button"),l.style.cursor="pointer",l.addEventListener("click",()=>{let i=Math.min(n+1,o);c(allMovies.slice((i-1)*9,9*i)),e(t,i),window.scroll({top:0,behavior:"smooth"})}),a.appendChild(l)}(e.length,1)});let d=1;const p=document.querySelector("#gueueButton"),u=document.querySelector("#watchedButton"),h=document.querySelector(".film-list");function m(e){if(h.innerHTML="",JSON.parse(localStorage.getItem("queue"))){let t=s("queue"),n=Math.ceil(t.length/9),o=((d=e)-1)*9;c(t.slice(o,o+9)),function(e,t){let n=document.querySelector(".pagination");n.innerHTML="";let o=1,i=Math.min(5,e);e>5&&(i=(o=Math.max(t-Math.floor(2.5),1))+5-1)>=1e3&&(o=Math.max((i=1e3)-5+1,1));let r=document.createElement("button");if(r.innerHTML=`
      <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
      </svg>
  `,r.style.cursor="pointer",r.classList.add("page-button","first-button"),r.addEventListener("click",()=>{m(1),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(r),o>1){let e=document.createElement("button");if(e.textContent=1,e.style.cursor="pointer",e.classList.add("page-button"),e.addEventListener("click",()=>{m(1)}),n.appendChild(e),o>2){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}}for(let e=o;e<=i;e++){let o=document.createElement("button");o.textContent=e,o.style.cursor="pointer",o.classList.add("page-button"),e===t&&o.classList.add("active"),o.addEventListener("click",()=>{m(e),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(o)}if(i<e){if(i<e-1){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}let t=Math.min(i+15,e),o=document.createElement("button");o.style.cursor="pointer",o.textContent=t,o.classList.add("page-button"),o.addEventListener("click",()=>{m(t),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(o)}let l=document.createElement("button");l.innerHTML=`
        <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
        </svg>
    `,l.classList.add("page-button","last-button"),l.style.cursor="pointer",l.addEventListener("click",()=>{m(Math.min(t+1,e)),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(l)}(n,d)}else h.insertAdjacentHTML("beforeend","Sorry, there are no films in your QUEUE list.")}p.addEventListener("click",async()=>{m(1),p.classList.add("active"),u.classList.remove("active")}),m(d);let g=1;const v=document.querySelector("#watchedButton"),w=document.querySelector("#gueueButton"),f=document.querySelector(".film-list");function L(e){if(f.innerHTML="",JSON.parse(localStorage.getItem("watched"))){let t=s("watched"),n=Math.ceil(t.length/9),o=((g=e)-1)*9;c(t.slice(o,o+9)),function(e,t){let n=document.querySelector(".pagination");n.innerHTML="";let o=1,i=Math.min(5,e);e>5&&(i=(o=Math.max(t-Math.floor(2.5),1))+5-1)>=1e3&&(o=Math.max((i=1e3)-5+1,1));let r=document.createElement("button");if(r.innerHTML=`
      <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
      </svg>
  `,r.style.cursor="pointer",r.classList.add("page-button","first-button"),r.addEventListener("click",()=>{L(1),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(r),o>1){let e=document.createElement("button");if(e.textContent=1,e.style.cursor="pointer",e.classList.add("page-button"),e.addEventListener("click",()=>{L(1)}),n.appendChild(e),o>2){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}}for(let e=o;e<=i;e++){let o=document.createElement("button");o.textContent=e,o.style.cursor="pointer",o.classList.add("page-button"),e===t&&o.classList.add("active"),o.addEventListener("click",()=>{L(e),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(o)}if(i<e){if(i<e-1){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}let t=Math.min(i+15,e),o=document.createElement("button");o.style.cursor="pointer",o.textContent=t,o.classList.add("page-button"),o.addEventListener("click",()=>{L(t),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(o)}let l=document.createElement("button");l.innerHTML=`
        <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
        </svg>
    `,l.classList.add("page-button","last-button"),l.style.cursor="pointer",l.addEventListener("click",()=>{L(Math.min(t+1,e)),window.scroll({top:0,behavior:"smooth"})}),n.appendChild(l)}(n,g)}else f.insertAdjacentHTML("beforeend","Sorry, there are no films in your WATCHED list.")}v.addEventListener("click",async()=>{L(1),w.classList.remove("active"),v.classList.add("active")}),L(g);
//# sourceMappingURL=my-library.0f543975.js.map
