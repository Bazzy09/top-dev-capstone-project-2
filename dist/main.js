(()=>{"use strict";let e=[];!function(){const t=JSON.parse(localStorage.getItem("commentStore"))||[];e=t}();class t{constructor(e,t,n,c){this.date=e,this.name=t,this.insight=n,this.movieId=c}}function n(e,t){const n=document.createElement("div");n.classList.add("search-result");const o=document.createElement("img");o.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",o.alt="Poster",o.id="poster";const a=document.createElement("h3");a.textContent=t.name||t.show.name||"Title N/A",a.classList.add("title"),a.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const m=document.createElement("div");m.textContent="Like";const l=document.createElement("div");l.textContent="3 likes",l.classList.add("likesCounter");const r=document.createElement("button");r.textContent="Comment",r.classList.add("comment");const i=document.createElement("button");i.textContent="Reservations",i.classList.add("reservation");const d=document.createElement("div");d.classList.add("search-result-poster"),d.appendChild(o);const u=document.createElement("div");u.classList.add("search-result-name"),u.appendChild(a);const h=document.createElement("div");h.classList.add("reaction-action");const g=document.createElement("div");g.classList.add("likes"),g.appendChild(s),g.appendChild(m);const p=document.createElement("div");p.classList.add("reaction"),p.appendChild(g),p.appendChild(l);const v=document.createElement("div");v.classList.add("actions"),v.appendChild(r),v.appendChild(i),h.appendChild(p),h.appendChild(v),n.appendChild(d),n.appendChild(u),n.appendChild(h),d.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",c(e,t)})),r.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",c(e,t),document.querySelector(".comment-form").classList.toggle("active")})),e.appendChild(n)}function c(n,c){const o=function(){const e=document.createElement("div");e.className="comment-log-section";const t=document.createElement("h2");t.className="comment-header",t.textContent="Comments";const n=document.createElement("div");return n.className="comment-records",e.appendChild(t),e.appendChild(n),e}(),a=function(){const e=document.createElement("form");e.action="",e.className="comment-form";const t=document.createElement("label");t.textContent="Date",t.for="comment-date";const n=document.createElement("input");n.style.display="none",n.type="text",n.id="comment-date";const c=new Date,o=c.getDate(),a=c.getMonth()+1,s=c.getFullYear(),m=`${o.toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${s}`;n.value=m;const l=document.createElement("label");l.htmlFor="comment-username",l.className="comment-username",l.textContent="Name";const r=document.createElement("input");r.type="text",r.id="comment-username",r.placeholder="Your name",r.required=!0;const i=document.createElement("label");i.htmlFor="comment-insights",i.className="comment-insights",i.textContent="Insights";const d=document.createElement("textarea");d.id="comment-insights",d.placeholder="Your insights",d.rows="6",d.required=!0;const u=document.createElement("button");u.type="submit",u.className="submit-comment",u.textContent="Comment";const h=[n,l,r,i,d,u];for(let t=0;t<h.length;t+=1)e.appendChild(h[t]);return e}(),s=document.createElement("div");s.className="full-details";const m=document.createElement("div");m.className="image-card";const l=document.createElement("img");l.src=c.image?c.image.medium:c.show.image?c.show.image.medium:"./img/placeholder.jpg",l.alt="show poster";const r=document.createElement("div");r.className="show-info";const i=document.createElement("h1");i.className="showId",i.style.display="none",i.textContent=c.id||c.show.id;const d=document.createElement("h1");d.className="showTitle",d.textContent=c.name||c.show.name;const u=document.createElement("h3");u.className="year",u.textContent=`Ended: ${c.ended||c.show.ended||"N/A"}`;const h=document.createElement("h3");h.className="genre",h.textContent=c.genres?c.genres.join(", "):c.show.genres?c.show.genres.join(", "):"Genres N/A";const g=document.createElement("h3");g.className="language",g.textContent=`Language: ${c.language||c.show.language||"N/A"}`;const p=document.createElement("h3");p.className="rating",p.textContent=c.rating?.average?`Rating: ${c.rating.average}/10`:c.show.rating?.average?`Rating: ${c.show.rating.average}/10`:"Rating: N/A";const v=document.createElement("div");v.className="show-summary";const E=document.createElement("h2");E.className="plot",E.textContent="Plot Summary";const C=document.createElement("div");C.className="summary",C.innerHTML=c.summary||c.show.summary||"Summary N/A",v.appendChild(E),v.appendChild(C);const f=[i,d,u,h,g,p,v];for(let e=0;e<f.length;e+=1)r.appendChild(f[e]);m.appendChild(l),m.appendChild(r),s.appendChild(m),s.appendChild(o),s.appendChild(a),n.appendChild(s),document.querySelector(".comment-form").addEventListener("submit",(n=>{console.log("clicked"),n.preventDefault(),function(){let n=document.querySelector("#comment-date").value,c=document.querySelector("#comment-username").value,o=document.querySelector("#comment-insights").value,a=document.querySelector(".showId").textContent,s=new t(n,c,o,a);e.push(s),function(t){let n=document.querySelector(".comment-records");n.innerHTML="";const c=e.filter((e=>e.movieId===t));for(let e=0;e<c.length;e+=1){const t=c[e],o=document.createElement("p");o.className="new-record",o.textContent=`${t.date} ${t.name}: ${t.insight}`,n.appendChild(o)}}(a),localStorage.setItem("commentStore",JSON.stringify(e))}()}))}async function o(){try{const e=await fetch("https://api.tvmaze.com/shows"),t=await e.json(),c=Math.floor(200*Math.random());return t.slice(c,c+20).forEach((e=>{n(content,e)})),t}catch(e){return console.log(e),e}}const a=document.querySelector(".hamburger"),s=document.querySelector(".nav-items"),m=document.querySelector(".search-button"),l=document.querySelectorAll("#tvshows"),r=document.querySelector("#home"),i=document.querySelector("#content");function d(){i.innerHTML=""}function u(){a.classList.remove("active"),s.classList.remove("active")}m.addEventListener("click",(e=>{e.preventDefault(),d(),async function(){try{const e=document.getElementById("search").value,t="https://api.tvmaze.com/";if(""!==e)return async function(e){const t=await e.json();return e.ok?(console.log(t),t.forEach((e=>{n(content,e)})),t):(console.log(t.Error),t.Error)}(await fetch(`${t}search/shows?q=${e}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),l.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),d(),async function(){try{console.log("Fetching TV shows...");const e=await fetch("https://api.tvmaze.com/shows"),t=await e.json();return t.forEach((e=>{n(content,e)})),t}catch(e){return console.log(e),e}}()})))),r.addEventListener("click",(e=>{e.preventDefault(),d(),o()}));const h=document.getElementsByClassName("nav-link");function g(e){for(let e=0;e<h.length;e+=1)h[e].classList.remove("active");e.target.classList.add("active")}o(),function(){for(let e=0;e<h.length;e+=1)h[e].addEventListener("click",g)}();const p=document.querySelector(".hamburger"),v=document.querySelectorAll(".nav-link");p.addEventListener("click",(function(){a.classList.toggle("active"),s.classList.toggle("active")})),v.forEach((e=>e.addEventListener("click",u))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||u()}))})();