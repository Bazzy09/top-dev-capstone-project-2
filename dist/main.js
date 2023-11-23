(()=>{"use strict";function e(e,n){const c=document.createElement("div");c.classList.add("search-result");const a=document.createElement("img");a.src=n.image?n.image.medium:n.show.image?n.show.image.medium:"./img/placeholder.jpg",a.alt="Poster",a.id="poster";const o=document.createElement("h3");o.textContent=n.name||n.show.name||"Title N/A",o.classList.add("title"),o.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const m=document.createElement("div");m.textContent="Like";const l=document.createElement("div");l.textContent="3 likes",l.classList.add("likesCounter");const r=document.createElement("button");r.textContent="Comment",r.classList.add("comment");const d=document.createElement("button");d.textContent="Reservations",d.classList.add("reservation");const i=document.createElement("div");i.classList.add("search-result-poster"),i.appendChild(a);const u=document.createElement("div");u.classList.add("search-result-name"),u.appendChild(o);const h=document.createElement("div");h.classList.add("reaction-action");const p=document.createElement("div");p.classList.add("likes"),p.appendChild(s),p.appendChild(m);const g=document.createElement("div");g.classList.add("reaction"),g.appendChild(p),g.appendChild(l);const v=document.createElement("div");v.classList.add("actions"),v.appendChild(r),v.appendChild(d),h.appendChild(g),h.appendChild(v),c.appendChild(i),c.appendChild(u),c.appendChild(h),i.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",t(e,n)})),r.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",t(e,n),document.querySelector(".comment-form").classList.toggle("active")})),e.appendChild(c)}function t(e,t){const n=function(){const e=document.createElement("div");e.className="comment-log-section";const t=document.createElement("h2");t.className="comment-header",t.textContent="Comments";const n=document.createElement("div");return n.className="comment-records",e.appendChild(t),e.appendChild(n),e}(),c=function(){const e=document.createElement("form");e.action="",e.className="comment-form";const t=document.createElement("label");t.textContent="Date",t.for="comment-date";const n=document.createElement("input");n.style.display="none",n.type="text",n.id="comment-date";const c=new Date,a=c.getDate(),o=c.getMonth()+1,s=c.getFullYear(),m=`${a.toString().padStart(2,"0")}/${o.toString().padStart(2,"0")}/${s}`;n.value=m;const l=document.createElement("label");l.htmlFor="comment-username",l.className="comment-username",l.textContent="Name";const r=document.createElement("input");r.type="text",r.id="comment-username",r.placeholder="Your name";const d=document.createElement("label");d.htmlFor="comment-insights",d.className="comment-insights",d.textContent="Insights";const i=document.createElement("textarea");i.id="comment-insights",i.placeholder="Your insights",i.rows="6";const u=document.createElement("button");u.type="submit",u.className="submit-comment",u.textContent="Comment";const h=[n,l,r,d,i,u];for(let t=0;t<h.length;t+=1)e.appendChild(h[t]);return e}(),a=document.createElement("div");a.className="full-details";const o=document.createElement("div");o.className="image-card";const s=document.createElement("img");s.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",s.alt="show poster";const m=document.createElement("div");m.className="show-info";const l=document.createElement("h1");l.className="showTitle",l.textContent=t.name||t.show.name;const r=document.createElement("h3");r.className="year",r.textContent=`Ended: ${t.ended||t.show.ended||"N/A"}`;const d=document.createElement("h3");d.className="genre",d.textContent=t.genres?t.genres.join(", "):t.show.genres?t.show.genres.join(", "):"Genres N/A";const i=document.createElement("h3");i.className="language",i.textContent=`Language: ${t.language||t.show.language||"N/A"}`;const u=document.createElement("h3");u.className="rating",u.textContent=t.rating?.average?`Rating: ${t.rating.average}/10`:t.show.rating?.average?`Rating: ${t.show.rating.average}/10`:"Rating: N/A";const h=document.createElement("div");h.className="show-summary";const p=document.createElement("h2");p.className="plot",p.textContent="Plot Summary";const g=document.createElement("div");g.className="summary",g.innerHTML=t.summary||t.show.summary||"Summary N/A",h.appendChild(p),h.appendChild(g);const v=[l,r,d,i,u,h];for(let e=0;e<v.length;e+=1)m.appendChild(v[e]);o.appendChild(s),o.appendChild(m),a.appendChild(o),a.appendChild(n),a.appendChild(c),e.appendChild(a),document.querySelector(".submit-comment").addEventListener("click",(e=>{console.log("clicked"),e.preventDefault(),function(){const e=document.querySelector(".comment-records"),t=document.querySelector("#comment-date"),n=document.querySelector("#comment-username"),c=document.querySelector("#comment-insights"),a=document.createElement("p");a.className="new=record",a.textContent=`${t.value}   ${n.value}: ${c.value}`,e.appendChild(a)}()}))}async function n(){try{const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json(),c=Math.floor(200*Math.random());return n.slice(c,c+20).forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}const c=document.querySelector(".hamburger"),a=document.querySelector(".nav-items"),o=document.querySelector(".search-button"),s=document.querySelectorAll("#tvshows"),m=document.querySelector("#home"),l=document.querySelector("#content");function r(){l.innerHTML=""}function d(){c.classList.remove("active"),a.classList.remove("active")}o.addEventListener("click",(t=>{t.preventDefault(),r(),async function(){try{const t=document.getElementById("search").value,n="https://api.tvmaze.com/";if(""!==t)return async function(t){const n=await t.json();return t.ok?(console.log(n),n.forEach((t=>{e(content,t)})),n):(console.log(n.Error),n.Error)}(await fetch(`${n}search/shows?q=${t}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),s.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),r(),async function(){try{console.log("Fetching TV shows...");const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json();return n.forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}()})))),m.addEventListener("click",(e=>{e.preventDefault(),r(),n()}));const i=document.getElementsByClassName("nav-link");function u(e){for(let e=0;e<i.length;e+=1)i[e].classList.remove("active");e.target.classList.add("active")}n(),function(){for(let e=0;e<i.length;e+=1)i[e].addEventListener("click",u)}();const h=document.querySelector(".hamburger"),p=document.querySelectorAll(".nav-link");h.addEventListener("click",(function(){c.classList.toggle("active"),a.classList.toggle("active")})),p.forEach((e=>e.addEventListener("click",d))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||d()}))})();