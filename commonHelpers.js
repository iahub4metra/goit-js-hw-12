import{a as v,i as u,s as q}from"./assets/vendor-b16ce8bc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y=async(o,s,i)=>{try{return(await v.get("https://pixabay.com/api/",{params:{key:"43749964-78fe686efe4660c3d41d86a93",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:s}})).data}catch(t){console.log(t)}},g=(o,s)=>{if(o.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=o.map(t=>`<li class="list-item">
                    <a href="${t.largeImageURL}">
                        <img
                            src="${t.webformatURL}"
                            alt="${t.tags}"
                            class="image"
                        />
                    </a>
                    <div class="lower-box">
                        <div>
                            <h3 class="card-title">Likes</h3>
                            <p>${t.likes}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Views</h3>
                            <p>${t.views}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Comments</h3>
                            <p>${t.comments}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Downloads</h3>
                            <p>${t.downloads}</p>    
                        </div>
                    </div>
                </li>`).join("");s.insertAdjacentHTML("beforeend",i)},E=()=>{u.error({message:"Please fill the field!",position:"topRight"})},b=o=>{o.style.display="inline-block"},L=o=>{o.style.display="none"},P=()=>{u.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})};document.querySelector(".btnSubmit");const c=document.querySelector(".btn-load-more"),R=document.querySelector(".form"),$=document.querySelector("#inputSearch"),d=document.querySelector(".list"),f=document.querySelector(".loader"),h=document.querySelector(".loader-second"),S=new q(".list a",{sourceAttr:"href",animationSpeed:100,fadeSpeed:50,animationSlide:!1,scrollZoom:!1,captionsData:"alt",captionDelay:250});c.style.display="none";let n;const l=15;let m,p,w;R.addEventListener("submit",async o=>{o.preventDefault(),n=1;const s=$.value.trim();if(p=s,s==="")E();else{d.innerHTML="",b(f);try{const i=await y(p,n,l);g(i.hits,d),S.refresh(),w=i.totalHits,m=Math.ceil(i.totalHits/l),m>1?c.style.display="block":c.style.display="none"}finally{L(f)}}});c.addEventListener("click",async o=>{o.preventDefault(),n+=1;const s=w-(n-1)*l,i=s<l?s:l;b(h);try{const t=await y(p,n,i);g(t.hits,d),S.refresh();const a=document.querySelector(".list-item").getBoundingClientRect().height*3.5;if(window.scrollBy({top:a,left:0,behavior:"smooth"}),n>=m)return c.style.display="none",P()}finally{L(h)}});
//# sourceMappingURL=commonHelpers.js.map
