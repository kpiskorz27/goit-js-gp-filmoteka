var e=globalThis,t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var o=a.register;o("5PtdM",function(e,t){Object.defineProperty(e.exports,"addToLibrary",{get:()=>i,set:void 0,enumerable:!0,configurable:!0});let n=document.querySelector(".queue-button");document.querySelector(".movie-modal");let a=JSON.parse(localStorage.getItem("queue"));Array.isArray(a)||(a=[]);let o={poster_path:"/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",genres:[{id:28,name:"Horror"},{id:27,name:"Dramat"},{id:80,name:"Crime"}],id:872585,release_date:"2024-01-18",vote_average:5.444,title:"No Way Up"};n.addEventListener("click",()=>{a.push(o),console.log(a),i("queue",a)});let i=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e)}}}),o("3xRUa",function(e,t){var n=a("5PtdM");let o=document.querySelector(".watched-button"),i=JSON.parse(localStorage.getItem("watched"));Array.isArray(i)||(i=[]);let r={poster_path:"/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",genres:[{id:28,name:"Action"},{id:16,name:"Animation"}],id:870404,release_date:"2024-03-02",vote_average:6.976,title:"Kung Fu Panda 4"};o.addEventListener("click",()=>{i.push(r),console.log(i),(0,n.addToLibrary)("watched",i)})}),o("8sx2c",function(e,t){let n=document.querySelector(".movie-modal"),a=document.querySelector(".movie-backdrop"),o=document.querySelector(".modal-close-btn");function i(e){e.preventDefault(),a.classList.remove("is-hidden"),n.classList.remove("is-hidden"),o.addEventListener("click",r)}function r(e){e.preventDefault(),a.classList.add("is-hidden"),n.classList.add("is-hidden"),document.removeEventListener("keydown",l),a.removeEventListener("click",r),o.removeEventListener("click",r)}function l(e){"Escape"===e.code&&r(e)}document.addEventListener("click",function(e){e.target.classList.contains("movie-backdrop")&&r(e)}),window.addEventListener("keydown",l),function e(){let t=document.querySelectorAll(".film-list");t.length?[...t].forEach(e=>{e.addEventListener("click",i)}):setTimeout(e,1e3)}()}),a("5PtdM"),a("3xRUa");const i="ddd78f0e80e0d30735adfd081ca2dc47",r=`https://api.themoviedb.org/3/movie/popular?api_key=${i}`;let l="";async function s(e){let t=`https://api.themoviedb.org/3/movie/${e}?api_key=${i}&language=en-US`;try{let e=await fetch(t);return await e.json()}catch(e){return console.error("Error while fetching movie details:",e),null}}const c=document.querySelector(".loader");async function d(e=1){let t=`${r}&page=${e}`;c.classList.remove("hidden");try{await new Promise(e=>setTimeout(e,1e3));let e=await fetch(t),n=await e.json(),a=n.results,o=await Promise.all(a.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:o,totalPages:n.total_pages}}catch(e){return console.error("Error while fetching data:",e),{movies:[],totalPages:0}}}function u(e){let t=document.querySelector(".film-list");t.innerHTML="";let n=e.map(e=>(function(e){let t=document.createElement("div");t.classList.add("movie-item"),t.style.cursor="pointer",t.setAttribute("data-modal-open",""),t.setAttribute("data-id",e.id);let n=document.createElement("img");n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.alt=e.title,n.onerror=function(){let e=new Image;e.src="../images/image-one.jpg",n.src=e.src,n.onerror=null},t.appendChild(n);let a=document.createElement("div");a.classList.add("content-wrapper");let o=document.createElement("h2");o.textContent=e.title,t.appendChild(o);let i=e.genres.map(e=>"Science Fiction"===e.name?"Sci-Fi":e.name),r="";r=i.length>2?`${i.slice(0,2).join(", ")}, Other`:i.join(", ");let l=document.createElement("p");l.textContent=r,a.appendChild(l);let s=document.createElement("p"),c=new Date(e.release_date).getFullYear();s.textContent=`| ${c}`,s.classList.add("movie-year"),a.appendChild(s),t.appendChild(a);let d=document.createElement("p"),u=e.vote_average.toFixed(1);return d.textContent=`${u}`,t.appendChild(d),a.appendChild(d),d.classList.add("main-rating"),t})(e));t.append(...n)}function m(){window.scrollTo({top:0,behavior:"smooth"})}async function p(e){if(l){let{movies:t,totalPages:n}=await g(l,e);u(t),v(n,e),m()}else{let{movies:t,totalPages:n}=await d(e);u(t),v(n,e),m()}}async function h(){p(1)}function v(e,t){let n=document.querySelector(".pagination");n.innerHTML="";let a=1,o=Math.min(5,e);e>5&&(o=(a=Math.max(t-Math.floor(2.5),1))+5-1)>=1e3&&(a=Math.max((o=1e3)-5+1,1));let i=document.createElement("button");if(i.innerHTML=`
    <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
    </svg>
`,i.style.cursor="pointer",i.classList.add("page-button","first-button"),i.addEventListener("click",()=>{p(t-1)}),n.appendChild(i),a>1){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}for(let e=a;e<=o;e++){let a=document.createElement("button");a.textContent=e,a.style.cursor="pointer",a.classList.add("page-button"),e===t&&a.classList.add("active"),a.addEventListener("click",()=>{p(e)}),n.appendChild(a)}if(o<e){let t=document.createElement("span");t.textContent="...",t.classList.add("ellipsis-span"),n.appendChild(t);let a=Math.min(o+15,e),i=document.createElement("button");i.textContent=a,i.classList.add("page-button"),i.addEventListener("click",()=>{p(a)}),n.appendChild(i)}let r=document.createElement("button");r.innerHTML=`
      <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
      </svg>
  `,r.classList.add("page-button","last-button"),r.style.cursor="pointer",r.addEventListener("click",()=>{p(Math.max(t+1,1))}),n.appendChild(r)}async function g(e,t=1){let n=`https://api.themoviedb.org/3/search/movie?api_key=${i}&query=${encodeURIComponent(e)}&page=${t}`;try{c.classList.remove("hidden");let e=await fetch(n),t=await e.json(),a=t.results,o=await Promise.all(a.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:o,totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}function f(e){let t=document.getElementById("error-message");e?t.style.opacity="1":t.style.opacity="0"}async function y(e,t=1){l=e;let{movies:n,totalPages:a}=await g(e,t);0===n.length?f(!0):(f(!1),u(n),v(a,t))}window.addEventListener("load",h),document.querySelector(".search-form").addEventListener("submit",function(e){e.preventDefault(),y(document.querySelector(".search-input").value,1)}),a("8sx2c");
//# sourceMappingURL=index.f2f93870.js.map
