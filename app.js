function A(){let e=document.getElementById("burger"),t=document.getElementById("nav");if(!e||!t)return;let n=s=>{t.classList.toggle("header__nav--open",s),e.classList.toggle("header__burger--open",s),e.setAttribute("aria-expanded",String(s)),document.body.style.overflow=s?"hidden":""};e.addEventListener("click",()=>n(!t.classList.contains("header__nav--open"))),t.addEventListener("click",s=>{s.target.closest("a")&&n(!1)}),document.addEventListener("click",s=>{t.classList.contains("header__nav--open")&&(s.target.closest("#nav")||s.target.closest("#burger")||n(!1))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&n(!1)}),window.addEventListener("resize",()=>{window.innerWidth>820&&n(!1)})}var ne="rentier-theme";function j(){let e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t,localStorage.setItem(ne,t)})}function P(e){let t=document.getElementById("c-phone"),n=document.getElementById("c-email"),s=document.getElementById("socials"),i=String(e.contacts_phone_enabled)!=="false"&&!!e.phone,a=String(e.contacts_email_enabled)!=="false"&&!!e.email,c=String(e.contacts_instagram_enabled)!=="false"&&!!e.instagram,r=String(e.contacts_telegram_enabled)!=="false"&&!!e.telegram;t&&(i?(t.style.display="",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg><a href="tel:${e.phone.replace(/[^\d+]/g,"")}">${e.phone}</a>`):(t.style.display="none",t.innerHTML="")),n&&(a?(n.style.display="",n.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><a href="mailto:${e.email}">${e.email}</a>`):(n.style.display="none",n.innerHTML="")),s&&(s.innerHTML="",c&&(s.innerHTML+=`<a class="contacts__social-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a>`),r&&(s.innerHTML+=`<a class="contacts__social-link" href="${e.telegram}" target="_blank" rel="noopener">Telegram</a>`),s.style.display=s.innerHTML?"":"none")}function q(e,t=[]){let n=(c,r)=>{let l=document.getElementById(c);l&&r!=null&&(l.textContent=r)},s=(c,r,l)=>{let u=document.getElementById(c);u&&(u.setAttribute("href",r||"#"),l&&(u.textContent=l))};n("hero-eyebrow",e.hero_eyebrow),n("hero-title-prefix",e.hero_title_prefix),n("hero-title-em",e.hero_title_em),n("hero-subtitle",e.hero_subtitle),s("hero-btn1",e.hero_btn1_link,e.hero_btn1_text),s("hero-btn2",e.hero_btn2_link,e.hero_btn2_text);let i=String(e.hero_stat1_value);n("hero-stat1-value",i==="auto"?String(t.length):i),n("hero-stat1-label",e.hero_stat1_label),n("hero-stat2-value",e.hero_stat2_value),n("hero-stat2-label",e.hero_stat2_label),n("hero-stat3-value",e.hero_stat3_value),n("hero-stat3-label",e.hero_stat3_label);let a=document.getElementById("site-title-text");a&&(a.textContent=e.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435"),e.site_title&&(document.title=e.site_title)}function O(e){let t=document.getElementById("footer-legal");t&&(t.innerHTML=`${e.legal_name||""}<br>${e.legal_address||""}`);let n=document.getElementById("footer-year");n&&(n.textContent="\xA9 "+new Date().getFullYear()+" \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.")}var ie={basic:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",kitchen:"\u041A\u0443\u0445\u043D\u044F",bathroom:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",bath:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",parking:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",building:"\u0414\u043E\u043C \u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",leisure:"\u0414\u043E\u0441\u0443\u0433 \u0440\u044F\u0434\u043E\u043C",rules:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",other:"\u0414\u0440\u0443\u0433\u043E\u0435"},R=["basic","kitchen","bathroom","bath","parking","building","leisure","rules","other"],se={bath:"bathroom",building:"parking",rules:"other"},M={},z=!1,N=null;async function F(){return z?M:N||(N=(async()=>{try{let e=await fetch("data/icons.json");e.ok&&(M=await e.json(),z=!0)}catch(e){console.warn("icons.json \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D",e)}return M})(),N)}function ae(e){return M[e]||M.default||""}function x(e,t="amenity-icon"){return`<span class="${t}" data-icon="${e}"></span>`}function y(e=document){e.querySelectorAll("[data-icon]").forEach(n=>{let s=n.getAttribute("data-icon");n.innerHTML=ae(s)})}function E(e){return e?typeof e=="string"?e:e.slug||e.icon||"default":"default"}function L(e){return e?typeof e=="string"?e:e.label||e.slug||e.icon||"":""}function re(e){if(e&&typeof e=="object"&&e.category){let t=String(e.category).toLowerCase();return se[t]||t}return"other"}function Y(e){let t={};return(e||[]).forEach(n=>{let s=re(n);t[s]||(t[s]=[]),t[s].push(n)}),Object.entries(t).sort((n,s)=>{let i=R.indexOf(n[0]),a=R.indexOf(s[0]);return(i===-1?999:i)-(a===-1?999:a)}).map(([n,s])=>({category:n,title:ie[n]||"\u0414\u0440\u0443\u0433\u043E\u0435",items:s}))}var U="https://nominatim.openstreetmap.org/search",le="27.35,53.99,27.75,53.83";async function oe(e){let t=e.replace(/[.,]/g," ").replace(/\b(улица|ул|пр-т|проспект|пр|пер|переулок|бульвар|б-р|пл|площадь|д|дом)\b\.?/gi," ").replace(/\s+/g," ").trim(),n=[],s=t.match(/^(.+?)\s+(\d+[\w\-/]*)$/);s?(n.push({street:`${s[2]} ${s[1]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),n.push({street:`${s[1]} ${s[2]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),n.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`}),n.push({street:s[1],city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"})):(n.push({street:t,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),n.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`})),n.push({city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"});for(let i of n){let a=new URLSearchParams({format:"json",limit:"1",addressdetails:"1","accept-language":"ru"});i.street&&a.set("street",i.street),i.city&&a.set("city",i.city),i.country&&a.set("country",i.country),i.q&&a.set("q",i.q),a.set("viewbox",le),a.set("bounded","1");try{let r=await(await fetch(`${U}?${a}`)).json();if(Array.isArray(r)&&r.length)return{lat:Number(r[0].lat),lng:Number(r[0].lon),label:r[0].display_name}}catch(c){console.warn("geocode error",i,c)}}try{let i=new URLSearchParams({format:"json",limit:"1","accept-language":"ru",q:`${t}, \u041C\u0438\u043D\u0441\u043A`}),a=await(await fetch(`${U}?${i}`)).json();if(Array.isArray(a)&&a.length)return{lat:Number(a[0].lat),lng:Number(a[0].lon),label:a[0].display_name}}catch{}return null}function B(e,t){let n=document.getElementById("filters");if(!n)return;let s=document.getElementById("f-address"),i=document.getElementById("f-radius"),a=document.getElementById("f-geocode"),c=document.getElementById("f-geocode-hint"),r=document.getElementById("f-lat"),l=document.getElementById("f-lng"),u,g=()=>{let o={};return document.querySelectorAll("#filters input, #filters select").forEach(p=>{p.name&&p.value!==""&&(o[p.name]=p.value)}),o},m=()=>{let o=g();o.lat&&o.lng&&o.radius?delete o.q:(delete o.lat,delete o.lng,delete o.radius),e(o)},d=()=>{clearTimeout(u),u=setTimeout(m,300)},f=async()=>{let o=(s.value||"").trim();if(!o){r&&(r.value=""),l&&(l.value=""),c&&(c.textContent=""),t&&t(null),m();return}c&&(c.textContent="\u041F\u043E\u0438\u0441\u043A \u0430\u0434\u0440\u0435\u0441\u0430...");let p=await oe(o);if(!p){c&&(c.textContent="\u0410\u0434\u0440\u0435\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \xAB\u0443\u043B\u0438\u0446\u0430 + \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430\xBB."),r&&(r.value=""),l&&(l.value=""),t&&t(null);return}r&&(r.value=p.lat),l&&(l.value=p.lng),c&&(c.textContent=`\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ${p.label}`),i&&!Number(i.value)&&(i.value="1"),t&&t({lat:p.lat,lng:p.lng,radius:Number(i.value)}),m()};a&&a.addEventListener("click",f),n.addEventListener("submit",o=>{o.preventDefault(),f()}),n.addEventListener("change",d),n.addEventListener("input",o=>{o.target===s||o.target===i||d()}),i&&i.addEventListener("change",()=>{let o=g();o.lat&&o.lng&&t&&t({lat:Number(o.lat),lng:Number(o.lng),radius:Number(o.radius)}),m()}),n.addEventListener("reset",()=>setTimeout(()=>{r&&(r.value=""),l&&(l.value=""),c&&(c.textContent=""),t&&t(null),m()},0))}var ce="https://tiles.openfreemap.org/styles/positron";function T(e,t=[27.5667,53.9],n=11){let s=document.getElementById(e);if(!s)return null;let i=new maplibregl.Map({container:s,style:ce,center:t,zoom:n,attributionControl:{compact:!0}});i.addControl(new maplibregl.NavigationControl({showCompass:!1}),"top-right");let a=()=>{s.style.width="",i.resize()};return requestAnimationFrame(()=>requestAnimationFrame(a)),i.on("load",a),"ResizeObserver"in window&&new ResizeObserver(a).observe(s.parentElement||s),i}function W(e=!1){let t=document.createElement("button");return t.className="map-pin"+(e?" map-pin--active":""),t.setAttribute("aria-label","\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430"),t}function de(){let e=document.createElement("div");return e.className="map-pin map-pin--center",e.style.background="var(--color-accent)",e.style.width="30px",e.style.height="30px",e}function me(e){let t=e.main_image||e.images&&e.images[0],n=t?`<img class="pin-popup__image" src="${t}" alt="">`:`<div class="pin-popup__image pin-popup__image--placeholder">${e.rooms}-\u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>`;return`
    <a class="pin-popup" href="#/apartment?id=${e.id}">
      ${n}
      <div class="pin-popup__body">
        <div class="pin-popup__price">${h(e.price)}</div>
        <div class="pin-popup__title">${e.title}</div>
        <div class="pin-popup__meta">${e.rooms} \u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>
        <span class="pin-popup__link">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192</span>
      </div>
    </a>`}function G(e,t,{fit:n=!0}={}){let s=[];if(t.forEach(i=>{let a=new maplibregl.Marker({element:W()}).setLngLat([Number(i.lng),Number(i.lat)]).setPopup(new maplibregl.Popup({offset:24,maxWidth:"260px"}).setHTML(me(i))).addTo(e);s.push(a)}),n&&t.length){let i=new maplibregl.LngLatBounds;t.forEach(a=>i.extend([Number(a.lng),Number(a.lat)])),requestAnimationFrame(()=>e.fitBounds(i,{padding:60,maxZoom:13,duration:600}))}return s}function J(e,t){let n=new maplibregl.Marker({element:W(!0)}).setLngLat([Number(t.lng),Number(t.lat)]).addTo(e);return requestAnimationFrame(()=>e.jumpTo({center:[Number(t.lng),Number(t.lat)],zoom:15})),n}var w=null,k=null;function X(e,t,n,s){if(!e)return;let i=[Number(n),Number(t)],a=Number(s);w&&w.remove(),w=new maplibregl.Marker({element:de()}).setLngLat(i).addTo(e),k&&(e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),k=null);let c=64,r=[],u=a/6371;for(let d=0;d<=c;d++){let f=d*360/c*Math.PI/180,o=t*Math.PI/180,p=n*Math.PI/180,$=Math.asin(Math.sin(o)*Math.cos(u)+Math.cos(o)*Math.sin(u)*Math.cos(f)),_=p+Math.atan2(Math.sin(f)*Math.sin(u)*Math.cos(o),Math.cos(u)-Math.sin(o)*Math.sin($));r.push([_*180/Math.PI,$*180/Math.PI])}let g={type:"Feature",geometry:{type:"Polygon",coordinates:[r]}};e.addSource("search-radius",{type:"geojson",data:g}),e.addLayer({id:"search-radius-fill",type:"fill",source:"search-radius",paint:{"fill-color":"#6b8f71","fill-opacity":.12}}),e.addLayer({id:"search-radius-line",type:"line",source:"search-radius",paint:{"line-color":"#6b8f71","line-width":2,"line-dasharray":[3,2]}}),k=!0;let m=r.reduce((d,f)=>d.extend(f),new maplibregl.LngLatBounds(r[0],r[0]));e.fitBounds(m,{padding:40,duration:500})}function D(e){e&&(w&&(w.remove(),w=null),e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),k=null)}function h(e){return new Intl.NumberFormat("ru-BY").format(e)+" BYN"}function ue(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function pe(e){let t=document.createElement("a");t.className="card",t.href=`#/apartment?id=${e.id}`;let n=(e.amenities||[]).slice(0,3).map(s=>`<span class="amenities__item">${x(E(s))}<span>${L(s)}</span></span>`).join("");return t.innerHTML=`
    <div class="card__image-wrap">
      ${ue(e)}
      <span class="card__badge">${e.rooms}-\u043A\u043E\u043C\u043D.</span>
    </div>
    <div class="card__body">
      <div class="card__price">${h(e.price)} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>
      <div class="card__title">${e.title} \xB7 ${e.address}</div>
      <div class="card__meta">
        <span>${e.area} \u043C\xB2</span>
        <span>${e.floor?e.floor+"/"+(e.floors_total||"?")+" \u044D\u0442.":""}</span>
      </div>
      ${n?`<div class="card__amenities">${n}</div>`:""}
    </div>`,t}function fe(e,t,n){if(t.innerHTML="",!e.length){t.innerHTML='<p style="color:var(--color-muted);">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.</p>';return}(n?e.slice(0,n):e).forEach(i=>t.appendChild(pe(i))),y(t)}function _e(e,t){return e.filter(n=>{if(t.minPrice&&n.price<Number(t.minPrice)||t.maxPrice&&n.price>Number(t.maxPrice))return!1;if(t.rooms){let s=Number(t.rooms);if(s>=4?n.rooms<s:n.rooms!==s)return!1}if(t.minArea&&n.area<Number(t.minArea)||t.guests&&(n.max_guests||0)<Number(t.guests))return!1;if(t.q){let s=t.q.toLowerCase();if(!`${n.address} ${n.title}`.toLowerCase().includes(s))return!1}if(t.lat&&t.lng&&t.radius){let i=l=>l*Math.PI/180,a=i(n.lat-Number(t.lat)),c=i(n.lng-Number(t.lng)),r=Math.sin(a/2)**2+Math.cos(i(Number(t.lat)))*Math.cos(i(n.lat))*Math.sin(c/2)**2;if(2*6371*Math.asin(Math.sqrt(r))>Number(t.radius))return!1}return!0})}async function K(e,{settings:t,allApartments:n}){e.innerHTML=`
    <section class="banner container">
      <div class="banner__inner">
        <div>
          <span class="banner__eyebrow" id="hero-eyebrow"></span>
          <h1 class="banner__title">
            <span id="hero-title-prefix"></span> <em id="hero-title-em"></em>
          </h1>
          <p class="banner__subtitle" id="hero-subtitle"></p>
          <div class="banner__actions">
            <a class="btn btn--primary" id="hero-btn1" href="#/apartments"></a>
            <a class="btn btn--ghost" id="hero-btn2" href="#/contacts"></a>
          </div>
          <div class="banner__stats">
            <div class="banner__stat"><div class="banner__stat-value" id="hero-stat1-value"></div><div class="banner__stat-label" id="hero-stat1-label"></div></div>
            <div class="banner__stat"><div class="banner__stat-value" id="hero-stat2-value"></div><div class="banner__stat-label" id="hero-stat2-label"></div></div>
            <div class="banner__stat"><div class="banner__stat-value" id="hero-stat3-value"></div><div class="banner__stat-label" id="hero-stat3-label"></div></div>
          </div>
        </div>
        <div class="banner__art" aria-hidden="true"></div>
      </div>
    </section>

    <section class="map-section" id="map-section">
      <div class="container">
        <h2 class="map-section__title">\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435</h2>
        <div id="map" class="map"></div>
      </div>
    </section>

    <section class="container" id="apartments">
      <form class="filters" id="filters">
        <div class="filters__row">
          <div class="filters__field"><label class="filters__label">\u0426\u0435\u043D\u0430 \u043E\u0442, BYN</label><input class="filters__input" name="minPrice" type="number" min="0"></div>
          <div class="filters__field"><label class="filters__label">\u0426\u0435\u043D\u0430 \u0434\u043E, BYN</label><input class="filters__input" name="maxPrice" type="number" min="0"></div>
          <div class="filters__field">
            <label class="filters__label">\u041A\u043E\u043C\u043D\u0430\u0442</label>
            <select class="filters__select" name="rooms"><option value="">\u041B\u044E\u0431\u043E\u0435</option><option>1</option><option>2</option><option>3</option><option>4</option></select>
          </div>
          <div class="filters__field"><label class="filters__label">\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0442, \u043C\xB2</label><input class="filters__input" name="minArea" type="number" min="0"></div>
          <div class="filters__field"><label class="filters__label">\u0413\u043E\u0441\u0442\u0435\u0439</label><input class="filters__input" name="guests" type="number" min="1"></div>
        </div>
        <div class="filters__row">
          <div class="filters__field filters__field--wide"><label class="filters__label">\u0410\u0434\u0440\u0435\u0441</label><input class="filters__input" id="f-address" name="q" type="text" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041D\u0435\u043C\u0438\u0433\u0430 12"></div>
          <div class="filters__field"><label class="filters__label">\u0420\u0430\u0434\u0438\u0443\u0441, \u043A\u043C</label><input class="filters__input" id="f-radius" name="radius" type="number" step="0.1" min="0.1"></div>
          <button type="button" class="filters__reset" id="f-geocode">\u041D\u0430\u0439\u0442\u0438 \u0430\u0434\u0440\u0435\u0441</button>
          <button type="reset" class="filters__reset">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C</button>
        </div>
        <div class="filters-advanced__hint" id="f-geocode-hint"></div>
        <input type="hidden" name="lat" id="f-lat">
        <input type="hidden" name="lng" id="f-lng">
      </form>

      <div class="grid" id="grid"></div>
      <div class="grid__more" id="grid-more" hidden><a class="btn btn--primary" href="#/apartments">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</a></div>
    </section>

    <section class="contacts" id="contacts">
      <div class="container contacts__grid contacts__grid--single">
        <div>
          <h2 class="contacts__title">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h2>
          <p class="contacts__text">\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, e-mail \u0438\u043B\u0438 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445.</p>
          <ul class="contacts__list">
            <li class="contacts__item" id="c-phone"></li>
            <li class="contacts__item" id="c-email"></li>
          </ul>
          <div class="contacts__socials" id="socials"></div>
        </div>
      </div>
    </section>
  `,q(t,n);let s={"@context":"https://schema.org","@type":"RealEstateAgent",name:t.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",description:t.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430.",url:location.origin+"/",areaServed:{"@type":"City",name:"\u041C\u0438\u043D\u0441\u043A"},numberOfAccommodationUnits:n.length},i=document.createElement("script");i.type="application/ld+json",i.setAttribute("data-jsonld","1"),i.textContent=JSON.stringify(s),document.head.appendChild(i);let a=document.getElementById("grid"),c=document.getElementById("grid-more"),r=T("map"),l=[],u=Math.max(Number(t.home_grid_limit)||6,1),g=m=>{let d=_e(n,m);fe(d,a,u),c.hidden=d.length<=u,r&&(l.forEach(f=>f.remove()),l=G(r,d,{fit:d.length>0}))};B(g,m=>{if(r){if(!m){D(r);return}X(r,m.lat,m.lng,m.radius)}}),g({})}function ge(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function he(e){let t=document.createElement("a");t.className="card",t.href=`#/apartment?id=${e.id}`;let n=(e.amenities||[]).slice(0,3).map(s=>`<span class="amenities__item">${x(E(s))}<span>${L(s)}</span></span>`).join("");return t.innerHTML=`
    <div class="card__image-wrap">
      ${ge(e)}
      <span class="card__badge">${e.rooms}-\u043A\u043E\u043C\u043D.</span>
    </div>
    <div class="card__body">
      <div class="card__price">${h(e.price)} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>
      <div class="card__title">${e.title} \xB7 ${e.address}</div>
      <div class="card__meta">
        <span>${e.area} \u043C\xB2</span>
        <span>${e.floor?e.floor+"/"+(e.floors_total||"?")+" \u044D\u0442.":""}</span>
      </div>
      ${n?`<div class="card__amenities">${n}</div>`:""}
    </div>`,t}function ve(e,t){return e.filter(n=>{if(t.minPrice&&n.price<Number(t.minPrice)||t.maxPrice&&n.price>Number(t.maxPrice))return!1;if(t.rooms){let s=Number(t.rooms);if(s>=4?n.rooms<s:n.rooms!==s)return!1}if(t.minArea&&n.area<Number(t.minArea)||t.guests&&(n.max_guests||0)<Number(t.guests))return!1;if(t.q){let s=t.q.toLowerCase();if(!`${n.address} ${n.title}`.toLowerCase().includes(s))return!1}if(t.lat&&t.lng&&t.radius){let i=l=>l*Math.PI/180,a=i(n.lat-Number(t.lat)),c=i(n.lng-Number(t.lng)),r=Math.sin(a/2)**2+Math.cos(i(Number(t.lat)))*Math.cos(i(n.lat))*Math.sin(c/2)**2;if(2*6371*Math.asin(Math.sqrt(r))>Number(t.radius))return!1}return!0})}async function V(e,{settings:t,allApartments:n}){let s=location.origin;document.title="\u0412\u0441\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u2014 "+(t.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440");let i=document.querySelector('meta[name="description"]');i&&(i.content=`\u0412\u0441\u0435 ${n.length} \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435. \u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0446\u0435\u043D\u0435, \u043A\u043E\u043C\u043D\u0430\u0442\u0430\u043C, \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u0435. \u0411\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438.`);let a=document.querySelector('link[rel="canonical"]');a||(a=document.createElement("link"),a.rel="canonical",document.head.appendChild(a)),a.href=s+"/#/apartments";let c={"@context":"https://schema.org","@type":"ItemList",numberOfItems:n.length,itemListElement:n.slice(0,20).map((_,H)=>({"@type":"ListItem",position:H+1,url:s+"/#/apartment?id="+_.id,name:_.title}))},r=document.createElement("script");r.type="application/ld+json",r.setAttribute("data-jsonld","1"),r.textContent=JSON.stringify(c),document.head.appendChild(r),e.innerHTML=`
    <div class="container" style="padding:32px 0 64px;">
      <h1 class="map-section__title" style="margin-bottom:20px;">\u0412\u0441\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u0430\u0440\u0435\u043D\u0434\u0443</h1>

      <form class="filters" id="filters">
        <div class="filters__row">
          <div class="filters__field"><label class="filters__label">\u0426\u0435\u043D\u0430 \u043E\u0442, BYN</label><input class="filters__input" name="minPrice" type="number" min="0"></div>
          <div class="filters__field"><label class="filters__label">\u0426\u0435\u043D\u0430 \u0434\u043E, BYN</label><input class="filters__input" name="maxPrice" type="number" min="0"></div>
          <div class="filters__field">
            <label class="filters__label">\u041A\u043E\u043C\u043D\u0430\u0442</label>
            <select class="filters__select" name="rooms"><option value="">\u041B\u044E\u0431\u043E\u0435</option><option>1</option><option>2</option><option>3</option><option>4</option></select>
          </div>
          <div class="filters__field"><label class="filters__label">\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0442, \u043C\xB2</label><input class="filters__input" name="minArea" type="number" min="0"></div>
          <div class="filters__field"><label class="filters__label">\u0413\u043E\u0441\u0442\u0435\u0439</label><input class="filters__input" name="guests" type="number" min="1"></div>
        </div>
        <div class="filters__row">
          <div class="filters__field filters__field--wide"><label class="filters__label">\u0410\u0434\u0440\u0435\u0441</label><input class="filters__input" id="f-address" name="q" type="text" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041D\u0435\u043C\u0438\u0433\u0430 12"></div>
          <div class="filters__field"><label class="filters__label">\u0420\u0430\u0434\u0438\u0443\u0441, \u043A\u043C</label><input class="filters__input" id="f-radius" name="radius" type="number" step="0.1" min="0.1"></div>
          <button type="button" class="filters__reset" id="f-geocode">\u041D\u0430\u0439\u0442\u0438 \u0430\u0434\u0440\u0435\u0441</button>
          <button type="reset" class="filters__reset">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C</button>
        </div>
        <div class="filters-advanced__hint" id="f-geocode-hint"></div>
        <input type="hidden" name="lat" id="f-lat">
        <input type="hidden" name="lng" id="f-lng">
      </form>

      <div class="grid" id="grid"></div>
      <div class="grid__more" id="grid-more" hidden><button class="btn btn--ghost" id="load-more">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451</button></div>
      <div style="text-align:center;color:var(--color-muted);font-size:13px;padding:20px 0;" id="grid-status"></div>
    </div>
  `;let l=document.getElementById("grid"),u=document.getElementById("grid-more"),g=document.getElementById("load-more"),m=document.getElementById("grid-status"),d=Math.max(Number(t.all_grid_batch_size)||12,1),f=[],o=0;function p(){let _=f.slice(o,o+d);_.forEach(H=>l.appendChild(he(H))),y(l),o+=_.length,u.hidden=o>=f.length,m.textContent=o>=f.length?`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u0441\u0435 ${f.length} \u043A\u0432\u0430\u0440\u0442\u0438\u0440`:`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${o} \u0438\u0437 ${f.length}`}function $(_){if(f=ve(n,_),o=0,l.innerHTML="",m.textContent="",!f.length){m.textContent="\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",u.hidden=!0;return}p()}g.addEventListener("click",p),B($),$({})}function be(e,t,n){e.innerHTML=`
    <div class="container" style="padding:60px 0;text-align:center;">
      <h1 style="font-size:22px;margin:0 0 12px;">${t}</h1>
      <p style="color:var(--color-muted);margin:0 0 8px;white-space:pre-wrap;">${n}</p>
      <a class="btn btn--primary" href="#/">\u2190 \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
    </div>`}function ye(e){let t=document.getElementById("slider"),n=document.getElementById("slider-track"),s=document.getElementById("sl-prev"),i=document.getElementById("sl-next"),a=document.getElementById("sl-dots");if(!t||!n)return;let c=(e||[]).filter(Boolean);if(!c.length){n.innerHTML='<div class="slider__img slider__img--empty">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F</div>',s&&(s.style.display="none"),i&&(i.style.display="none"),a&&(a.style.display="none");return}n.innerHTML=c.map((m,d)=>`<img class="slider__img" src="${m}" alt="\u0424\u043E\u0442\u043E ${d+1}" loading="${d===0?"eager":"lazy"}" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'slider__img slider__img--empty',textContent:'\u0424\u043E\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'}))">`).join(""),a&&(a.innerHTML=c.map((m,d)=>`<button class="slider__dot ${d===0?"slider__dot--active":""}" type="button" data-slide="${d}"></button>`).join(""));let r=0,l=c.length,u=()=>{n.style.transform=`translateX(-${r*100}%)`,a&&a.querySelectorAll(".slider__dot").forEach((m,d)=>m.classList.toggle("slider__dot--active",d===r)),l<2&&(s&&(s.style.display="none"),i&&(i.style.display="none"),a&&(a.style.display="none"))};s&&s.addEventListener("click",()=>{r=(r-1+l)%l,u()}),i&&i.addEventListener("click",()=>{r=(r+1)%l,u()}),a&&a.addEventListener("click",m=>{let d=m.target.closest("[data-slide]");d&&(r=Number(d.dataset.slide)||0,u())});let g=0;t.addEventListener("touchstart",m=>{g=m.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",m=>{let d=m.changedTouches[0].clientX-g;Math.abs(d)<40||(r=d>0?(r-1+l)%l:(r+1)%l,u())}),u()}function $e(e){let t=[["\u0410\u0434\u0440\u0435\u0441",e.address],["\u041A\u043E\u043C\u043D\u0430\u0442",e.rooms],["\u041F\u043B\u043E\u0449\u0430\u0434\u044C",e.area+" \u043C\xB2"],["\u042D\u0442\u0430\u0436",e.floor?`${e.floor} \u0438\u0437 ${e.floors_total||"?"}`:"\u2014"],["\u0413\u043E\u0441\u0442\u0435\u0439 \u0434\u043E",e.max_guests],["\u0421\u043F\u0430\u043B\u0435\u043D",e.bedrooms],["\u041A\u0440\u043E\u0432\u0430\u0442\u0435\u0439",e.beds],["\u0421\u0430\u043D\u0443\u0437\u043B\u043E\u0432",e.bathrooms],["\u041A\u0443\u0445\u043D\u044F",e.kitchen_type],["\u0420\u0435\u043C\u043E\u043D\u0442",e.repair],["\u0412\u0438\u0434 \u0438\u0437 \u043E\u043A\u043D\u0430",e.view],["\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",e.parking]].filter(([,n])=>n!=null&&n!=="");document.getElementById("a-params").innerHTML=t.map(([n,s])=>`<li class="apartment__param"><span class="apartment__param-label">${n}</span><span>${s}</span></li>`).join("")}function xe(e){let t=document.getElementById("map-links"),n=document.getElementById("map-links-section");t.innerHTML=`
    <a class="map-links__item" href="https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}" target="_blank" rel="noopener">Google Maps</a>
    <a class="map-links__item" href="https://yandex.by/maps/?pt=${e.lng},${e.lat}&z=17&l=map" target="_blank" rel="noopener">\u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B</a>`,n.hidden=!1}function Ee(e){if(!e||!e.length)return;let t=document.getElementById("sleeping-list"),n=e.reduce((i,a)=>i+(Number(a.count)||0),0),s=e.reduce((i,a)=>i+(Number(a.count)||0)*(a.type==="double"||a.type==="double-sofa"?2:1),0);t.innerHTML=`
    <p style="grid-column:1/-1;color:var(--color-muted);font-size:13px;margin:0 0 6px;">
      ${n} \u043A\u0440\u043E\u0432\u0430\u0442${n===1?"\u044C":"\u0438"} \xB7 ${s} \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0441\u0442
    </p>
    ${e.map(i=>`
      <div class="sleeping__item">
        ${x(i.type==="sofa"||i.type==="double-sofa"?"sofa":"bed")}
        <div>
          <div class="sleeping__type">${i.label||i.type}</div>
          <div class="sleeping__count">\xD7${i.count||1}</div>
        </div>
      </div>`).join("")}`,y(t),document.getElementById("sleeping-section").hidden=!1}function Le(e){if(!e||!e.length)return;let t=document.getElementById("amenities-list"),n=Y(e);t.innerHTML=n.map(s=>`
    <li class="amenities__group">
      <h3 class="amenities__group-title">${s.title}</h3>
      <ul class="amenities__group-list">
        ${s.items.map(i=>`<li class="amenities__item">${x(E(i))}<span>${L(i)}</span></li>`).join("")}
      </ul>
    </li>`).join(""),y(t),document.getElementById("amenities-section").hidden=!1}function we(e){let t=[`\u0417\u0430\u0435\u0437\u0434 \u0441 ${e.check_in||"14:00"} \xB7 \u0432\u044B\u0435\u0437\u0434 \u0434\u043E ${e.check_out||"12:00"}`,e.smoking_allowed?"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E":"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E",e.pets_allowed==="yes"?"\u041C\u043E\u0436\u043D\u043E \u0441 \u043F\u0438\u0442\u043E\u043C\u0446\u0430\u043C\u0438":e.pets_allowed==="no"?"\u0411\u0435\u0437 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445":"\u041F\u0438\u0442\u043E\u043C\u0446\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E",e.children_allowed==="no"?"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445":"\u041C\u043E\u0436\u043D\u043E \u0441 \u0434\u0435\u0442\u044C\u043C\u0438",e.parties_allowed==="no"?"\u0412\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u044B":e.parties_allowed==="yes"?"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B":"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"];e.report_docs&&t.push("\u041E\u0442\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"),document.getElementById("rules-list").innerHTML=t.map(n=>`<div class="rules__item">${n}</div>`).join("")}function Me(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function Ie(e,t){let n=document.getElementById("similar-grid");if(!n)return;let s=t.filter(i=>i.id!==e.id).slice(0,4);n.innerHTML=s.map(i=>`
    <a class="card" href="#/apartment?id=${i.id}">
      <div class="card__image-wrap">
        ${Me(i)}
        <span class="card__badge">${i.rooms}-\u043A\u043E\u043C\u043D.</span>
      </div>
      <div class="card__body">
        <div class="card__price">${h(i.price)} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>
        <div class="card__title">${i.title} \xB7 ${i.address}</div>
        <div class="card__meta"><span>${i.rooms} \u043A\u043E\u043C\u043D.</span><span>${i.area} \u043C\xB2</span></div>
      </div>
    </a>`).join(""),y(n)}async function Q(e,{settings:t,allApartments:n,id:s}){let i=n.find(p=>Number(p.id)===Number(s));if(!i){be(e,"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",`\u0412 data/apartments.json \u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0441 id = ${s}.`);return}let c=location.origin+"/#/apartment?id="+i.id;document.title=`${i.title} \u2014 \u0430\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435, ${h(i.price)}/\u043C\u0435\u0441`;let r=`\u0410\u0440\u0435\u043D\u0434\u0430 ${i.rooms}-\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ${i.address}. ${i.area} \u043C\xB2, ${h(i.price)} \u0432 \u043C\u0435\u0441\u044F\u0446. \u0411\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u043E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430.`,l=document.querySelector('meta[name="description"]');l||(l=document.createElement("meta"),l.name="description",document.head.appendChild(l)),l.content=r;let u=document.querySelector('link[rel="canonical"]');u||(u=document.createElement("link"),u.rel="canonical",document.head.appendChild(u)),u.href=c;let g=i.main_image||i.images&&i.images[0]||"";[["og:type","product"],["og:title",i.title],["og:description",r],["og:url",c],["og:image",g]].forEach(([p,$])=>{let _=document.querySelector(`meta[property="${p}"]`);_||(_=document.createElement("meta"),_.setAttribute("property",p),document.head.appendChild(_)),_.setAttribute("content",$)});let d={"@context":"https://schema.org","@type":"Apartment",name:i.title,numberOfRooms:i.rooms,floorSize:{"@type":"QuantitativeValue",value:Number(i.area),unitCode:"MTK"},address:{"@type":"PostalAddress",streetAddress:i.address,addressLocality:"\u041C\u0438\u043D\u0441\u043A",addressCountry:"BY"},geo:{"@type":"GeoCoordinates",latitude:Number(i.lat),longitude:Number(i.lng)},offers:{"@type":"Offer",price:i.price,priceCurrency:"BYN",availability:"https://schema.org/InStock"},image:i.images||[]},f=document.createElement("script");if(f.type="application/ld+json",f.setAttribute("data-jsonld","1"),f.textContent=JSON.stringify(d),document.head.appendChild(f),e.innerHTML=`
    <div class="apartment container">
      <a class="apartment__back" href="#/">\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443</a>
      <div class="slider" id="slider">
        <div class="slider__track" id="slider-track"></div>
        <button class="slider__btn slider__btn--prev" id="sl-prev" type="button">\u2039</button>
        <button class="slider__btn slider__btn--next" id="sl-next" type="button">\u203A</button>
        <div class="slider__dots" id="sl-dots"></div>
      </div>
      <div class="apartment__info">
        <div>
          <p class="apartment__price" id="a-price"></p>
          <h1 class="apartment__title" id="a-title"></h1>
          <ul class="apartment__params" id="a-params"></ul>
          <div class="apartment__desc" id="a-desc"></div>
        </div>
        <div class="apartment__map" id="map"></div>
      </div>
      <div class="apartment__section" id="map-links-section" hidden><h2 class="apartment__h2">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043A\u0430\u0440\u0442\u0430\u0445</h2><div class="map-links" id="map-links"></div></div>
      <div class="apartment__section" id="sleeping-section" hidden><h2 class="apartment__h2">\u0421\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430</h2><div class="sleeping" id="sleeping-list"></div></div>
      <div class="apartment__section" id="amenities-section" hidden><h2 class="apartment__h2">\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430</h2><ul class="amenities" id="amenities-list"></ul></div>
      <div class="apartment__section"><h2 class="apartment__h2">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F</h2><div class="rules" id="rules-list"></div></div>
      <div class="apartment__section contacts-single">
        <h2 class="apartment__h2" style="text-align:center;">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h2>
        <p class="contacts__text" style="text-align:center;max-width:480px;margin:0 auto 20px;">
          \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, e-mail \u0438\u043B\u0438 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445.
        </p>
        <ul class="contacts__list">
          <li class="contacts__item" id="c-phone"></li>
          <li class="contacts__item" id="c-email"></li>
        </ul>
        <div class="contacts__socials" id="socials"></div>
      </div>
      <div class="apartment__section"><h2 class="apartment__h2">\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</h2><div class="grid" id="similar-grid"></div></div>
    </div>
  `,document.getElementById("a-price").textContent=h(i.price)+" / \u043C\u0435\u0441",document.getElementById("a-title").textContent=i.title,document.getElementById("a-desc").textContent=i.description||"",$e(i),xe(i),Ee(i.sleeping_places),Le(i.amenities),we(i),Ie(i,n),ye(i.images||[]),document.getElementById("map")){let p=T("map",[Number(i.lng),Number(i.lat)],15);J(p,i)}}A();j();var C=location.origin,S="\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435";async function Z(e){let t=await fetch(e);if(!t.ok)throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+e);return t.json()}var b={},I=[];function v(e,t,n=!1){if(!t)return;let s=n?"property":"name",i=document.querySelector(`meta[${s}="${e}"]`);i||(i=document.createElement("meta"),i.setAttribute(s,e),document.head.appendChild(i)),i.setAttribute("content",t)}function te(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=e}function Ne(e){if(document.querySelectorAll("script[data-jsonld]").forEach(n=>n.remove()),!e)return;let t=document.createElement("script");t.type="application/ld+json",t.setAttribute("data-jsonld","1"),t.textContent=JSON.stringify(e),document.head.appendChild(t)}function Be(){v("robots","index, follow"),v("og:site_name",S,!0),v("og:type","website",!0),v("og:locale","ru_BY",!0)}function ke(){let e=location.hash.replace(/^#/,"")||"/",[t,n]=e.split("?"),s=new URLSearchParams(n||"");return t==="/"||t===""?{page:"home"}:t==="/apartments"?{page:"apartments"}:t==="/apartment"?{page:"apartment",id:Number(s.get("id"))}:t==="/contacts"?{page:"home",anchor:"contacts"}:{page:"404"}}function Te(e){document.title="\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u2014 "+S,v("description","\u0417\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0438\u043B\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440."),v("robots","noindex, follow"),v("og:title","\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",!0),v("og:url",C+location.pathname+location.hash,!0),te(C+"/"),Ne(null);let t=I.slice(0,6),n=t.map(s=>`
    <a class="card" href="#/apartment?id=${s.id}">
      <div class="card__image-wrap">
        <img class="card__image" src="${s.main_image||s.images&&s.images[0]||"img/placeholder.svg"}"
             alt="${s.title}" loading="lazy" decoding="async">
        <span class="card__badge">${s.rooms}-\u043A\u043E\u043C\u043D.</span>
      </div>
      <div class="card__body">
        <div class="card__price">${h(s.price)} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>
        <div class="card__title">${s.title} \xB7 ${s.address}</div>
        <div class="card__meta"><span>${s.rooms} \u043A\u043E\u043C\u043D.</span><span>${s.area} \u043C\xB2</span></div>
      </div>
    </a>`).join("");e.innerHTML=`
    <section class="container" style="padding:80px 0 40px;text-align:center;">
      <h1 style="font-size:clamp(40px,8vw,72px);margin:0 0 12px;letter-spacing:-.03em;">404</h1>
      <p style="color:var(--color-muted);font-size:17px;margin:0 0 28px;">
        \u041F\u043E\u0445\u043E\u0436\u0435, \u0442\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u0438\u043B\u0438 \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043E\u043F\u0435\u0447\u0430\u0442\u043A\u0430.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a class="btn btn--primary" href="#/">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
        <a class="btn btn--ghost" href="#/apartments">\u0412\u0441\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</a>
        <a class="btn btn--ghost" href="#/contacts">\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F</a>
      </div>
    </section>
    ${t.length?`
      <section class="container" style="padding:20px 0 64px;">
        <h2 class="map-section__title" style="text-align:center;margin-bottom:24px;">\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E</h2>
        <div class="grid">${n}</div>
      </section>`:""}
  `}async function ee(){let e=ke(),t=document.getElementById("app");if(t)if(t.innerHTML="",Be(),e.page==="home"?await K(t,{settings:b,allApartments:I,anchor:e.anchor}):e.page==="apartments"?await V(t,{settings:b,allApartments:I}):e.page==="apartment"?await Q(t,{settings:b,allApartments:I,id:e.id}):Te(t),P(b),O(b),document.getElementById("site-title-text").textContent=b.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",e.page!=="apartment"&&e.page!=="404"&&(document.title=b.site_title||S,v("description",b.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430."),v("og:title",b.site_title||S,!0),v("og:description",b.hero_subtitle||"",!0),v("og:url",C+"/"+(e.page==="apartments"?"#/apartments":""),!0),te(C+"/"+(e.page==="apartments"?"#/apartments":""))),e.anchor){let n=document.getElementById(e.anchor);n&&n.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0})}(async()=>{try{await Promise.all([Z("data/settings.json"),Z("data/apartments.json"),F()]).then(([e,t])=>{b=e,I=t})}catch(e){console.error(e),document.getElementById("app").innerHTML=`
      <div class="container" style="padding:80px 0;text-align:center;">
        <h1 style="font-size:24px;margin:0 0 12px;">\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435</h1>
        <p style="color:var(--color-muted);margin:0 0 24px;">\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.</p>
        <button class="btn btn--primary" onclick="location.reload()">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>
      </div>`;return}window.addEventListener("hashchange",ee),ee()})();
