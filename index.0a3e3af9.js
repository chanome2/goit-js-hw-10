var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("9dxg1");document.addEventListener("DOMContentLoaded",(async()=>{const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),o=document.querySelector(".cat-info");try{t.style.display="block";(await(0,l.fetchBreeds)()).forEach((t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,e.appendChild(n)})),t.style.display="none",e.style.display="block",e.addEventListener("change",(async e=>{const r=e.target.value;t.style.display="block",o.innerHTML="";try{const[e]=await(0,l.fetchCatByBreed)(r),{url:d}=e,a=document.createElement("img");a.src=d,o.appendChild(a),t.style.display="none",o.style.display="block",n.style.display="none"}catch(e){console.error("Failed to fetch cat information:",e),t.style.display="none",e.style.display="block"}}))}catch(e){console.error("Failed to fetch cat breeds:",e),t.style.display="none",e.style.display="block"}}));
//# sourceMappingURL=index.0a3e3af9.js.map