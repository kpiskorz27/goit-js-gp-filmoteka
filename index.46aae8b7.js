function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=globalThis,n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var i=o.register;i("5PtdM",function(t,n){e(t.exports,"addToLibrary",()=>i);let a=document.querySelector(".queue-button"),o=JSON.parse(localStorage.getItem("queue"))||{poster_path:"/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",genres:[{id:28,name:"Horror"},{id:27,name:"Dramat"}],release_date:"2024-01-18",vote_average:5.444,title:"vjhgyugiy"};a.addEventListener("click",()=>{console.log(o),i("queue",o)});let i=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e)}}}),i("3xRUa",function(e,t){var n=o("5PtdM");let a=document.querySelector(".watched-button"),i={poster_path:"/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",genres:[{id:28,name:"Horror"},{id:27,name:"Dramat"}],release_date:"2024-01-18",vote_average:5.444,title:"outlander"};a.addEventListener("click",()=>{console.log(i),(0,n.addToLibrary)("watched",i)})}),i("8sx2c",function(e,t){(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?(document.removeEventListener("keydown",a),document.removeEventListener("click",o)):(document.addEventListener("keydown",a),document.addEventListener("click",o))}function n(){e.modal.classList.contains("is-hidden")||t()}function a(e){"Escape"===e.key&&n()}function o(t){t.target===e.modal&&n()}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",function(e){"Escape"===e.key&&n()}),e.modal.addEventListener("click",function(t){t.target===e.modal&&n()})})()}),i("g1uI7",function(t,n){e(t.exports,"renderMovieCard",()=>l),e(t.exports,"displayMovies",()=>c);let a="ddd78f0e80e0d30735adfd081ca2dc47",o=`https://api.themoviedb.org/3/movie/popular?api_key=${a}`;async function i(e){let t=`https://api.themoviedb.org/3/movie/${e}?api_key=${a}&language=en-US`;try{let e=await fetch(t);return await e.json()}catch(e){return console.error("Error while fetching movie details:",e),null}}async function r(e=1){let t=`${o}&page=${e}`;try{let e=await fetch(t),n=await e.json(),a=n.results;return{movies:await Promise.all(a.map(async e=>{let t=await i(e.id);return{...e,...t}})),totalPages:n.total_pages}}catch(e){return console.error("Error while fetching data:",e),{movies:[],totalPages:0}}}function l(e){let t=document.createElement("div");t.classList.add("movie-item");let n=document.createElement("img");n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.alt=e.title,t.appendChild(n);let a=document.createElement("div");a.classList.add("content-wrapper");let o=document.createElement("h2");o.textContent=e.title,t.appendChild(o);let i=e.genres.map(e=>"Science Fiction"===e.name?"Sci-Fi":e.name),r="";r=i.length>2?`${i.slice(0,2).join(", ")}, Other`:i.join(", ");let l=document.createElement("p");l.textContent=r,a.appendChild(l);let c=document.createElement("p"),d=new Date(e.release_date).getFullYear();c.textContent=`| ${d}`,c.classList.add("movie-year"),a.appendChild(c),t.appendChild(a);let s=document.createElement("p"),u=e.vote_average.toFixed(1);return s.textContent=`${u}`,t.appendChild(s),a.appendChild(s),s.classList.add("main-rating"),t}function c(e){let t=document.querySelector(".film-list");t.innerHTML="";let n=e.map(e=>l(e));t.append(...n)}async function d(e){let{movies:t,totalPages:n}=await r(e);c(t),function e(t,n){let o=document.querySelector(".pagination");o.innerHTML="";let r=1,l=Math.min(5,t);t>5&&(l=(r=Math.max(n-Math.floor(2.5),1))+5-1)>=1e3&&(r=Math.max((l=1e3)-5+1,1));let s=document.createElement("button");if(s.textContent="<<",s.classList.add("page-button","first-button"),s.addEventListener("click",()=>{d(1)}),o.appendChild(s),r>1){let e=document.createElement("span");e.textContent="...",o.appendChild(e)}for(let e=r;e<=l;e++){let t=document.createElement("button");t.textContent=e,t.classList.add("page-button"),e===n&&t.classList.add("active"),t.addEventListener("click",()=>{d(e)}),o.appendChild(t)}if(l<t){let e=document.createElement("span");e.textContent="...",o.appendChild(e);let n=Math.min(l+15,t),a=document.createElement("button");a.textContent=n,a.classList.add("page-button"),a.addEventListener("click",()=>{d(n)}),o.appendChild(a)}let u=document.createElement("button");async function m(e,t=1){let n=`https://api.themoviedb.org/3/search/movie?api_key=${a}&query=${encodeURIComponent(e)}&page=${t}`;try{let e=await fetch(n),t=await e.json(),a=t.results;return{movies:await Promise.all(a.map(async e=>{let t=await i(e.id);return{...e,...t}})),totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}async function m(e,t=1){let n=`https://api.themoviedb.org/3/search/movie?api_key=${a}&query=${encodeURIComponent(e)}&page=${t}`;try{let e=await fetch(n),t=await e.json(),a=t.results;return{movies:await Promise.all(a.map(async e=>{let t=await i(e.id);return{...e,...t}})),totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}async function p(t){let{movies:n,totalPages:a}=await m(t);c(n),e(a,1)}u.textContent=">>",u.classList.add("page-button","last-button"),u.addEventListener("click",()=>{d(Math.min(n+1,t))}),o.appendChild(u),document.querySelector(".search-form").addEventListener("submit",function(e){e.preventDefault(),p(document.querySelector(".search-input").value)})}(n,e)}async function s(){d(1)}window.addEventListener("load",s)}),o("5PtdM"),o("3xRUa"),o("8sx2c"),o("g1uI7");
//# sourceMappingURL=index.46aae8b7.js.map
