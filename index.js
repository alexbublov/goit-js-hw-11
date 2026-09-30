import{a as u,S as p,i as a}from"./assets/vendor-tm_yTWj3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="57804854-ae4f724cdee310b4b8c1f8b5a",g=i=>u.get(`https://pixabay.com/api/?key=${d}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=new p(".gallery a"),y=i=>{const s=i.map(e=>`
        <li class="gallery-item">
        <a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}" />
            <ul class="image-info">
                <li class="image-info-item"><p class="image-info-label">Likes</p>
                <p class="image-info-value">${e.likes}</p></li>
                <li class="image-info-item"><p class="image-info-label">Views</p>
                <p class="image-info-value">${e.views}</p></li>
                <li class="image-info-item"><p class="image-info-label">Comments</p>
                <p class="image-info-value">${e.comments}</p></li>
                <li class="image-info-item"><p class="image-info-label">Downloads</p>
                <p class="image-info-value">${e.downloads}</p></li>
            </ul>
        </a>
        </li>
    `).join("");c.innerHTML=s,f.refresh()},h=()=>{c.innerHTML="",f.refresh()},L=()=>{m.classList.remove("hidden")},b=()=>{m.classList.add("hidden")};a.settings({timeout:3e3,position:"topRight"});const n=document.querySelector(".form");n.addEventListener("submit",i=>{i.preventDefault();const s=n.elements["search-text"].value.trim();s&&(h(),L(),g(s).then(({data:{hits:e}})=>{e.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):y(e)}).catch(e=>{a.error({title:"Error",message:e.message})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
