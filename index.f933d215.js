function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=globalThis,n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var i=a.register;i("ifJdc",function(t,n){e(t.exports,"register",()=>o,e=>o=e);var o,a=new Map;o=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("5PtdM",function(t,n){e(t.exports,"addToLibrary",()=>r);let o=document.querySelector(".queue-button");document.querySelector(".movie-modal");let a=JSON.parse(localStorage.getItem("queue"));Array.isArray(a)||(a=[]);let i={poster_path:"/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",genres:[{id:28,name:"Horror"},{id:27,name:"Dramat"},{id:80,name:"Crime"}],id:872585,release_date:"2024-01-18",vote_average:5.444,title:"No Way Up"};o.addEventListener("click",()=>{a.push(i),console.log(a),r("queue",a)});let r=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e)}}}),i("3xRUa",function(e,t){var n=a("5PtdM");let o=document.querySelector(".watched-button"),i=JSON.parse(localStorage.getItem("watched"));Array.isArray(i)||(i=[]);let r={poster_path:"/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",genres:[{id:28,name:"Action"},{id:16,name:"Animation"}],id:870404,release_date:"2024-03-02",vote_average:6.976,title:"Kung Fu Panda 4"};o.addEventListener("click",()=>{i.push(r),console.log(i),(0,n.addToLibrary)("watched",i)})}),i("g1uI7",function(t,n){e(t.exports,"getMovieDetails",()=>s);var o=a("PP2np");let i="ddd78f0e80e0d30735adfd081ca2dc47",r=`https://api.themoviedb.org/3/movie/popular?api_key=${i}`,l="";async function s(e){let t=`https://api.themoviedb.org/3/movie/${e}?api_key=${i}&language=en-US`;try{let e=await fetch(t);return await e.json()}catch(e){return console.error("Error while fetching movie details:",e),null}}let c=document.querySelector(".loader");async function d(e=1){let t=`${r}&page=${e}`;c.classList.remove("hidden");try{await new Promise(e=>setTimeout(e,1e3));let e=await fetch(t),n=await e.json(),o=n.results,a=await Promise.all(o.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:a,totalPages:n.total_pages}}catch(e){return console.error("Error while fetching data:",e),{movies:[],totalPages:0}}}function u(e){let t=document.querySelector(".film-list");t.innerHTML="";let n=e.map(e=>(function(e){let t=document.createElement("div");t.classList.add("movie-item"),t.style.cursor="pointer",t.setAttribute("data-modal",""),t.setAttribute("data-id",e.id);let n=document.createElement("img");e.poster_path?(n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.alt=e.title):(n.src=o&&o.__esModule?o.default:o,n.alt="no image"),t.appendChild(n);let a=document.createElement("div");a.classList.add("content-wrapper");let i=document.createElement("h2");i.textContent=e.title,t.appendChild(i);let r=e.genres.map(e=>"Science Fiction"===e.name?"Sci-Fi":e.name),l="";l=r.length>2?`${r.slice(0,2).join(", ")}, Other`:r.join(", ");let s=document.createElement("p");s.textContent=l,a.appendChild(s);let c=document.createElement("p"),d=new Date(e.release_date).getFullYear();c.textContent=`| ${d}`,c.classList.add("movie-year"),a.appendChild(c),t.appendChild(a);let u=document.createElement("p"),p=e.vote_average.toFixed(1);return u.textContent=`${p}`,t.appendChild(u),a.appendChild(u),u.classList.add("main-rating"),t})(e));t.append(...n)}function p(){window.scrollTo({top:0,behavior:"smooth"})}async function m(e){if(l){let{movies:t,totalPages:n}=await h(l,e);u(t),g(n,e),p()}else{let{movies:t,totalPages:n}=await d(e);u(t),g(n,e),p()}}async function v(){m(1)}function g(e,t){let n=document.querySelector(".pagination");n.innerHTML="";let o=1,a=Math.min(5,e);e>5&&(a=(o=Math.max(t-Math.floor(2.5),1))+5-1)>=1e3&&(o=Math.max((a=1e3)-5+1,1));let i=document.createElement("button");if(i.innerHTML=`
    <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
    </svg>
`,i.style.cursor="pointer",i.classList.add("page-button","first-button"),t>1&&i.addEventListener("click",()=>{m(t-1),f(!1)}),n.appendChild(i),o>1){let e=document.createElement("button");if(e.textContent=1,e.style.cursor="pointer",e.classList.add("page-button"),e.addEventListener("click",()=>{m(1),f(!1)}),n.appendChild(e),o>2){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}}for(let e=o;e<=a;e++){let o=document.createElement("button");o.textContent=e,o.style.cursor="pointer",o.classList.add("page-button"),e===t&&o.classList.add("active"),o.addEventListener("click",()=>{m(e),f(!1)}),n.appendChild(o)}if(a<e){if(a<e-1){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),n.appendChild(e)}let t=Math.min(a+15,e),o=document.createElement("button");o.style.cursor="pointer",o.textContent=t,o.classList.add("page-button"),o.addEventListener("click",()=>{m(t)}),n.appendChild(o)}let r=document.createElement("button");r.innerHTML=`
      <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
      </svg>
  `,r.classList.add("page-button","last-button"),r.style.cursor="pointer",r.addEventListener("click",()=>{m(Math.min(t+1,e)),f(!1)}),n.appendChild(r)}async function h(e,t=1){let n=`https://api.themoviedb.org/3/search/movie?api_key=${i}&query=${encodeURIComponent(e)}&page=${t}`;try{c.classList.remove("hidden");let e=await fetch(n),t=await e.json(),o=t.results,a=await Promise.all(o.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:a,totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}function f(e){let t=document.getElementById("error-message");e?t.style.opacity="1":t.style.opacity="0"}async function y(e,t=1){if(l=e,""===e.trim())await m(t);else{let{movies:n,totalPages:o}=await h(e,t);0===n.length?(f(!0),l="",document.querySelector(".search-input").value=""):(f(!1),u(n),g(o,t))}}window.addEventListener("load",v);let w=document.querySelector(".search-form");w&&w.addEventListener("submit",function(e){e.preventDefault(),y(document.querySelector(".search-input").value,1)})}),i("PP2np",function(e,t){e.exports=new URL("no-poster-available.c6ce9600.jpg",import.meta.url).toString()}),i("8sx2c",function(e,t){var n=a("g1uI7");let o=document.querySelector(".movie-modal"),i=document.querySelector(".movie-backdrop"),r=document.querySelector(".modal-close-btn"),l=document.querySelector(".movie-image");function s(e){e.preventDefault(),i.classList.add("is-hidden"),o.classList.add("is-hidden"),document.removeEventListener("keydown",c),i.removeEventListener("click",s),r.removeEventListener("click",s)}function c(e){"Escape"===e.code&&s(e)}document.addEventListener("click",function(e){e.target.classList.contains("movie-backdrop")&&s(e)}),window.addEventListener("keydown",c),function e(){let t=document.querySelectorAll(".film-list");console.log("All Movies:",t),t.length?t.forEach(e=>{e.addEventListener("click",function(e){let t=e.target.closest(".movie-item");if(console.log("Target:",t),t){let a=t.dataset.id;console.log("Movie ID:",a);let c=t.querySelector("img").getAttribute("src");console.log("Card Poster:",c),l.setAttribute("src",c),(0,n.getMovieDetails)(a).then(t=>{console.log("Movie Details:",t),function(e){let t=o.querySelector(".movie-title");o.querySelector(".average-rate");let n=o.querySelector(".total-vote"),a=o.querySelector(".movie-popularity"),i=o.querySelector(".movie-original-title"),r=o.querySelector(".movie-genre"),l=o.querySelector(".movie-about-par"),s=e.genres.map(e=>e.name).join(", ");r.textContent=s,t.textContent=e.title,n.innerHTML=`<span class="movieAverageRate">${e.vote_average.toFixed(1)}</span> / ${e.vote_count}`,a.textContent=e.popularity,i.textContent=e.original_title,r.textContent=s,l.textContent=e.overview}(t),e.preventDefault(),i.classList.remove("is-hidden"),o.classList.remove("is-hidden"),r.addEventListener("click",s)})}})}):setTimeout(e,1e3)}()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["eFRlh","index.f933d215.js","2NfRA","no-poster-available.c6ce9600.jpg"]')),a("5PtdM"),a("3xRUa"),a("g1uI7"),a("8sx2c");
//# sourceMappingURL=index.f933d215.js.map
