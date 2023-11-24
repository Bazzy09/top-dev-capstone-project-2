(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("search-result");const a=document.createElement("img");a.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",a.alt="Poster",a.id="poster";const c=document.createElement("h3");c.textContent=t.name||t.show.name||"Title N/A",c.classList.add("title"),c.id="title";const o=document.createElement("img");o.src="./img/like.png",o.alt="Like";const s=document.createElement("div");s.textContent="Like";const d=document.createElement("div");d.classList.add("counter"),d.textContent="";const i=document.createElement("button");i.textContent="Comment",i.classList.add("comment");const l=document.createElement("button");l.textContent="Reservations",l.classList.add("reservation");const r=document.createElement("div");r.classList.add("search-result-poster"),r.appendChild(a);const m=document.createElement("div");m.classList.add("search-result-name"),m.appendChild(c);const u=document.createElement("div");u.classList.add("reaction-action");const h=document.createElement("div");h.classList.add("likes"),h.appendChild(o),h.appendChild(s);const g=document.createElement("div");g.classList.add("reaction"),g.appendChild(h),g.appendChild(d);const p=document.createElement("div");p.classList.add("actions"),p.appendChild(i),p.appendChild(l),u.appendChild(g),u.appendChild(p),n.appendChild(r),n.appendChild(m),n.appendChild(u),n.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",function(e,t){const n=document.createElement("div");n.className="full-details";const a=document.createElement("div");a.className="image-card";const c=document.createElement("img");c.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",c.alt="show poster";const o=document.createElement("div");o.className="show-info";const s=document.createElement("h1");s.className="showTitle",s.textContent=t.name||t.show.name;const d=document.createElement("h3");d.className="year",d.textContent=`Ended: ${t.ended||t.show.ended||"N/A"}`;const i=document.createElement("h3");i.className="genre",i.textContent=t.genres?t.genres.join(", "):t.show.genres?t.show.genres.join(", "):"Genres N/A";const l=document.createElement("h3");l.className="language",l.textContent=`Language: ${t.language||t.show.language||"N/A"}`;const r=document.createElement("h3");r.className="rating",r.textContent=t.rating?.average?`Rating: ${t.rating.average}/10`:t.show.rating?.average?`Rating: ${t.show.rating.average}/10`:"Rating: N/A";const m=document.createElement("div");m.className="show-summary";const u=document.createElement("h2");u.className="plot",u.textContent="Plot Summary";const h=document.createElement("div");h.className="summary",h.innerHTML=t.summary||t.show.summary||"Summary N/A",m.appendChild(u),m.appendChild(h);const g=[s,d,i,l,r,m];for(let e=0;e<g.length;e+=1)o.appendChild(g[e]);a.appendChild(c),a.appendChild(o),n.appendChild(a),e.appendChild(n)}(e,t)})),e.appendChild(n)}async function t(){try{const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json(),a=Math.floor(200*Math.random());return n.slice(a,a+20).forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}function n(){window.addEventListener("load",(()=>{const e=document.querySelector("#loader");e.classList.add("loader-hidden"),e.addEventListener("transitionend",(()=>{document.body.removeChild("loader")}))}))}const a=document.querySelector(".hamburger"),c=document.querySelector(".nav-items"),o=document.querySelector(".search-button"),s=document.querySelectorAll("#tvshows"),d=document.querySelector("#home"),i=document.querySelector("#content");function l(){i.innerHTML=""}function r(){a.classList.remove("active"),c.classList.remove("active")}o.addEventListener("click",(async t=>{t.preventDefault(),l(),async function(){try{const t=document.getElementById("search").value,n="https://api.tvmaze.com/";if(""!==t)return async function(t){const n=await t.json();return t.ok?(console.log(n),n.forEach((t=>{e(content,t)})),n):(console.log(n.Error),n.Error)}(await fetch(`${n}search/shows?q=${t}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),s.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),l(),n(),async function(){try{console.log("Fetching TV shows...");const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json();return n.forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}()})))),d.addEventListener("click",(e=>{e.preventDefault(),l(),t()}));let m=document.getElementsByClassName("nav-link");function u(e){for(let e=0;e<m.length;e+=1)m[e].classList.remove("active");e.target.classList.add("active")}n(),t(),function(){for(let e=0;e<m.length;e+=1)m[e].addEventListener("click",u)}();const h=document.querySelector(".hamburger"),g=document.querySelectorAll(".nav-link");h.addEventListener("click",(function(){a.classList.toggle("active"),c.classList.toggle("active")})),g.forEach((e=>e.addEventListener("click",r))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||r()}))})();