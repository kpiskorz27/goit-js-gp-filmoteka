var e=globalThis,t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var a=o.register;a("5PtdM",function(e,t){Object.defineProperty(e.exports,"addToLibrary",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let n=document.querySelector(".queue-button");document.querySelector(".movie-modal");let o=JSON.parse(localStorage.getItem("queue"))||[],a={poster_path:"/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",genres:[{id:28,name:"Horror"},{id:27,name:"Dramat"},{id:80,name:"Crime"}],id:872585,release_date:"2024-01-18",vote_average:5.444,title:"No Way Up"};n.addEventListener("click",()=>{o.push(a),console.log(o),r("queue",o)});let r=(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e)}}}),a("3xRUa",function(e,t){var n=o("5PtdM");let a=document.querySelector(".watched-button"),r=JSON.parse(localStorage.getItem("watched"))||[],l={poster_path:"/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",genres:[{id:28,name:"Action"},{id:16,name:"Animation"}],id:870404,release_date:"2024-03-02",vote_average:6.976,title:"Kung Fu Panda 4"};a.addEventListener("click",()=>{r.push(l),console.log(r),(0,n.addToLibrary)("watched",r)})}),a("8sx2c",function(e,t){(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?(document.removeEventListener("keydown",o),document.removeEventListener("click",a)):(document.addEventListener("keydown",o),document.addEventListener("click",a))}function n(){e.modal.classList.contains("is-hidden")||t()}function o(e){"Escape"===e.key&&n()}function a(t){t.target===e.modal&&n()}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",function(e){"Escape"===e.key&&n()}),e.modal.addEventListener("click",function(t){t.target===e.modal&&n()})})()}),o("5PtdM"),o("3xRUa"),o("8sx2c");const r=document.querySelector(".film-list");function l(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log(e)}}function c(e){let t=e.map(({poster_path:e,title:t,id:n,genres:o,release_date:a,vote_average:r})=>{let l;return l=o.length>2?`${o[0].name}, ${o[1].name}, Other`:`${o[0].name}, ${o[1].name}`,`<div class="movie-item", data-modal-open, data-id="${n}">
            <img src="https://image.tmdb.org/t/p/w500${e}" alt="${t}" loading="lazy" />
                <h2 class="">${t}</h2>
                <div class="content-wrapper">
                    <p> ${l}</p>
                    <p class="movie-year"> | ${new Date(a).getFullYear()}</p>
                    <p class="main-rating">${r.toFixed(1)}</p>
                </div>
                </div>`}).join("");r.insertAdjacentHTML("beforeend",t)}window.addEventListener("load",async()=>{if(JSON.parse(localStorage.getItem("queue"))||JSON.parse(localStorage.getItem("watched"))){let e=[...await l("queue"),...await l("watched")];console.log(e),c(e)}else r.insertAdjacentHTML("beforeend","Sorry, there is no films in your library")});const i=document.querySelector("#gueueButton"),d=document.querySelector(".film-list");i.addEventListener("click",async()=>{if(d.innerHTML="",JSON.parse(localStorage.getItem("queue"))){let e=await l("queue");console.log(e),c(e)}else d.insertAdjacentHTML("beforeend","Sorry, there is no films in your queue")});const s=document.querySelector("#watchedButton"),u=document.querySelector(".film-list");s.addEventListener("click",async()=>{if(u.innerHTML="",JSON.parse(localStorage.getItem("watched"))){let e=await l("watched");console.log(e),c(e)}else u.insertAdjacentHTML("beforeend","Sorry, there is no films in your watched")});
//# sourceMappingURL=my-library.e745e34d.js.map
