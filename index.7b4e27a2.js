function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("9dxg1",(function(t,r){e(t.exports,"fetchBreeds",(function(){return i})),e(t.exports,"fetchCatByBreed",(function(){return a}));const n="live_TKxPA0ridpiNzCeFQnUquJtYRwhoDmiY5MiLIy5APquAz52ZDJYwE5cxlF7SKa6D";async function i(){try{return(await axios.get("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":n}})).data}catch(e){throw e}}async function a(e){try{return(await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":n}})).data}catch(e){throw e}}})),i("9dxg1");
//# sourceMappingURL=index.7b4e27a2.js.map
