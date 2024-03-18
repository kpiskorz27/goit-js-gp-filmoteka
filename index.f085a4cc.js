function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t=globalThis,o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var i=a.register;i("ifJdc",function(t,o){e(t.exports,"register",()=>n,e=>n=e);var n,a=new Map;n=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),i("5PtdM",function(e,t){let o=document.querySelector(".queue-button");document.querySelector(".movie-modal"),o.addEventListener("click",()=>{let e,t;let o=function(){let e=sessionStorage.getItem("currentMovie");return e?JSON.parse(e):null}();o?((JSON.parse(localStorage.getItem("queue"))||[]).some(e=>e.id===o.id)?console.log("This movie is already in the queue."):((e=JSON.parse(localStorage.getItem("queue"))||[]).push(o),localStorage.setItem("queue",JSON.stringify(e)),console.log("Movie added to queue:",o)),(JSON.parse(localStorage.getItem("watched"))||[]).some(e=>e.id===o.id)&&(t=(JSON.parse(localStorage.getItem("watched"))||[]).filter(e=>e.id!==o.id),localStorage.setItem("watched",JSON.stringify(t)),console.log("Movie removed from watched list:",o))):console.log("No movie data found in session storage.")})}),i("3xRUa",function(e,t){document.querySelector(".watched-button").addEventListener("click",()=>{let e,t;let o=function(){let e=sessionStorage.getItem("currentMovie");return e?JSON.parse(e):null}();o?((JSON.parse(localStorage.getItem("watched"))||[]).some(e=>e.id===o.id)?console.log("This movie is already in the watched list."):((e=JSON.parse(localStorage.getItem("watched"))||[]).push(o),localStorage.setItem("watched",JSON.stringify(e)),console.log("Movie added to watched list:",o)),(JSON.parse(localStorage.getItem("queue"))||[]).some(e=>e.id===o.id)&&(t=(JSON.parse(localStorage.getItem("queue"))||[]).filter(e=>e.id!==o.id),localStorage.setItem("queue",JSON.stringify(t)),console.log("Movie removed from queue:",o))):console.log("No movie data found in session storage.")})}),i("g1uI7",function(t,o){e(t.exports,"getMovieDetails",()=>s);var n=a("PP2np");let i="ddd78f0e80e0d30735adfd081ca2dc47",r=`https://api.themoviedb.org/3/movie/popular?api_key=${i}`,l="";async function s(e){let t=`https://api.themoviedb.org/3/movie/${e}?api_key=${i}&language=en-US`;try{let e=await fetch(t);return await e.json()}catch(e){return console.error("Error while fetching movie details:",e),null}}let c=document.querySelector(".loader");async function d(e=1){let t=`${r}&page=${e}`;c.classList.remove("hidden");try{await new Promise(e=>setTimeout(e,1e3));let e=await fetch(t),o=await e.json(),n=o.results,a=await Promise.all(n.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:a,totalPages:o.total_pages}}catch(e){return console.error("Error while fetching data:",e),{movies:[],totalPages:0}}}function u(e){let t=document.querySelector(".film-list");t.innerHTML="";let o=e.map(e=>(function(e){let t=document.createElement("div");t.classList.add("movie-item"),t.style.cursor="pointer",t.setAttribute("data-modal",""),t.setAttribute("data-id",e.id);let o=document.createElement("img");e.poster_path?(o.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,o.alt=e.title):(o.src=n&&n.__esModule?n.default:n,o.alt="no image"),t.appendChild(o);let a=document.createElement("div");a.classList.add("content-wrapper");let i=document.createElement("h2");i.textContent=e.title,t.appendChild(i);let r=e.genres.map(e=>"Science Fiction"===e.name?"Sci-Fi":e.name),l="";l=r.length>2?`${r.slice(0,2).join(", ")}, Other`:r.join(", ");let s=document.createElement("p");s.textContent=l,a.appendChild(s);let c=document.createElement("p"),d=new Date(e.release_date).getFullYear();c.textContent=`| ${d}`,c.classList.add("movie-year"),a.appendChild(c),t.appendChild(a);let u=document.createElement("p"),m=e.vote_average.toFixed(1);return u.textContent=`${m}`,t.appendChild(u),a.appendChild(u),u.classList.add("main-rating"),t})(e));t.append(...o)}function m(){window.scrollTo({top:0,behavior:"smooth"})}async function p(e){if(l){let{movies:t,totalPages:o}=await h(l,e);u(t),v(o,e),m()}else if("/my-library.html"===window.location.pathname)u([]),v(1,1),m();else{let{movies:t,totalPages:o}=await d(e);u(t),v(o,e),m()}}async function g(){p(1)}function v(e,t){let o=document.querySelector(".pagination");o.innerHTML="";let n=1,a=Math.min(5,e);e>5&&(a=(n=Math.max(t-Math.floor(2.5),1))+5-1)>=1e3&&(n=Math.max((a=1e3)-5+1,1));let i=document.createElement("button");if(i.innerHTML=`
    <svg class="icon icon-arrow-left" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M25.333 16H6.666M16 25.333 6.667 16 16 6.667" style="stroke:var(--color2, #000)"/>
    </svg>
`,i.style.cursor="pointer",i.classList.add("page-button","first-button"),t>1&&i.addEventListener("click",()=>{p(t-1),f(!1)}),o.appendChild(i),n>1){let e=document.createElement("button");if(e.textContent=1,e.style.cursor="pointer",e.classList.add("page-button"),e.addEventListener("click",()=>{p(1),f(!1)}),o.appendChild(e),n>2){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),o.appendChild(e)}}for(let e=n;e<=a;e++){let n=document.createElement("button");n.textContent=e,n.style.cursor="pointer",n.classList.add("page-button"),e===t&&n.classList.add("active"),n.addEventListener("click",()=>{p(e),f(!1)}),o.appendChild(n)}if(a<e){if(a<e-1){let e=document.createElement("span");e.textContent="...",e.classList.add("ellipsis-span"),o.appendChild(e)}let t=Math.min(a+15,e),n=document.createElement("button");n.style.cursor="pointer",n.textContent=t,n.classList.add("page-button"),n.addEventListener("click",()=>{p(t)}),o.appendChild(n)}let r=document.createElement("button");r.innerHTML=`
      <svg class="icon icon-arrow-right" viewBox="0 0 32 32" width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667" d="M6.667 16h18.667M16 25.333l9.333-9.333-9.333-9.333" style="stroke:var(--color2, #000)"/>
      </svg>
  `,r.classList.add("page-button","last-button"),r.style.cursor="pointer",r.addEventListener("click",()=>{p(Math.min(t+1,e)),f(!1)}),o.appendChild(r)}async function h(e,t=1){let o=`https://api.themoviedb.org/3/search/movie?api_key=${i}&query=${encodeURIComponent(e)}&page=${t}`;try{c.classList.remove("hidden");let e=await fetch(o),t=await e.json(),n=t.results,a=await Promise.all(n.map(async e=>{let t=await s(e.id);return{...e,...t}}));return c.classList.add("hidden"),{movies:a,totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}function f(e){let t=document.getElementById("error-message");e?t.style.opacity="1":t.style.opacity="0"}async function y(e,t=1){if(l=e,""===e.trim())await p(t);else{let{movies:o,totalPages:n}=await h(e,t);0===o.length?(f(!0),l="",document.querySelector(".search-input").value=""):(f(!1),u(o),v(n,t))}}window.addEventListener("load",g);let w=document.querySelector(".search-form");w&&w.addEventListener("submit",function(e){e.preventDefault(),y(document.querySelector(".search-input").value,1)})}),i("PP2np",function(e,t){e.exports=new URL("no-poster-available.c6ce9600.jpg",import.meta.url).toString()}),i("8sx2c",function(e,t){var o=a("g1uI7");let n=document.querySelector(".movie-modal"),i=document.querySelector(".movie-backdrop"),r=document.querySelector(".modal-close-btn"),l=document.querySelector(".movie-image");function s(e){e.preventDefault(),i.classList.add("is-hidden"),n.classList.add("is-hidden"),document.removeEventListener("keydown",c),i.removeEventListener("click",s),r.removeEventListener("click",s)}function c(e){"Escape"===e.code&&s(e)}document.addEventListener("click",function(e){e.target.classList.contains("movie-backdrop")&&s(e)}),window.addEventListener("keydown",c),function e(){let t=document.querySelectorAll(".film-list");console.log("All Movies:",t),t.length?t.forEach(e=>{e.addEventListener("click",function(e){let t=e.target.closest(".movie-item");if(console.log("Target:",t),t){let a=t.dataset.id;console.log("Movie ID:",a);let c=t.querySelector("img").getAttribute("src");console.log("Card Poster:",c),l.setAttribute("src",c),(0,o.getMovieDetails)(a).then(t=>{console.log("Movie Details:",t),sessionStorage.setItem("currentMovie",JSON.stringify(t)),function(e){let t=n.querySelector(".movie-title");n.querySelector(".average-rate");let o=n.querySelector(".total-vote"),a=n.querySelector(".movie-popularity"),i=n.querySelector(".movie-original-title"),r=n.querySelector(".movie-genre"),l=n.querySelector(".movie-about-par"),s=e.genres.map(e=>e.name).join(", ");r.textContent=s,t.textContent=e.title,o.innerHTML=`<span class="movie-average-rate">${e.vote_average.toFixed(1)}</span> / <span class="movie-votes">${e.vote_count}</span>`,a.textContent=e.popularity,i.textContent=e.original_title,r.textContent=s,l.textContent=e.overview}(t),e.preventDefault(),i.classList.remove("is-hidden"),n.classList.remove("is-hidden"),r.addEventListener("click",s)})}})}):setTimeout(e,1e3)}()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["9zqhd","index.f085a4cc.js","2NfRA","no-poster-available.c6ce9600.jpg"]'));
//# sourceMappingURL=index.f085a4cc.js.map
