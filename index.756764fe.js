(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const e="ddd78f0e80e0d30735adfd081ca2dc47",t=`https://api.themoviedb.org/3/movie/popular?api_key=${e}`;async function a(t){let a=`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=en-US`;try{let e=await fetch(a);return await e.json()}catch(e){return console.error("Error while fetching movie details:",e),null}}async function n(e=1){let n=`${t}&page=${e}`;try{let e=await fetch(n),t=await e.json(),o=t.results;return{movies:await Promise.all(o.map(async e=>{let t=await a(e.id);return{...e,...t}})),totalPages:t.total_pages}}catch(e){return console.error("Error while fetching data:",e),{movies:[],totalPages:0}}}function o(e){let t=document.querySelector(".film-list");t.innerHTML="";let a=e.map(e=>(function(e){let t=document.createElement("div");t.classList.add("movie-item");let a=document.createElement("img");a.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,a.alt=e.title,t.appendChild(a);let n=document.createElement("h2");n.textContent=e.title,t.appendChild(n);let o=e.genres.map(e=>e.name),l="";l=o.length>2?`${o.slice(0,2).join(", ")}, Other`:o.join(", ");let i=document.createElement("p");i.textContent=l,t.appendChild(i);let r=document.createElement("p"),c=new Date(e.release_date).getFullYear();r.textContent=`${c}`,t.appendChild(r);let d=document.createElement("p"),s=e.vote_average.toFixed(1);return d.textContent=`${s}`,t.appendChild(d),t})(e));t.append(...a)}async function l(t){let{movies:i,totalPages:r}=await n(t);o(i),function t(n,i){let r=document.querySelector(".pagination");r.innerHTML="";let c=1,d=Math.min(5,n);n>5&&(d=(c=Math.max(i-Math.floor(2.5),1))+5-1)>=1e3&&(c=Math.max((d=1e3)-5+1,1));let s=document.createElement("button");if(s.textContent="<<",s.classList.add("page-button","first-button"),s.addEventListener("click",()=>{l(1)}),r.appendChild(s),c>1){let e=document.createElement("span");e.textContent="...",r.appendChild(e)}for(let e=c;e<=d;e++){let t=document.createElement("button");t.textContent=e,t.classList.add("page-button"),e===i&&t.classList.add("active"),t.addEventListener("click",()=>{l(e)}),r.appendChild(t)}if(d<n){let e=document.createElement("span");e.textContent="...",r.appendChild(e);let t=Math.min(d+15,n),a=document.createElement("button");a.textContent=t,a.classList.add("page-button"),a.addEventListener("click",()=>{l(t)}),r.appendChild(a)}let m=document.createElement("button");async function u(t,n=1){let o=`https://api.themoviedb.org/3/search/movie?api_key=${e}&query=${encodeURIComponent(t)}&page=${n}`;try{let e=await fetch(o),t=await e.json(),n=t.results;return{movies:await Promise.all(n.map(async e=>{let t=await a(e.id);return{...e,...t}})),totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}async function u(t,n=1){let o=`https://api.themoviedb.org/3/search/movie?api_key=${e}&query=${encodeURIComponent(t)}&page=${n}`;try{let e=await fetch(o),t=await e.json(),n=t.results;return{movies:await Promise.all(n.map(async e=>{let t=await a(e.id);return{...e,...t}})),totalPages:t.total_pages}}catch(e){return console.error("Error while searching movies:",e),{movies:[],totalPages:0}}}async function p(e){let{movies:a,totalPages:n}=await u(e);o(a),t(n,1)}m.textContent=">>",m.classList.add("page-button","last-button"),m.addEventListener("click",()=>{l(Math.min(i+1,n))}),r.appendChild(m),document.querySelector(".search-form").addEventListener("submit",function(e){e.preventDefault(),p(document.querySelector(".search-input").value)})}(r,t)}async function i(){l(1)}window.addEventListener("load",i);
//# sourceMappingURL=index.756764fe.js.map
