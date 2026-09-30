import{a as u,S as d,i as n}from"./assets/vendor-tm_yTWj3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="57804854-ae4f724cdee310b4b8c1f8b5a",g=i=>u.get(`https://pixabay.com/api/?key=${p}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=new d(".gallery a"),y=i=>{const r=i.map(t=>`
        <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}" />
            <ul class="image-info">
                <li class="image-info-item"><p class="image-info-label">Likes</p>
                <p class="image-info-value">${t.likes}</p></li>
                <li class="image-info-item"><p class="image-info-label">Views</p>
                <p class="image-info-value">${t.views}</p></li>
                <li class="image-info-item"><p class="image-info-label">Comments</p>
                <p class="image-info-value">${t.comments}</p></li>
                <li class="image-info-item"><p class="image-info-label">Downloads</p>
                <p class="image-info-value">${t.downloads}</p></li>
            </ul>
        </a>
        </li>
    `).join("");c.innerHTML=r,f.refresh()},h=()=>{c.innerHTML="",f.refresh()},L=()=>{m.classList.remove("hidden")},b=()=>{m.classList.add("hidden")};n.settings({timeout:3e3,position:"topRight"});const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(h(),L(),g(r).then(t=>{y(t.data.hits),t.data.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
