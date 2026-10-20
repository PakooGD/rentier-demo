function H(){let e=document.getElementById("burger"),t=document.getElementById("nav");if(!e||!t)return;let a=i=>{t.classList.toggle("header__nav--open",i),e.classList.toggle("header__burger--open",i),e.setAttribute("aria-expanded",String(i)),document.body.style.overflow=i?"hidden":""};e.addEventListener("click",()=>a(!t.classList.contains("header__nav--open"))),t.addEventListener("click",i=>{i.target.closest("a")&&a(!1)}),document.addEventListener("click",i=>{t.classList.contains("header__nav--open")&&(i.target.closest("#nav")||i.target.closest("#burger")||a(!1))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a(!1)}),window.addEventListener("resize",()=>{window.innerWidth>820&&a(!1)})}var ne="rentier-theme";function A(){let e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t,localStorage.setItem(ne,t)})}function j(e){let t=document.getElementById("c-phone"),a=document.getElementById("c-email"),i=document.getElementById("socials"),n=String(e.contacts_phone_enabled)!=="false"&&!!e.phone,s=String(e.contacts_email_enabled)!=="false"&&!!e.email,l=String(e.contacts_instagram_enabled)!=="false"&&!!e.instagram,r=String(e.contacts_telegram_enabled)!=="false"&&!!e.telegram;t&&(n?(t.style.display="",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg><a href="tel:${e.phone.replace(/[^\d+]/g,"")}">${e.phone}</a>`):(t.style.display="none",t.innerHTML="")),a&&(s?(a.style.display="",a.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><a href="mailto:${e.email}">${e.email}</a>`):(a.style.display="none",a.innerHTML="")),i&&(i.innerHTML="",l&&(i.innerHTML+=`<a class="contacts__social-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a>`),r&&(i.innerHTML+=`<a class="contacts__social-link" href="${e.telegram}" target="_blank" rel="noopener">Telegram</a>`),i.style.display=i.innerHTML?"":"none")}var ae=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
`,ie=`
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z"/>
  </svg>
`,se=`
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
    <path d="M12.5 6.5c-2.5 0-4.5 2-4.5 4.5 0 1 .3 1.9.9 2.7l-.6 1.8 1.9-.6c.7.4 1.5.6 2.3.6 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5zm2.5 6.4c-.1.3-.6.6-.9.6-.2 0-.5-.1-.8-.2-.3-.1-.7-.3-1.2-.7-.4-.4-.7-.8-.9-1.1-.2-.3-.3-.6-.3-.8 0-.3.2-.7.5-.9.1-.1.3-.2.5-.2s.3 0 .4.1c.1.1.2.2.3.4l.4.8c.1.2 0 .4-.1.5l-.3.3c-.1.1-.1.2 0 .3.2.3.5.6.8.8.1.1.2.1.3 0l.3-.3c.1-.1.3-.2.5-.1l.8.4c.2.1.3.2.4.3.1.3 0 .6-.1.8z"/>
  </svg>
`,re=`
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>
  </svg>
`;function P(e,t=[]){let a=(s,l)=>{let r=document.getElementById(s);r&&l!=null&&(r.textContent=l)};a("hero-eyebrow","\u041F\u0440\u044F\u043C\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430"),a("hero-title-prefix","\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u041C\u0438\u043D\u0441\u043A\u0435"),a("hero-title-em","\u043E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430"),a("hero-subtitle",e.hero_subtitle||"");let i=document.getElementById("hero-btn1");i&&(i.setAttribute("href","#apartments"),i.textContent="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B"),a("hero-stat1-value",String(t.length)),a("hero-stat1-label","\u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"),a("hero-stat2-value","1 \u0434\u0435\u043D\u044C"),a("hero-stat2-label","\u0437\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u0435");let n=document.getElementById("site-title-text");n&&(n.textContent=e.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435"),e.site_title&&(document.title=e.site_title)}function q(e){let t=document.querySelector(".footer");if(!t)return;t.id="footer";let a=e.phone?e.phone.replace(/[^\d+]/g,""):"",i=e.phone&&String(e.contacts_phone_enabled)!=="false"?`<li><a href="tel:${a}">${e.phone}</a></li>`:"",n=e.email&&String(e.contacts_email_enabled)!=="false"?`<li><a href="mailto:${e.email}">${e.email}</a></li>`:"",s=e.instagram&&String(e.contacts_instagram_enabled)!=="false"?`<a class="footer__social-icon" href="${e.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ae}</a>`:"",l=e.telegram&&String(e.contacts_telegram_enabled)!=="false"?`<a class="footer__social-icon" href="${e.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${ie}</a>`:"",r=e.viber&&String(e.contacts_viber_enabled)!=="false"?`<a class="footer__social-icon" href="${e.viber}" target="_blank" rel="noopener" aria-label="Viber">${se}</a>`:"",o=e.whatsapp&&String(e.contacts_whatsapp_enabled)!=="false"?`<a class="footer__social-icon" href="${e.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${re}</a>`:"";t.innerHTML=`
    <div class="container">
      <div class="footer__grid">
        <div class="footer__col footer__col--legal">
          <p class="footer__col-title">\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</p>
          <p class="footer__legal-info">
            ${e.legal_name||"\u0418\u041F \u0418\u0432\u0430\u043D\u043E\u0432 \u0418.\u0418."}<br>
            \u0423\u041D\u041F ${e.legal_unp||"000000000"}<br>
            ${e.legal_address||"\u0433. \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F, 1"}
          </p>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</p>
          <ul class="footer__links">
            <li><a href="#map-section">\u041A\u0430\u0440\u0442\u0430</a></li>
            <li><a href="#apartments">\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</a></li>
            <li><a href="#footer">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F</p>
          <ul class="footer__contacts">
            ${i}
            ${n}
          </ul>
          <div class="footer__socials">
            ${s}
            ${l}
            ${r}
            ${o}
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__legal">
          \xA9 ${new Date().getFullYear()} \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.
        </div>
      </div>
    </div>
  `}var le={basic:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",kitchen:"\u041A\u0443\u0445\u043D\u044F",bathroom:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",bath:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",parking:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",building:"\u0414\u043E\u043C \u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",leisure:"\u0414\u043E\u0441\u0443\u0433 \u0440\u044F\u0434\u043E\u043C",rules:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",other:"\u0414\u0440\u0443\u0433\u043E\u0435"},O=["basic","kitchen","bathroom","bath","parking","building","leisure","rules","other"],oe={bath:"bathroom",building:"parking",rules:"other"},L={},z=!1,k=null;async function R(){return z?L:k||(k=(async()=>{try{let e=await fetch("data/icons.json");e.ok&&(L=await e.json(),z=!0)}catch(e){console.warn("icons.json \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D",e)}return L})(),k)}function ce(e){return L[e]||L.default||""}function $(e,t="amenity-icon"){return`<span class="${t}" data-icon="${e}"></span>`}function E(e=document){e.querySelectorAll("[data-icon]").forEach(a=>{let i=a.getAttribute("data-icon");a.innerHTML=ce(i)})}function w(e){return e?typeof e=="string"?e:e.slug||e.icon||"default":"default"}function I(e){return e?typeof e=="string"?e:e.label||e.slug||e.icon||"":""}function de(e){if(e&&typeof e=="object"&&e.category){let t=String(e.category).toLowerCase();return oe[t]||t}return"other"}function F(e){let t={};return(e||[]).forEach(a=>{let i=de(a);t[i]||(t[i]=[]),t[i].push(a)}),Object.entries(t).sort((a,i)=>{let n=O.indexOf(a[0]),s=O.indexOf(i[0]);return(n===-1?999:n)-(s===-1?999:s)}).map(([a,i])=>({category:a,title:le[a]||"\u0414\u0440\u0443\u0433\u043E\u0435",items:i}))}var Y="https://nominatim.openstreetmap.org/search",me="27.35,53.99,27.75,53.83";async function pe(e){let t=e.replace(/[.,]/g," ").replace(/\b(улица|ул|пр-т|проспект|пр|пер|переулок|бульвар|б-р|пл|площадь|д|дом)\b\.?/gi," ").replace(/\s+/g," ").trim(),a=[],i=t.match(/^(.+?)\s+(\d+[\w\-/]*)$/);i?(a.push({street:`${i[2]} ${i[1]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({street:`${i[1]} ${i[2]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`}),a.push({street:i[1],city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"})):(a.push({street:t,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`})),a.push({city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"});for(let n of a){let s=new URLSearchParams({format:"json",limit:"1",addressdetails:"1","accept-language":"ru"});n.street&&s.set("street",n.street),n.city&&s.set("city",n.city),n.country&&s.set("country",n.country),n.q&&s.set("q",n.q),s.set("viewbox",me),s.set("bounded","1");try{let r=await(await fetch(`${Y}?${s}`)).json();if(Array.isArray(r)&&r.length)return{lat:Number(r[0].lat),lng:Number(r[0].lon),label:r[0].display_name}}catch(l){console.warn("geocode error",n,l)}}try{let n=new URLSearchParams({format:"json",limit:"1","accept-language":"ru",q:`${t}, \u041C\u0438\u043D\u0441\u043A`}),s=await(await fetch(`${Y}?${n}`)).json();if(Array.isArray(s)&&s.length)return{lat:Number(s[0].lat),lng:Number(s[0].lon),label:s[0].display_name}}catch{}return null}function U(e,t){let a=document.getElementById("filters");if(!a)return;let i=document.getElementById("f-address"),n=document.getElementById("f-radius"),s=document.getElementById("f-geocode"),l=document.getElementById("f-geocode-hint"),r=document.getElementById("f-lat"),o=document.getElementById("f-lng"),u,f=()=>{let d={};return document.querySelectorAll("#filters input, #filters select").forEach(_=>{_.name&&_.value!==""&&(d[_.name]=_.value)}),d},m=()=>{let d=f();d.lat&&d.lng&&d.radius?delete d.q:(delete d.lat,delete d.lng,delete d.radius),e(d)},c=()=>{clearTimeout(u),u=setTimeout(m,300)},g=async()=>{let d=(i.value||"").trim();if(!d){r&&(r.value=""),o&&(o.value=""),l&&(l.textContent=""),t&&t(null),m();return}l&&(l.textContent="\u041F\u043E\u0438\u0441\u043A \u0430\u0434\u0440\u0435\u0441\u0430...");let _=await pe(d);if(!_){l&&(l.textContent="\u0410\u0434\u0440\u0435\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \xAB\u0443\u043B\u0438\u0446\u0430 + \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430\xBB."),r&&(r.value=""),o&&(o.value=""),t&&t(null);return}r&&(r.value=_.lat),o&&(o.value=_.lng),l&&(l.textContent=`\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ${_.label}`),n&&!Number(n.value)&&(n.value="1"),t&&t({lat:_.lat,lng:_.lng,radius:Number(n.value)}),m()};s&&s.addEventListener("click",g),a.addEventListener("submit",d=>{d.preventDefault(),g()}),a.addEventListener("change",c),a.addEventListener("input",d=>{d.target===i||d.target===n||c()}),n&&n.addEventListener("change",()=>{let d=f();d.lat&&d.lng&&t&&t({lat:Number(d.lat),lng:Number(d.lng),radius:Number(d.radius)}),m()}),a.addEventListener("reset",()=>setTimeout(()=>{r&&(r.value=""),o&&(o.value=""),l&&(l.textContent=""),t&&t(null),m()},0))}var ue="https://tiles.openfreemap.org/styles/positron";function B(e,t=[27.5667,53.9],a=11){let i=document.getElementById(e);if(!i)return null;let n=new maplibregl.Map({container:i,style:ue,center:t,zoom:a,attributionControl:{compact:!0}});n.addControl(new maplibregl.NavigationControl({showCompass:!1}),"top-right");let s=()=>{i.style.width="",n.resize()};return requestAnimationFrame(()=>requestAnimationFrame(s)),n.on("load",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i.parentElement||i),n}function W(e=!1){let t=document.createElement("button");return t.className="map-pin"+(e?" map-pin--active":""),t.setAttribute("aria-label","\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430"),t}function fe(){let e=document.createElement("div");return e.className="map-pin map-pin--center",e.style.background="var(--color-accent)",e.style.width="30px",e.style.height="30px",e}function ge(e){let t=e.main_image||e.images&&e.images[0],a=t?`<img class="pin-popup__image" src="${t}" alt="">`:`<div class="pin-popup__image pin-popup__image--placeholder">${e.rooms}-\u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>`;return`
    <a class="pin-popup" href="#/apartment?id=${e.id}">
      ${a}
      <div class="pin-popup__body">
        <div class="pin-popup__price">${C(e.price)}</div>
        <div class="pin-popup__title">${e.title}</div>
        <div class="pin-popup__meta">${e.rooms} \u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>
        <span class="pin-popup__link">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192</span>
      </div>
    </a>`}function G(e,t,{fit:a=!0}={}){let i=[];if(t.forEach(n=>{let s=new maplibregl.Marker({element:W()}).setLngLat([Number(n.lng),Number(n.lat)]).setPopup(new maplibregl.Popup({offset:24,maxWidth:"260px"}).setHTML(ge(n))).addTo(e);i.push(s)}),a&&t.length){let n=new maplibregl.LngLatBounds;t.forEach(s=>n.extend([Number(s.lng),Number(s.lat)])),requestAnimationFrame(()=>e.fitBounds(n,{padding:60,maxZoom:13,duration:600}))}return i}function V(e,t){let a=new maplibregl.Marker({element:W(!0)}).setLngLat([Number(t.lng),Number(t.lat)]).addTo(e);return requestAnimationFrame(()=>e.jumpTo({center:[Number(t.lng),Number(t.lat)],zoom:15})),a}var x=null,M=null;function X(e,t,a,i){if(!e)return;let n=[Number(a),Number(t)],s=Number(i);x&&x.remove(),x=new maplibregl.Marker({element:fe()}).setLngLat(n).addTo(e),M&&(e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),M=null);let l=64,r=[],u=s/6371;for(let c=0;c<=l;c++){let g=c*360/l*Math.PI/180,d=t*Math.PI/180,_=a*Math.PI/180,p=Math.asin(Math.sin(d)*Math.cos(u)+Math.cos(d)*Math.sin(u)*Math.cos(g)),h=_+Math.atan2(Math.sin(g)*Math.sin(u)*Math.cos(d),Math.cos(u)-Math.sin(d)*Math.sin(p));r.push([h*180/Math.PI,p*180/Math.PI])}let f={type:"Feature",geometry:{type:"Polygon",coordinates:[r]}};e.addSource("search-radius",{type:"geojson",data:f}),e.addLayer({id:"search-radius-fill",type:"fill",source:"search-radius",paint:{"fill-color":"#6b8f71","fill-opacity":.12}}),e.addLayer({id:"search-radius-line",type:"line",source:"search-radius",paint:{"line-color":"#6b8f71","line-width":2,"line-dasharray":[3,2]}}),M=!0;let m=r.reduce((c,g)=>c.extend(g),new maplibregl.LngLatBounds(r[0],r[0]));e.fitBounds(m,{padding:40,duration:500})}function D(e){e&&(x&&(x.remove(),x=null),e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),M=null)}function C(e){return new Intl.NumberFormat("ru-BY").format(e)+" BYN"}var _e=8;function he(e){let t=Number(e);return!t||Number.isNaN(t)?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":C(t)}function ve(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function be(e){let t=document.createElement("a");t.className="card",t.href=`#/apartment?id=${e.id}`;let a=he(e.price),i=a==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${a} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`,n=(e.amenities||[]).slice(0,3).map(s=>`<span class="amenities__item">${$(w(s))}<span>${I(s)}</span></span>`).join("");return t.innerHTML=`
    <div class="card__image-wrap">
      ${ve(e)}
      <span class="card__badge">${e.rooms}-\u043A\u043E\u043C\u043D.</span>
    </div>
    <div class="card__body">
      ${i}
      <div class="card__title">${e.title} \xB7 ${e.address}</div>
      <div class="card__meta">
        <span>${e.area} \u043C\xB2</span>
        <span>${e.floor?e.floor+"/"+(e.floors_total||"?")+" \u044D\u0442.":""}</span>
      </div>
      ${n?`<div class="card__amenities">${n}</div>`:""}
    </div>`,t}function ye(e,t){return e.filter(a=>{if(t.minPrice&&a.price<Number(t.minPrice)||t.maxPrice&&a.price>Number(t.maxPrice))return!1;if(t.rooms){let i=Number(t.rooms);if(i>=4?a.rooms<i:a.rooms!==i)return!1}if(t.minArea&&a.area<Number(t.minArea)||t.guests&&(a.max_guests||0)<Number(t.guests))return!1;if(t.q){let i=t.q.toLowerCase();if(!`${a.address} ${a.title}`.toLowerCase().includes(i))return!1}if(t.lat&&t.lng&&t.radius){let n=o=>o*Math.PI/180,s=n(a.lat-Number(t.lat)),l=n(a.lng-Number(t.lng)),r=Math.sin(s/2)**2+Math.cos(n(Number(t.lat)))*Math.cos(n(a.lat))*Math.sin(l/2)**2;if(2*6371*Math.asin(Math.sqrt(r))>Number(t.radius))return!1}return!0})}function $e(e,t){let a=e.querySelector(".banner__track");if(!a)return;let i=t.map(p=>p.main_image||p.images&&p.images[0]).filter(Boolean);if(!i.length){a.innerHTML='<div class="banner__slide banner__slide--empty">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F</div>';return}let n=(p,h)=>`
    <div class="banner__slide" data-slide="${h}">
      <img src="${p}" alt="" loading="${h===0?"eager":"lazy"}" decoding="async">
    </div>`,s=p=>Array.from({length:p},(h,b)=>`<button class="banner__dot ${b===0?"banner__dot--active":""}" type="button" data-dot="${b}" aria-label="\u0421\u043B\u0430\u0439\u0434 ${b+1}"></button>`).join("");a.innerHTML=i.map(n).join("");let l=e.querySelector(".banner__dots");l&&(l.innerHTML=s(i.length));let r=0,o=i.length,u=p=>{r=(p+o)%o,a.style.transform=`translateX(-${r*100}%)`,l&&l.querySelectorAll(".banner__dot").forEach((h,b)=>h.classList.toggle("banner__dot--active",b===r))},f=e.querySelector(".banner__nav--prev"),m=e.querySelector(".banner__nav--next");f&&f.addEventListener("click",()=>{u(r-1),_()}),m&&m.addEventListener("click",()=>{u(r+1),_()}),l&&l.addEventListener("click",p=>{let h=p.target.closest("[data-dot]");h&&(u(Number(h.dataset.dot)),_())});let c=null,g=()=>{o>1&&(c=setInterval(()=>u(r+1),5e3))},d=()=>{c&&(clearInterval(c),c=null)},_=()=>{d(),g()};e.addEventListener("mouseenter",d),e.addEventListener("mouseleave",g),g()}async function J(e,{settings:t,allApartments:a}){e.innerHTML=`
    <section class="banner">
      <div class="banner__media" aria-hidden="true">
        <div class="banner__track"></div>
        <div class="banner__overlay"></div>
      </div>
      <div class="banner__nav banner__nav--prev" role="button" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439">\u2039</div>
      <div class="banner__nav banner__nav--next" role="button" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439">\u203A</div>
      <div class="banner__dots"></div>

      <div class="banner__content container">
        <span class="banner__eyebrow" id="hero-eyebrow"></span>
        <h1 class="banner__title">
          <span id="hero-title-prefix"></span> <em id="hero-title-em"></em>
        </h1>
        <p class="banner__subtitle" id="hero-subtitle"></p>
        <div class="banner__actions">
          <a class="btn btn--primary" id="hero-btn1" href="#apartments"></a>
        </div>
        <div class="banner__stats">
          <div class="banner__stat">
            <div class="banner__stat-value" id="hero-stat1-value"></div>
            <div class="banner__stat-label" id="hero-stat1-label"></div>
          </div>
          <div class="banner__stat">
            <div class="banner__stat-value" id="hero-stat2-value"></div>
            <div class="banner__stat-label" id="hero-stat2-label"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section" id="map-section">
      <div class="container">
        <h2 class="map-section__title">\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435</h2>
        <p class="map-section__hint">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043C\u0430\u0440\u043A\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B.</p>
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
      <div class="grid__more" id="grid-more" hidden>
        <button class="btn btn--ghost" id="load-more" type="button">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451</button>
      </div>
      <div class="grid-status" id="grid-status" style="text-align:center;color:var(--color-muted);font-size:13px;padding:12px 0 48px;"></div>
    </section>
  `,P(t,a);let i={"@context":"https://schema.org","@type":"RealEstateAgent",name:t.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",description:t.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430.",url:location.origin+"/",areaServed:{"@type":"City",name:"\u041C\u0438\u043D\u0441\u043A"},numberOfAccommodationUnits:a.length},n=document.createElement("script");n.type="application/ld+json",n.setAttribute("data-jsonld","1"),n.textContent=JSON.stringify(i),document.head.appendChild(n);let s=e.querySelector(".banner");s&&$e(s,a);let l=document.getElementById("grid"),r=document.getElementById("grid-more"),o=document.getElementById("load-more"),u=document.getElementById("grid-status"),f=B("map"),m=[],c=[],g=0;function d(){let p=c.slice(g,g+_e);p.forEach(h=>l.appendChild(be(h))),E(l),g+=p.length,r.hidden=g>=c.length,u.textContent=g>=c.length?`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u0441\u0435 ${c.length} \u043A\u0432\u0430\u0440\u0442\u0438\u0440`:`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${g} \u0438\u0437 ${c.length}`}function _(p){if(c=ye(a,p),g=0,l.innerHTML="",u.textContent="",!c.length){u.textContent="\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",r.hidden=!0,f&&(m.forEach(h=>h.remove()),m=[]);return}d(),f&&(m.forEach(h=>h.remove()),m=G(f,c,{fit:c.length>0}))}o&&o.addEventListener("click",d),U(_,p=>{if(f){if(!p){D(f);return}X(f,p.lat,p.lng,p.radius)}}),_({})}var Ee=["wifi","washer","ac","fridge","stove","tv","elevator","dishwasher"];function we(e,t,a){e.innerHTML=`
    <div class="container" style="padding:60px 0;text-align:center;">
      <h1 style="font-size:22px;margin:0 0 12px;">${t}</h1>
      <p style="color:var(--color-muted);margin:0 0 8px;white-space:pre-wrap;">${a}</p>
      <a class="btn btn--primary" href="#/">\u2190 \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
    </div>`}function Z(e){let t=Number(e);return!t||Number.isNaN(t)?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":C(t)}function xe(e){if(!e)return null;let t=String(e).toLowerCase();return t.includes("\u0431\u0435\u0441\u043F\u043B\u0430\u0442")?!0:t.includes("\u043F\u043B\u0430\u0442\u043D")||t.includes("\u043D\u0435\u0442")||t.includes("\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432")?!1:null}function Le(e){let t=document.getElementById("slider"),a=document.getElementById("slider-track"),i=document.getElementById("sl-prev"),n=document.getElementById("sl-next"),s=document.getElementById("sl-dots");if(!t||!a)return;let l=(e||[]).filter(Boolean);if(!l.length){a.innerHTML='<div class="slider__img slider__img--empty">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F</div>',i&&(i.style.display="none"),n&&(n.style.display="none"),s&&(s.style.display="none");return}a.innerHTML=l.map((m,c)=>`<img class="slider__img" src="${m}" alt="\u0424\u043E\u0442\u043E ${c+1} \u0438\u0437 ${l.length}" loading="${c===0?"eager":"lazy"}" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'slider__img slider__img--empty',textContent:'\u0424\u043E\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'}))">`).join(""),s&&(s.innerHTML=l.map((m,c)=>`<button class="slider__dot ${c===0?"slider__dot--active":""}" type="button" data-slide="${c}" aria-label="\u0421\u043B\u0430\u0439\u0434 ${c+1}"></button>`).join(""));let r=0,o=l.length,u=()=>{a.style.transform=`translateX(-${r*100}%)`,s&&s.querySelectorAll(".slider__dot").forEach((m,c)=>m.classList.toggle("slider__dot--active",c===r)),o<2&&(i&&(i.style.display="none"),n&&(n.style.display="none"),s&&(s.style.display="none"))};i&&i.addEventListener("click",()=>{r=(r-1+o)%o,u()}),n&&n.addEventListener("click",()=>{r=(r+1)%o,u()}),s&&s.addEventListener("click",m=>{let c=m.target.closest("[data-slide]");c&&(r=Number(c.dataset.slide)||0,u())});let f=0;t.addEventListener("touchstart",m=>{f=m.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",m=>{let c=m.changedTouches[0].clientX-f;Math.abs(c)<40||(r=c>0?(r-1+o)%o:(r+1)%o,u())}),t.setAttribute("aria-roledescription","\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"),u()}function Ie(e){let t=xe(e.parking),a=[["\u041A\u043E\u043C\u043D\u0430\u0442",e.rooms],["\u041F\u043B\u043E\u0449\u0430\u0434\u044C",e.area?e.area+" \u043C\xB2":""],["\u042D\u0442\u0430\u0436",e.floor?`${e.floor}/${e.floors_total||"?"}`:""],["\u0413\u043E\u0441\u0442\u0435\u0439 \u0434\u043E",e.max_guests],["\u0421\u043F\u0430\u043B\u0435\u043D",e.bedrooms],["\u0421\u0430\u043D\u0443\u0437\u043B\u043E\u0432",e.bathrooms],["\u041A\u0443\u0445\u043D\u044F",e.kitchen_type],["\u0420\u0435\u043C\u043E\u043D\u0442",e.repair],["\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",t===null?"":t?"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F":"\u041F\u043B\u0430\u0442\u043D\u0430\u044F"]].filter(([,n])=>n!=null&&n!=="");document.getElementById("a-params").innerHTML=a.map(([n,s])=>`<li class="apartment__param"><span class="apartment__param-label">${n}</span><span class="apartment__param-value">${s}</span></li>`).join("");let i=document.getElementById("a-view");e.view?(i.hidden=!1,i.innerHTML=`
      <span class="apartment__view-label">\u0412\u0438\u0434 \u0438\u0437 \u043E\u043A\u043D\u0430</span>
      <span class="apartment__view-value">${e.view}</span>`):i.hidden=!0}function Ce(e){let t=document.getElementById("map-links");t&&(t.innerHTML=`
    <a class="map-links__item" href="https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}" target="_blank" rel="noopener">Google Maps</a>
    <a class="map-links__item" href="https://yandex.by/maps/?pt=${e.lng},${e.lat}&z=17&l=map" target="_blank" rel="noopener">\u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B</a>`)}function ke(e){if(!e||!e.length)return;let t=document.getElementById("sleeping-list"),a=e.reduce((n,s)=>n+(Number(s.count)||0),0),i=e.reduce((n,s)=>n+(Number(s.count)||0)*(s.type==="double"||s.type==="double-sofa"?2:1),0);t.innerHTML=`
    <p class="sleeping__summary">${a} \u043A\u0440\u043E\u0432\u0430\u0442${a===1?"\u044C":"\u0438"} \xB7 ${i} \u0441\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0441\u0442</p>
    ${e.map(n=>`
      <div class="sleeping__item">
        ${$(n.type==="sofa"||n.type==="double-sofa"?"sofa":"bed")}
        <div>
          <div class="sleeping__type">${n.label||n.type}</div>
          <div class="sleeping__count">\xD7${n.count||1}</div>
        </div>
      </div>`).join("")}`,E(t),document.getElementById("sleeping-section").hidden=!1}function Me(e){if(!e||!e.length)return;let t=document.getElementById("amenities-section"),a=document.getElementById("amenities-top"),i=document.getElementById("amenities-groups"),n=[],s=[];e.forEach(r=>{let o=w(r);Ee.includes(o)&&n.length<8?n.push(r):s.push(r)}),a.innerHTML=n.map(r=>`
    <li class="amenities__item amenities__item--top">
      ${$(w(r))}<span>${I(r)}</span>
    </li>`).join("");let l=F(s);i.innerHTML=l.map(r=>`
    <details class="amenities__group">
      <summary class="amenities__group-summary">
        <span>${r.title}</span>
        <span class="amenities__group-count">${r.items.length}</span>
      </summary>
      <ul class="amenities__group-list">
        ${r.items.map(o=>`<li class="amenities__item">${$(w(o))}<span>${I(o)}</span></li>`).join("")}
      </ul>
    </details>`).join(""),E(t),t.hidden=!1}function Be(e){let t=[`\u0417\u0430\u0435\u0437\u0434 \u0441 ${e.check_in||"14:00"} \xB7 \u0432\u044B\u0435\u0437\u0434 \u0434\u043E ${e.check_out||"12:00"}`,e.smoking_allowed?"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E":"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E",e.pets_allowed==="yes"?"\u041C\u043E\u0436\u043D\u043E \u0441 \u043F\u0438\u0442\u043E\u043C\u0446\u0430\u043C\u0438":e.pets_allowed==="no"?"\u0411\u0435\u0437 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445":"\u041F\u0438\u0442\u043E\u043C\u0446\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E",e.children_allowed==="no"?"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445":"\u041C\u043E\u0436\u043D\u043E \u0441 \u0434\u0435\u0442\u044C\u043C\u0438",e.parties_allowed==="no"?"\u0412\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u044B":e.parties_allowed==="yes"?"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B":"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"];e.report_docs&&t.push("\u041E\u0442\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"),document.getElementById("rules-list").innerHTML=t.map(a=>`<div class="rules__item">${a}</div>`).join("")}function Ne(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function Se(e,t){let a=document.getElementById("similar-grid");if(!a)return;let i=t.filter(n=>n.id!==e.id).sort(()=>Math.random()-.5).slice(0,4);a.innerHTML=i.map(n=>{let s=Z(n.price),l=s==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${s} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`;return`
      <a class="card" href="#/apartment?id=${n.id}">
        <div class="card__image-wrap">
          ${Ne(n)}
          <span class="card__badge">${n.rooms}-\u043A\u043E\u043C\u043D.</span>
        </div>
        <div class="card__body">
          ${l}
          <div class="card__title">${n.title} \xB7 ${n.address}</div>
          <div class="card__meta"><span>${n.rooms} \u043A\u043E\u043C\u043D.</span><span>${n.area} \u043C\xB2</span></div>
        </div>
      </a>`}).join(""),E(a)}function Te(e){let t=document.getElementById("a-contact-phone"),a=document.getElementById("a-contact-email"),i=document.getElementById("a-contact-socials");if(!t||!a||!i)return;let n=e||{},s=String(n.contacts_phone_enabled)!=="false"&&!!n.phone,l=String(n.contacts_email_enabled)!=="false"&&!!n.email,r=String(n.contacts_instagram_enabled)!=="false"&&!!n.instagram,o=String(n.contacts_telegram_enabled)!=="false"&&!!n.telegram,u=String(n.contacts_viber_enabled)!=="false"&&!!n.viber,f=String(n.contacts_whatsapp_enabled)!=="false"&&!!n.whatsapp;if(s){let c=n.phone.replace(/[^\d+]/g,"");t.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
      <a href="tel:${c}">${n.phone}</a>`,t.style.display=""}else t.style.display="none";l?(a.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      <a href="mailto:${n.email}">${n.email}</a>`,a.style.display=""):a.style.display="none";let m="";r&&(m+=`<a class="apartment__contact-social" href="${n.instagram}" target="_blank" rel="noopener">Instagram</a>`),o&&(m+=`<a class="apartment__contact-social" href="${n.telegram}" target="_blank" rel="noopener">Telegram</a>`),u&&(m+=`<a class="apartment__contact-social" href="${n.viber}" target="_blank" rel="noopener">Viber</a>`),f&&(m+=`<a class="apartment__contact-social" href="${n.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`),i.innerHTML=m,i.style.display=m?"":"none"}async function K(e,{settings:t,allApartments:a,id:i}){let n=a.find(p=>Number(p.id)===Number(i));if(!n){we(e,"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",`\u0412 data/apartments.json \u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0441 id = ${i}.`);return}let l=location.origin+"/#/apartment?id="+n.id,r=Z(n.price);document.title=`${n.title} \u2014 ${r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0446\u0435\u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+"/\u043C\u0435\u0441"}, \u041C\u0438\u043D\u0441\u043A`;let o=`\u0410\u0440\u0435\u043D\u0434\u0430 ${n.rooms}-\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ${n.address}. ${n.area} \u043C\xB2, ${r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0446\u0435\u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+" \u0432 \u043C\u0435\u0441\u044F\u0446"}. \u0411\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u043E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430.`,u=document.querySelector('meta[name="description"]');u||(u=document.createElement("meta"),u.name="description",document.head.appendChild(u)),u.content=o;let f=document.querySelector('link[rel="canonical"]');f||(f=document.createElement("link"),f.rel="canonical",document.head.appendChild(f)),f.href=l;let m=n.main_image||n.images&&n.images[0]||"";[["og:type","product"],["og:title",n.title],["og:description",o],["og:url",l],["og:image",m]].forEach(([p,h])=>{let b=document.querySelector(`meta[property="${p}"]`);b||(b=document.createElement("meta"),b.setAttribute("property",p),document.head.appendChild(b)),b.setAttribute("content",h)});let g={"@context":"https://schema.org","@type":"Apartment",name:n.title,numberOfRooms:n.rooms,floorSize:{"@type":"QuantitativeValue",value:Number(n.area),unitCode:"MTK"},address:{"@type":"PostalAddress",streetAddress:n.address,addressLocality:"\u041C\u0438\u043D\u0441\u043A",addressCountry:"BY"},geo:{"@type":"GeoCoordinates",latitude:Number(n.lat),longitude:Number(n.lng)},offers:{"@type":"Offer",price:n.price||void 0,priceCurrency:"BYN",availability:"https://schema.org/InStock"},image:n.images||[]},d=document.createElement("script");if(d.type="application/ld+json",d.setAttribute("data-jsonld","1"),d.textContent=JSON.stringify(g),document.head.appendChild(d),e.innerHTML=`
    <div class="apartment container">
      <a class="apartment__back" href="#/">\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443</a>

      <div class="apartment__layout">
        <div class="apartment__main">
          <header class="apartment__heading">
            <h1 class="apartment__title" id="a-title"></h1>
            <p class="apartment__address" id="a-address"></p>
          </header>

          <div class="slider" id="slider">
            <div class="slider__track" id="slider-track"></div>
            <button class="slider__btn slider__btn--prev" id="sl-prev" type="button" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E">\u2039</button>
            <button class="slider__btn slider__btn--next" id="sl-next" type="button" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E">\u203A</button>
            <div class="slider__dots" id="sl-dots" role="tablist" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0444\u043E\u0442\u043E"></div>
          </div>

          <div class="apartment__desc" id="a-desc"></div>

          <section class="apartment__section">
            <h2 class="apartment__h2">\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</h2>
            <ul class="apartment__params" id="a-params"></ul>
            <p class="apartment__view" id="a-view" hidden></p>
          </section>

          <section class="apartment__section" id="sleeping-section" hidden>
            <h2 class="apartment__h2">\u0421\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430</h2>
            <div class="sleeping" id="sleeping-list"></div>
          </section>

          <section class="apartment__section" id="amenities-section" hidden>
            <h2 class="apartment__h2">\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430</h2>
            <ul class="amenities amenities--top" id="amenities-top"></ul>
            <div class="amenities__divider" aria-hidden="true"></div>
            <div class="amenities__groups" id="amenities-groups"></div>
          </section>

          <section class="apartment__section">
            <h2 class="apartment__h2">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F</h2>
            <div class="rules" id="rules-list"></div>
          </section>

          <section class="apartment__section">
            <h2 class="apartment__h2">\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435</h2>
            <div class="apartment__map" id="map"></div>
            <div class="map-links" id="map-links"></div>
          </section>
        </div>

        <aside class="apartment__sidebar" aria-label="\u041A\u0440\u0430\u0442\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B">
          <div class="apartment__price-card">
            <p class="apartment__price" id="a-price"></p>
          </div>

          <div class="apartment__contacts-card">
            <p class="apartment__contacts-title">\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C</p>
            <ul class="apartment__contacts-list">
              <li class="apartment__contact-item" id="a-contact-phone"></li>
              <li class="apartment__contact-item" id="a-contact-email"></li>
            </ul>
            <div class="apartment__contact-socials" id="a-contact-socials"></div>
          </div>
        </aside>
      </div>

      <section class="apartment__section apartment__similar">
        <h2 class="apartment__h2">\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</h2>
        <div class="grid" id="similar-grid"></div>
      </section>
    </div>
  `,document.getElementById("a-price").textContent=r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+" / \u043C\u0435\u0441",document.getElementById("a-title").textContent=n.title,document.getElementById("a-address").textContent=n.address,document.getElementById("a-desc").textContent=n.description||"",Ie(n),ke(n.sleeping_places),Me(n.amenities),Be(n),Se(n,a),Te(t),Le(n.images||[]),Ce(n),document.getElementById("map")){let p=B("map",[Number(n.lng),Number(n.lat)],15);V(p,n)}}H();A();var N=location.origin,S="\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435";async function Q(e){let t=await fetch(e);if(!t.ok)throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+e);return t.json()}var y={},T=[];function v(e,t,a=!1){if(!t)return;let i=a?"property":"name",n=document.querySelector(`meta[${i}="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute(i,e),document.head.appendChild(n)),n.setAttribute("content",t)}function te(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=e}function He(e){if(document.querySelectorAll("script[data-jsonld]").forEach(a=>a.remove()),!e)return;let t=document.createElement("script");t.type="application/ld+json",t.setAttribute("data-jsonld","1"),t.textContent=JSON.stringify(e),document.head.appendChild(t)}function Ae(){v("robots","index, follow"),v("og:site_name",S,!0),v("og:type","website",!0),v("og:locale","ru_BY",!0)}function je(){let e=location.hash.replace(/^#/,"")||"/",[t,a]=e.split("?"),i=new URLSearchParams(a||"");return t==="/"||t===""?{page:"home"}:t==="/apartment"?{page:"apartment",id:Number(i.get("id"))}:t==="apartments"?{page:"home",anchor:"apartments"}:t==="map-section"?{page:"home",anchor:"map-section"}:t==="footer"||t==="/contacts"?{page:"home",anchor:"footer"}:{page:"404"}}function Pe(e){let t=Number(e);return!t||Number.isNaN(t)?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${new Intl.NumberFormat("ru-BY").format(t)} BYN <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`}function qe(e){document.title="\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u2014 "+S,v("description","\u0417\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E."),v("robots","noindex, follow"),v("og:title","\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",!0),v("og:url",N+location.pathname+location.hash,!0),te(N+"/"),He(null);let t=T.slice(0,6),a=t.map(i=>`
    <a class="card" href="#/apartment?id=${i.id}">
      <div class="card__image-wrap">
        <img class="card__image" src="${i.main_image||i.images&&i.images[0]||"img/placeholder.svg"}"
             alt="${i.title}" loading="lazy" decoding="async">
        <span class="card__badge">${i.rooms}-\u043A\u043E\u043C\u043D.</span>
      </div>
      <div class="card__body">
        ${Pe(i.price)}
        <div class="card__title">${i.title} \xB7 ${i.address}</div>
        <div class="card__meta"><span>${i.rooms} \u043A\u043E\u043C\u043D.</span><span>${i.area} \u043C\xB2</span></div>
      </div>
    </a>`).join("");e.innerHTML=`
    <section class="container" style="padding:80px 0 40px;text-align:center;">
      <h1 style="font-size:clamp(40px,8vw,72px);margin:0 0 12px;letter-spacing:-.03em;">404</h1>
      <p style="color:var(--color-muted);font-size:17px;margin:0 0 28px;">
        \u041F\u043E\u0445\u043E\u0436\u0435, \u0442\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u0438\u043B\u0438 \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043E\u043F\u0435\u0447\u0430\u0442\u043A\u0430.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a class="btn btn--primary" href="#/">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
        <a class="btn btn--ghost" href="#footer">\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F</a>
      </div>
    </section>
    ${t.length?`
      <section class="container" style="padding:20px 0 64px;">
        <h2 class="map-section__title" style="text-align:center;margin-bottom:24px;">\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E</h2>
        <div class="grid">${a}</div>
      </section>`:""}
  `}async function ee(){let e=je(),t=document.getElementById("app");if(t)if(t.innerHTML="",Ae(),e.page==="home"?await J(t,{settings:y,allApartments:T,anchor:e.anchor}):e.page==="apartment"?await K(t,{settings:y,allApartments:T,id:e.id}):qe(t),j(y),q(y),document.getElementById("site-title-text").textContent=y.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",e.page!=="apartment"&&e.page!=="404"&&(document.title=y.site_title||S,v("description",y.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430."),v("og:title",y.site_title||S,!0),v("og:description",y.hero_subtitle||"",!0),v("og:url",N+"/",!0),te(N+"/")),e.anchor){let a=document.getElementById(e.anchor);a&&requestAnimationFrame(()=>{a.scrollIntoView({behavior:"auto",block:"start"})})}else window.scrollTo({top:0,behavior:"auto"})}function Oe(e){let t=(e.font_family||"").trim(),a=(e.font_google_url||"").trim();if(a&&!document.querySelector("link[data-google-font]")){let i=document.createElement("link");i.rel="preconnect",i.href="https://fonts.googleapis.com",document.head.appendChild(i);let n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);let s=document.createElement("link");s.rel="stylesheet",s.href=a,s.setAttribute("data-google-font","1"),document.head.appendChild(s)}if(t){let i=`'${t}', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`;document.documentElement.style.setProperty("--font",i)}}document.addEventListener("click",e=>{let t=e.target.closest('a[href^="#"]');if(!t)return;let a=t.getAttribute("href");if(!a||a==="#")return;let i=a.replace(/^#\/?/,"").split("?")[0];if(!["apartments","map-section","footer","contacts"].includes(i))return;let n=location.hash.replace(/^#/,"")||"/",s=n==="/"||n===""||n==="#";e.preventDefault();let l=i==="contacts"?"footer":i,r=()=>{let o=document.getElementById(l);o&&o.scrollIntoView({behavior:"smooth",block:"start"})};if(s){r();return}location.hash="#"+i,requestAnimationFrame(()=>{requestAnimationFrame(r)})},!0);(async()=>{try{await Promise.all([Q("data/settings.json"),Q("data/apartments.json"),R()]).then(([e,t])=>{y=e,T=t})}catch(e){console.error(e),document.getElementById("app").innerHTML=`
      <div class="container" style="padding:80px 0;text-align:center;">
        <h1 style="font-size:24px;margin:0 0 12px;">\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435</h1>
        <p style="color:var(--color-muted);margin:0 0 24px;">\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.</p>
        <button class="btn btn--primary" onclick="location.reload()">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>
      </div>`;return}Oe(y),window.addEventListener("hashchange",ee),ee()})();
