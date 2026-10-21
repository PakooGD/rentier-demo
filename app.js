function H(){let e=document.getElementById("burger"),t=document.getElementById("nav");if(!e||!t)return;let a=i=>{t.classList.toggle("header__nav--open",i),e.classList.toggle("header__burger--open",i),e.setAttribute("aria-expanded",String(i)),document.body.style.overflow=i?"hidden":""};e.addEventListener("click",()=>a(!t.classList.contains("header__nav--open"))),t.addEventListener("click",i=>{i.target.closest("a")&&a(!1)}),document.addEventListener("click",i=>{t.classList.contains("header__nav--open")&&(i.target.closest("#nav")||i.target.closest("#burger")||a(!1))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a(!1)}),window.addEventListener("resize",()=>{window.innerWidth>820&&a(!1)})}var ne="rentier-theme";function A(){let e=document.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t,localStorage.setItem(ne,t)})}function j(e){let t=document.getElementById("c-phone"),a=document.getElementById("c-email"),i=document.getElementById("socials"),n=String(e.contacts_phone_enabled)!=="false"&&!!e.phone,s=String(e.contacts_email_enabled)!=="false"&&!!e.email,l=String(e.contacts_instagram_enabled)!=="false"&&!!e.instagram,r=String(e.contacts_telegram_enabled)!=="false"&&!!e.telegram;t&&(n?(t.style.display="",t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg><a href="tel:${e.phone.replace(/[^\d+]/g,"")}">${e.phone}</a>`):(t.style.display="none",t.innerHTML="")),a&&(s?(a.style.display="",a.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><a href="mailto:${e.email}">${e.email}</a>`):(a.style.display="none",a.innerHTML="")),i&&(i.innerHTML="",l&&(i.innerHTML+=`<a class="contacts__social-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a>`),r&&(i.innerHTML+=`<a class="contacts__social-link" href="${e.telegram}" target="_blank" rel="noopener">Telegram</a>`),i.style.display=i.innerHTML?"":"none")}var ae=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
`,ie=`
    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"/>
    </svg>
`,se=`
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.3438 3.94922C18.8477 3.49219 16.8399 2.03516 12.3633 2.01562C12.3633 2.01562 7.08595 1.69922 4.51563 4.05859C3.08595 5.48828 2.58204 7.58594 2.52735 10.1836C2.47267 12.7812 2.40626 17.6484 7.09766 18.9687H7.10157L7.09766 20.9844C7.09766 20.9844 7.06641 21.8008 7.60548 21.9648C8.25391 22.168 8.63673 21.5469 9.25782 20.8789C9.59766 20.5117 10.0664 19.9727 10.4219 19.5625C13.6328 19.832 16.0977 19.2148 16.3789 19.125C17.0274 18.9141 20.6953 18.4453 21.2891 13.5781C21.9063 8.55469 20.9922 5.38281 19.3438 3.94922ZM19.8867 13.2109C19.3828 17.2734 16.4102 17.5312 15.8633 17.707C15.6289 17.7812 13.4609 18.3203 10.7383 18.1445C10.7383 18.1445 8.70704 20.5937 8.07423 21.2305C7.8672 21.4375 7.64063 21.418 7.64454 21.0078C7.64454 20.7383 7.66016 17.6602 7.66016 17.6602C7.65626 17.6602 7.65626 17.6602 7.66016 17.6602C3.6836 16.5586 3.91798 12.4141 3.96095 10.2461C4.00392 8.07812 4.41407 6.30078 5.62501 5.10547C7.80079 3.13281 12.2813 3.42578 12.2813 3.42578C16.0664 3.44141 17.8789 4.58203 18.3008 4.96484C19.6953 6.16016 20.4063 9.01953 19.8867 13.2109ZM14.457 10.0547C14.4727 10.3906 13.9688 10.4141 13.9531 10.0781C13.9102 9.21875 13.5078 8.80078 12.6797 8.75391C12.3438 8.73437 12.375 8.23047 12.707 8.25C13.7969 8.30859 14.4024 8.93359 14.457 10.0547ZM15.25 10.4961C15.2891 8.83984 14.2539 7.54297 12.2891 7.39844C11.957 7.375 11.9922 6.87109 12.3242 6.89453C14.5899 7.05859 15.7969 8.61719 15.7539 10.5078C15.75 10.8438 15.2422 10.8281 15.25 10.4961ZM17.0859 11.0195C17.0899 11.3555 16.582 11.3594 16.582 11.0234C16.5586 7.83984 14.4375 6.10547 11.8633 6.08594C11.5313 6.08203 11.5313 5.58203 11.8633 5.58203C14.7422 5.60156 17.0586 7.58984 17.0859 11.0195ZM16.6445 14.8516V14.8594C16.2227 15.6016 15.4336 16.4219 14.6211 16.1602L14.6133 16.1484C13.7891 15.918 11.8477 14.918 10.6211 13.9414C9.98829 13.4414 9.41016 12.8516 8.96485 12.2852C8.56251 11.7812 8.15626 11.1836 7.76173 10.4648C6.9297 8.96094 6.7461 8.28906 6.7461 8.28906C6.48438 7.47656 7.30079 6.6875 8.04688 6.26562H8.0547C8.41407 6.07812 8.75782 6.14062 8.98829 6.41797C8.98829 6.41797 9.47267 6.99609 9.6797 7.28125C9.87501 7.54687 10.1367 7.97266 10.2734 8.21094C10.5117 8.63672 10.3633 9.07031 10.1289 9.25L9.66017 9.625C9.42188 9.81641 9.45313 10.1719 9.45313 10.1719C9.45313 10.1719 10.1484 12.8008 12.7461 13.4648C12.7461 13.4648 13.1016 13.4961 13.293 13.2578L13.668 12.7891C13.8477 12.5547 14.2813 12.4062 14.707 12.6445C15.2813 12.9687 16.0117 13.4727 16.4961 13.9297C16.7695 14.1523 16.832 14.4922 16.6445 14.8516Z"/>
  </svg>
`,re=`
  <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
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
  `}var le={basic:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",kitchen:"\u041A\u0443\u0445\u043D\u044F",bathroom:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",bath:"\u0412\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",parking:"\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",building:"\u0414\u043E\u043C \u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",leisure:"\u0414\u043E\u0441\u0443\u0433 \u0440\u044F\u0434\u043E\u043C",rules:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",other:"\u0414\u0440\u0443\u0433\u043E\u0435"},O=["basic","kitchen","bathroom","bath","parking","building","leisure","rules","other"],oe={bath:"bathroom",building:"parking",rules:"other"},w={},R=!1,I=null;async function z(){return R?w:I||(I=(async()=>{try{let e=await fetch("data/icons.json");e.ok&&(w=await e.json(),R=!0)}catch(e){console.warn("icons.json \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D",e)}return w})(),I)}function ce(e){return w[e]||w.default||""}function $(e,t="amenity-icon"){return`<span class="${t}" data-icon="${e}"></span>`}function C(e=document){e.querySelectorAll("[data-icon]").forEach(a=>{let i=a.getAttribute("data-icon");a.innerHTML=ce(i)})}function E(e){return e?typeof e=="string"?e:e.slug||e.icon||"default":"default"}function x(e){return e?typeof e=="string"?e:e.label||e.slug||e.icon||"":""}function de(e){if(e&&typeof e=="object"&&e.category){let t=String(e.category).toLowerCase();return oe[t]||t}return"other"}function F(e){let t={};return(e||[]).forEach(a=>{let i=de(a);t[i]||(t[i]=[]),t[i].push(a)}),Object.entries(t).sort((a,i)=>{let n=O.indexOf(a[0]),s=O.indexOf(i[0]);return(n===-1?999:n)-(s===-1?999:s)}).map(([a,i])=>({category:a,title:le[a]||"\u0414\u0440\u0443\u0433\u043E\u0435",items:i}))}var Y="https://nominatim.openstreetmap.org/search",me="27.35,53.99,27.75,53.83";async function pe(e){let t=e.replace(/[.,]/g," ").replace(/\b(улица|ул|пр-т|проспект|пр|пер|переулок|бульвар|б-р|пл|площадь|д|дом)\b\.?/gi," ").replace(/\s+/g," ").trim(),a=[],i=t.match(/^(.+?)\s+(\d+[\w\-/]*)$/);i?(a.push({street:`${i[2]} ${i[1]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({street:`${i[1]} ${i[2]}`,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`}),a.push({street:i[1],city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"})):(a.push({street:t,city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}),a.push({q:`${t}, \u041C\u0438\u043D\u0441\u043A, \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C`})),a.push({city:"\u041C\u0438\u043D\u0441\u043A",country:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"});for(let n of a){let s=new URLSearchParams({format:"json",limit:"1",addressdetails:"1","accept-language":"ru"});n.street&&s.set("street",n.street),n.city&&s.set("city",n.city),n.country&&s.set("country",n.country),n.q&&s.set("q",n.q),s.set("viewbox",me),s.set("bounded","1");try{let r=await(await fetch(`${Y}?${s}`)).json();if(Array.isArray(r)&&r.length)return{lat:Number(r[0].lat),lng:Number(r[0].lon),label:r[0].display_name}}catch(l){console.warn("geocode error",n,l)}}try{let n=new URLSearchParams({format:"json",limit:"1","accept-language":"ru",q:`${t}, \u041C\u0438\u043D\u0441\u043A`}),s=await(await fetch(`${Y}?${n}`)).json();if(Array.isArray(s)&&s.length)return{lat:Number(s[0].lat),lng:Number(s[0].lon),label:s[0].display_name}}catch{}return null}function U(e,t){let a=document.getElementById("filters");if(!a)return;let i=document.getElementById("f-address"),n=document.getElementById("f-radius"),s=document.getElementById("f-geocode"),l=document.getElementById("f-geocode-hint"),r=document.getElementById("f-lat"),o=document.getElementById("f-lng"),u,f=()=>{let d={};return document.querySelectorAll("#filters input, #filters select").forEach(_=>{_.name&&_.value!==""&&(d[_.name]=_.value)}),d},m=()=>{let d=f();d.lat&&d.lng&&d.radius?delete d.q:(delete d.lat,delete d.lng,delete d.radius),e(d)},c=()=>{clearTimeout(u),u=setTimeout(m,300)},g=async()=>{let d=(i.value||"").trim();if(!d){r&&(r.value=""),o&&(o.value=""),l&&(l.textContent=""),t&&t(null),m();return}l&&(l.textContent="\u041F\u043E\u0438\u0441\u043A \u0430\u0434\u0440\u0435\u0441\u0430...");let _=await pe(d);if(!_){l&&(l.textContent="\u0410\u0434\u0440\u0435\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \xAB\u0443\u043B\u0438\u0446\u0430 + \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430\xBB."),r&&(r.value=""),o&&(o.value=""),t&&t(null);return}r&&(r.value=_.lat),o&&(o.value=_.lng),l&&(l.textContent=`\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ${_.label}`),n&&!Number(n.value)&&(n.value="1"),t&&t({lat:_.lat,lng:_.lng,radius:Number(n.value)}),m()};s&&s.addEventListener("click",g),a.addEventListener("submit",d=>{d.preventDefault(),g()}),a.addEventListener("change",c),a.addEventListener("input",d=>{d.target===i||d.target===n||c()}),n&&n.addEventListener("change",()=>{let d=f();d.lat&&d.lng&&t&&t({lat:Number(d.lat),lng:Number(d.lng),radius:Number(d.radius)}),m()}),a.addEventListener("reset",()=>setTimeout(()=>{r&&(r.value=""),o&&(o.value=""),l&&(l.textContent=""),t&&t(null),m()},0))}var ue="https://tiles.openfreemap.org/styles/positron";function B(e,t=[27.5667,53.9],a=11){let i=document.getElementById(e);if(!i)return null;let n=new maplibregl.Map({container:i,style:ue,center:t,zoom:a,attributionControl:{compact:!0}});n.addControl(new maplibregl.NavigationControl({showCompass:!1}),"top-right");let s=()=>{i.style.width="",n.resize()};return requestAnimationFrame(()=>requestAnimationFrame(s)),n.on("load",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i.parentElement||i),n}function W(e=!1){let t=document.createElement("button");return t.className="map-pin"+(e?" map-pin--active":""),t.setAttribute("aria-label","\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430"),t}function fe(){let e=document.createElement("div");return e.className="map-pin map-pin--center",e.style.background="var(--color-accent)",e.style.width="30px",e.style.height="30px",e}function ge(e){let t=e.main_image||e.images&&e.images[0],a=t?`<img class="pin-popup__image" src="${t}" alt="">`:`<div class="pin-popup__image pin-popup__image--placeholder">${e.rooms}-\u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>`;return`
    <a class="pin-popup" href="#/apartment?id=${e.id}">
      ${a}
      <div class="pin-popup__body">
        <div class="pin-popup__price">${M(e.price)}</div>
        <div class="pin-popup__title">${e.title}</div>
        <div class="pin-popup__meta">${e.rooms} \u043A\u043E\u043C\u043D. \xB7 ${e.area} \u043C\xB2</div>
        <span class="pin-popup__link">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192</span>
      </div>
    </a>`}function Z(e,t,{fit:a=!0}={}){let i=[];if(t.forEach(n=>{let s=new maplibregl.Marker({element:W()}).setLngLat([Number(n.lng),Number(n.lat)]).setPopup(new maplibregl.Popup({offset:24,maxWidth:"260px"}).setHTML(ge(n))).addTo(e);i.push(s)}),a&&t.length){let n=new maplibregl.LngLatBounds;t.forEach(s=>n.extend([Number(s.lng),Number(s.lat)])),requestAnimationFrame(()=>e.fitBounds(n,{padding:60,maxZoom:13,duration:600}))}return i}function G(e,t){let a=new maplibregl.Marker({element:W(!0)}).setLngLat([Number(t.lng),Number(t.lat)]).addTo(e);return requestAnimationFrame(()=>e.jumpTo({center:[Number(t.lng),Number(t.lat)],zoom:15})),a}var L=null,k=null;function V(e,t,a,i){if(!e)return;let n=[Number(a),Number(t)],s=Number(i);L&&L.remove(),L=new maplibregl.Marker({element:fe()}).setLngLat(n).addTo(e),k&&(e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),k=null);let l=64,r=[],u=s/6371;for(let c=0;c<=l;c++){let g=c*360/l*Math.PI/180,d=t*Math.PI/180,_=a*Math.PI/180,p=Math.asin(Math.sin(d)*Math.cos(u)+Math.cos(d)*Math.sin(u)*Math.cos(g)),h=_+Math.atan2(Math.sin(g)*Math.sin(u)*Math.cos(d),Math.cos(u)-Math.sin(d)*Math.sin(p));r.push([h*180/Math.PI,p*180/Math.PI])}let f={type:"Feature",geometry:{type:"Polygon",coordinates:[r]}};e.addSource("search-radius",{type:"geojson",data:f}),e.addLayer({id:"search-radius-fill",type:"fill",source:"search-radius",paint:{"fill-color":"#6b8f71","fill-opacity":.12}}),e.addLayer({id:"search-radius-line",type:"line",source:"search-radius",paint:{"line-color":"#6b8f71","line-width":2,"line-dasharray":[3,2]}}),k=!0;let m=r.reduce((c,g)=>c.extend(g),new maplibregl.LngLatBounds(r[0],r[0]));e.fitBounds(m,{padding:40,duration:500})}function X(e){e&&(L&&(L.remove(),L=null),e.getLayer("search-radius-fill")&&e.removeLayer("search-radius-fill"),e.getLayer("search-radius-line")&&e.removeLayer("search-radius-line"),e.getSource("search-radius")&&e.removeSource("search-radius"),k=null)}function M(e){return new Intl.NumberFormat("ru-BY").format(e)+" BYN"}var _e=8;function he(e){let t=Number(e);return!t||Number.isNaN(t)?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":M(t)}function ve(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function be(e){let t=document.createElement("a");t.className="card",t.href=`#/apartment?id=${e.id}`;let a=he(e.price),i=a==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${a} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`,n=(e.amenities||[]).slice(0,3).map(s=>`<span class="amenities__item">${$(E(s))}<span>${x(s)}</span></span>`).join("");return t.innerHTML=`
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
    </div>`,s=p=>Array.from({length:p},(h,b)=>`<button class="banner__dot ${b===0?"banner__dot--active":""}" type="button" data-dot="${b}" aria-label="\u0421\u043B\u0430\u0439\u0434 ${b+1}"></button>`).join("");a.innerHTML=i.map(n).join("");let l=e.querySelector(".banner__dots");l&&(l.innerHTML=s(i.length));let r=0,o=i.length,u=p=>{r=(p+o)%o,a.style.transform=`translateX(-${r*100}%)`,l&&l.querySelectorAll(".banner__dot").forEach((h,b)=>h.classList.toggle("banner__dot--active",b===r))},f=e.querySelector(".banner__nav--prev"),m=e.querySelector(".banner__nav--next");f&&f.addEventListener("click",()=>{u(r-1),_()}),m&&m.addEventListener("click",()=>{u(r+1),_()}),l&&l.addEventListener("click",p=>{let h=p.target.closest("[data-dot]");h&&(u(Number(h.dataset.dot)),_())});let c=null,g=()=>{o>1&&(c=setInterval(()=>u(r+1),5e3))},d=()=>{c&&(clearInterval(c),c=null)},_=()=>{d(),g()};e.addEventListener("mouseenter",d),e.addEventListener("mouseleave",g),g()}async function D(e,{settings:t,allApartments:a}){e.innerHTML=`
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
  `,P(t,a);let i={"@context":"https://schema.org","@type":"RealEstateAgent",name:t.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",description:t.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430.",url:location.origin+"/",areaServed:{"@type":"City",name:"\u041C\u0438\u043D\u0441\u043A"},numberOfAccommodationUnits:a.length},n=document.createElement("script");n.type="application/ld+json",n.setAttribute("data-jsonld","1"),n.textContent=JSON.stringify(i),document.head.appendChild(n);let s=e.querySelector(".banner");s&&$e(s,a);let l=document.getElementById("grid"),r=document.getElementById("grid-more"),o=document.getElementById("load-more"),u=document.getElementById("grid-status"),f=B("map"),m=[],c=[],g=0;function d(){let p=c.slice(g,g+_e);p.forEach(h=>l.appendChild(be(h))),C(l),g+=p.length,r.hidden=g>=c.length,u.textContent=g>=c.length?`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u0441\u0435 ${c.length} \u043A\u0432\u0430\u0440\u0442\u0438\u0440`:`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${g} \u0438\u0437 ${c.length}`}function _(p){if(c=ye(a,p),g=0,l.innerHTML="",u.textContent="",!c.length){u.textContent="\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",r.hidden=!0,f&&(m.forEach(h=>h.remove()),m=[]);return}d(),f&&(m.forEach(h=>h.remove()),m=Z(f,c,{fit:c.length>0}))}o&&o.addEventListener("click",d),U(_,p=>{if(f){if(!p){X(f);return}V(f,p.lat,p.lng,p.radius)}}),_({})}var Ce=["wifi","washer","ac","fridge","stove","tv","elevator","dishwasher"];function Ee(e,t,a){e.innerHTML=`
    <div class="container" style="padding:60px 0;text-align:center;">
      <h1 style="font-size:22px;margin:0 0 12px;">${t}</h1>
      <p style="color:var(--color-muted);margin:0 0 8px;white-space:pre-wrap;">${a}</p>
      <a class="btn btn--primary" href="#/">\u2190 \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>
    </div>`}function J(e){let t=Number(e);return!t||Number.isNaN(t)?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":M(t)}function Le(e){if(!e)return null;let t=String(e).toLowerCase();return t.includes("\u0431\u0435\u0441\u043F\u043B\u0430\u0442")?!0:t.includes("\u043F\u043B\u0430\u0442\u043D")||t.includes("\u043D\u0435\u0442")||t.includes("\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432")?!1:null}function we(e){let t=document.getElementById("slider"),a=document.getElementById("slider-track"),i=document.getElementById("sl-prev"),n=document.getElementById("sl-next"),s=document.getElementById("sl-dots");if(!t||!a)return;let l=(e||[]).filter(Boolean);if(!l.length){a.innerHTML='<div class="slider__img slider__img--empty">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F</div>',i&&(i.style.display="none"),n&&(n.style.display="none"),s&&(s.style.display="none");return}a.innerHTML=l.map((m,c)=>`<img class="slider__img" src="${m}" alt="\u0424\u043E\u0442\u043E ${c+1} \u0438\u0437 ${l.length}" loading="${c===0?"eager":"lazy"}" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'slider__img slider__img--empty',textContent:'\u0424\u043E\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'}))">`).join(""),s&&(s.innerHTML=l.map((m,c)=>`<button class="slider__dot ${c===0?"slider__dot--active":""}" type="button" data-slide="${c}" aria-label="\u0421\u043B\u0430\u0439\u0434 ${c+1}"></button>`).join(""));let r=0,o=l.length,u=()=>{a.style.transform=`translateX(-${r*100}%)`,s&&s.querySelectorAll(".slider__dot").forEach((m,c)=>m.classList.toggle("slider__dot--active",c===r)),o<2&&(i&&(i.style.display="none"),n&&(n.style.display="none"),s&&(s.style.display="none"))};i&&i.addEventListener("click",()=>{r=(r-1+o)%o,u()}),n&&n.addEventListener("click",()=>{r=(r+1)%o,u()}),s&&s.addEventListener("click",m=>{let c=m.target.closest("[data-slide]");c&&(r=Number(c.dataset.slide)||0,u())});let f=0;t.addEventListener("touchstart",m=>{f=m.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",m=>{let c=m.changedTouches[0].clientX-f;Math.abs(c)<40||(r=c>0?(r-1+o)%o:(r+1)%o,u())}),t.setAttribute("aria-roledescription","\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"),u()}function xe(e){let t=Le(e.parking),a=[["\u041A\u043E\u043C\u043D\u0430\u0442",e.rooms],["\u041F\u043B\u043E\u0449\u0430\u0434\u044C",e.area?e.area+" \u043C\xB2":""],["\u042D\u0442\u0430\u0436",e.floor?`${e.floor}/${e.floors_total||"?"}`:""],["\u0413\u043E\u0441\u0442\u0435\u0439 \u0434\u043E",e.max_guests],["\u0421\u043F\u0430\u043B\u0435\u043D",e.bedrooms],["\u0421\u0430\u043D\u0443\u0437\u043B\u043E\u0432",e.bathrooms],["\u041A\u0443\u0445\u043D\u044F",e.kitchen_type],["\u0420\u0435\u043C\u043E\u043D\u0442",e.repair],["\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430",t===null?"":t?"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F":"\u041F\u043B\u0430\u0442\u043D\u0430\u044F"]].filter(([,n])=>n!=null&&n!=="");document.getElementById("a-params").innerHTML=a.map(([n,s])=>`<li class="apartment__param"><span class="apartment__param-label">${n}</span><span class="apartment__param-value">${s}</span></li>`).join("");let i=document.getElementById("a-view");e.view?(i.hidden=!1,i.innerHTML=`
      <span class="apartment__view-label">\u0412\u0438\u0434 \u0438\u0437 \u043E\u043A\u043D\u0430</span>
      <span class="apartment__view-value">${e.view}</span>`):i.hidden=!0}function Me(e){let t=document.getElementById("map-links");t&&(t.innerHTML=`
    <a class="map-links__item" href="https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}" target="_blank" rel="noopener">Google Maps</a>
    <a class="map-links__item" href="https://yandex.by/maps/?pt=${e.lng},${e.lat}&z=17&l=map" target="_blank" rel="noopener">\u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B</a>`)}function Ie(e){if(!e||!e.length)return;let t=document.getElementById("sleeping-list"),a=e.reduce((n,s)=>n+(Number(s.count)||0),0),i=e.reduce((n,s)=>n+(Number(s.count)||0)*(s.type==="double"||s.type==="double-sofa"?2:1),0);t.innerHTML=`
    <p class="sleeping__summary">${a} \u043A\u0440\u043E\u0432\u0430\u0442${a===1?"\u044C":"\u0438"} \xB7 ${i} \u0441\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0441\u0442</p>
    ${e.map(n=>`
      <div class="sleeping__item">
        ${$(n.type==="sofa"||n.type==="double-sofa"?"sofa":"bed")}
        <div>
          <div class="sleeping__type">${n.label||n.type}</div>
          <div class="sleeping__count">\xD7${n.count||1}</div>
        </div>
      </div>`).join("")}`,C(t),document.getElementById("sleeping-section").hidden=!1}function ke(e){if(!e||!e.length)return;let t=document.getElementById("amenities-section"),a=document.getElementById("amenities-top"),i=document.getElementById("amenities-groups"),n=[],s=[];e.forEach(r=>{let o=E(r);Ce.includes(o)&&n.length<8?n.push(r):s.push(r)}),a.innerHTML=n.map(r=>`
    <li class="amenities__item amenities__item--top">
      ${$(E(r))}<span>${x(r)}</span>
    </li>`).join("");let l=F(s);i.innerHTML=l.map(r=>`
    <details class="amenities__group">
      <summary class="amenities__group-summary">
        <span>${r.title}</span>
        <span class="amenities__group-count">${r.items.length}</span>
      </summary>
      <ul class="amenities__group-list">
        ${r.items.map(o=>`<li class="amenities__item">${$(E(o))}<span>${x(o)}</span></li>`).join("")}
      </ul>
    </details>`).join(""),C(t),t.hidden=!1}function Be(e){let t=[`\u0417\u0430\u0435\u0437\u0434 \u0441 ${e.check_in||"14:00"} \xB7 \u0432\u044B\u0435\u0437\u0434 \u0434\u043E ${e.check_out||"12:00"}`,e.smoking_allowed?"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E":"\u041A\u0443\u0440\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E",e.pets_allowed==="yes"?"\u041C\u043E\u0436\u043D\u043E \u0441 \u043F\u0438\u0442\u043E\u043C\u0446\u0430\u043C\u0438":e.pets_allowed==="no"?"\u0411\u0435\u0437 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445":"\u041F\u0438\u0442\u043E\u043C\u0446\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E",e.children_allowed==="no"?"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445":"\u041C\u043E\u0436\u043D\u043E \u0441 \u0434\u0435\u0442\u044C\u043C\u0438",e.parties_allowed==="no"?"\u0412\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u044B":e.parties_allowed==="yes"?"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B":"\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"];e.report_docs&&t.push("\u041E\u0442\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E"),document.getElementById("rules-list").innerHTML=t.map(a=>`<div class="rules__item">${a}</div>`).join("")}function Ne(e){let t=e.main_image||e.images&&e.images[0];return t?`<img class="card__image" src="${t}" alt="${e.title}" loading="lazy" decoding="async"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__image--placeholder',innerHTML:'<img src=\\'img/placeholder.svg\\' alt=\\'\\'>'}))">`:'<div class="card__image--placeholder"><img src="img/placeholder.svg" alt=""></div>'}function Se(e,t){let a=document.getElementById("similar-grid");if(!a)return;let i=t.filter(n=>n.id!==e.id).sort(()=>Math.random()-.5).slice(0,4);a.innerHTML=i.map(n=>{let s=J(n.price),l=s==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${s} <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`;return`
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
      </a>`}).join(""),C(a)}function Te(e){let t=document.getElementById("a-contact-phone"),a=document.getElementById("a-contact-email"),i=document.getElementById("a-contact-socials");if(!t||!a||!i)return;let n=e||{},s=String(n.contacts_phone_enabled)!=="false"&&!!n.phone,l=String(n.contacts_email_enabled)!=="false"&&!!n.email,r=String(n.contacts_instagram_enabled)!=="false"&&!!n.instagram,o=String(n.contacts_telegram_enabled)!=="false"&&!!n.telegram,u=String(n.contacts_viber_enabled)!=="false"&&!!n.viber,f=String(n.contacts_whatsapp_enabled)!=="false"&&!!n.whatsapp;if(s){let c=n.phone.replace(/[^\d+]/g,"");t.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
      <a href="tel:${c}">${n.phone}</a>`,t.style.display=""}else t.style.display="none";l?(a.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      <a href="mailto:${n.email}">${n.email}</a>`,a.style.display=""):a.style.display="none";let m="";r&&(m+=`<a class="apartment__contact-social" href="${n.instagram}" target="_blank" rel="noopener">Instagram</a>`),o&&(m+=`<a class="apartment__contact-social" href="${n.telegram}" target="_blank" rel="noopener">Telegram</a>`),u&&(m+=`<a class="apartment__contact-social" href="${n.viber}" target="_blank" rel="noopener">Viber</a>`),f&&(m+=`<a class="apartment__contact-social" href="${n.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`),i.innerHTML=m,i.style.display=m?"":"none"}async function K(e,{settings:t,allApartments:a,id:i}){let n=a.find(p=>Number(p.id)===Number(i));if(!n){Ee(e,"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",`\u0412 data/apartments.json \u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0441 id = ${i}.`);return}let l=location.origin+"/#/apartment?id="+n.id,r=J(n.price);document.title=`${n.title} \u2014 ${r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0446\u0435\u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+"/\u043C\u0435\u0441"}, \u041C\u0438\u043D\u0441\u043A`;let o=`\u0410\u0440\u0435\u043D\u0434\u0430 ${n.rooms}-\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ${n.address}. ${n.area} \u043C\xB2, ${r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0446\u0435\u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+" \u0432 \u043C\u0435\u0441\u044F\u0446"}. \u0411\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u043E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430.`,u=document.querySelector('meta[name="description"]');u||(u=document.createElement("meta"),u.name="description",document.head.appendChild(u)),u.content=o;let f=document.querySelector('link[rel="canonical"]');f||(f=document.createElement("link"),f.rel="canonical",document.head.appendChild(f)),f.href=l;let m=n.main_image||n.images&&n.images[0]||"";[["og:type","product"],["og:title",n.title],["og:description",o],["og:url",l],["og:image",m]].forEach(([p,h])=>{let b=document.querySelector(`meta[property="${p}"]`);b||(b=document.createElement("meta"),b.setAttribute("property",p),document.head.appendChild(b)),b.setAttribute("content",h)});let g={"@context":"https://schema.org","@type":"Apartment",name:n.title,numberOfRooms:n.rooms,floorSize:{"@type":"QuantitativeValue",value:Number(n.area),unitCode:"MTK"},address:{"@type":"PostalAddress",streetAddress:n.address,addressLocality:"\u041C\u0438\u043D\u0441\u043A",addressCountry:"BY"},geo:{"@type":"GeoCoordinates",latitude:Number(n.lat),longitude:Number(n.lng)},offers:{"@type":"Offer",price:n.price||void 0,priceCurrency:"BYN",availability:"https://schema.org/InStock"},image:n.images||[]},d=document.createElement("script");if(d.type="application/ld+json",d.setAttribute("data-jsonld","1"),d.textContent=JSON.stringify(g),document.head.appendChild(d),e.innerHTML=`
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
  `,document.getElementById("a-price").textContent=r==="\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F"?"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F":r+" / \u043C\u0435\u0441",document.getElementById("a-title").textContent=n.title,document.getElementById("a-address").textContent=n.address,document.getElementById("a-desc").textContent=n.description||"",xe(n),Ie(n.sleeping_places),ke(n.amenities),Be(n),Se(n,a),Te(t),we(n.images||[]),Me(n),document.getElementById("map")){let p=B("map",[Number(n.lng),Number(n.lat)],15);G(p,n)}}H();A();var N=location.origin,S="\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435";async function Q(e){let t=await fetch(e);if(!t.ok)throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+e);return t.json()}var y={},T=[];function v(e,t,a=!1){if(!t)return;let i=a?"property":"name",n=document.querySelector(`meta[${i}="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute(i,e),document.head.appendChild(n)),n.setAttribute("content",t)}function te(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=e}function He(e){if(document.querySelectorAll("script[data-jsonld]").forEach(a=>a.remove()),!e)return;let t=document.createElement("script");t.type="application/ld+json",t.setAttribute("data-jsonld","1"),t.textContent=JSON.stringify(e),document.head.appendChild(t)}function Ae(){v("robots","index, follow"),v("og:site_name",S,!0),v("og:type","website",!0),v("og:locale","ru_BY",!0)}function je(){let e=location.hash.replace(/^#/,"")||"/",[t,a]=e.split("?"),i=new URLSearchParams(a||"");return t==="/"||t===""?{page:"home"}:t==="/apartment"?{page:"apartment",id:Number(i.get("id"))}:t==="apartments"?{page:"home",anchor:"apartments"}:t==="map-section"?{page:"home",anchor:"map-section"}:t==="footer"||t==="/contacts"?{page:"home",anchor:"footer"}:{page:"404"}}function Pe(e){let t=Number(e);return!t||Number.isNaN(t)?'<div class="card__price">\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u0430\u044F</div>':`<div class="card__price">${new Intl.NumberFormat("ru-BY").format(t)} BYN <span class="card__price-unit">/ \u043C\u0435\u0441</span></div>`}function qe(e){document.title="\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u2014 "+S,v("description","\u0417\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E."),v("robots","noindex, follow"),v("og:title","\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",!0),v("og:url",N+location.pathname+location.hash,!0),te(N+"/"),He(null);let t=T.slice(0,6),a=t.map(i=>`
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
  `}async function ee(){let e=je(),t=document.getElementById("app");if(t)if(t.innerHTML="",Ae(),e.page==="home"?await D(t,{settings:y,allApartments:T,anchor:e.anchor}):e.page==="apartment"?await K(t,{settings:y,allApartments:T,id:e.id}):qe(t),j(y),q(y),document.getElementById("site-title-text").textContent=y.site_title||"\u0410\u0440\u0435\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435",e.page!=="apartment"&&e.page!=="404"&&(document.title=y.site_title||S,v("description",y.hero_subtitle||"\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430."),v("og:title",y.site_title||S,!0),v("og:description",y.hero_subtitle||"",!0),v("og:url",N+"/",!0),te(N+"/")),e.anchor){let a=document.getElementById(e.anchor);a&&requestAnimationFrame(()=>{a.scrollIntoView({behavior:"auto",block:"start"})})}else window.scrollTo({top:0,behavior:"auto"})}function Oe(e){let t=(e.font_family||"").trim(),a=(e.font_google_url||"").trim();if(a&&!document.querySelector("link[data-google-font]")){let i=document.createElement("link");i.rel="preconnect",i.href="https://fonts.googleapis.com",document.head.appendChild(i);let n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);let s=document.createElement("link");s.rel="stylesheet",s.href=a,s.setAttribute("data-google-font","1"),document.head.appendChild(s)}if(t){let i=`'${t}', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`;document.documentElement.style.setProperty("--font",i)}}document.addEventListener("click",e=>{let t=e.target.closest('a[href^="#"]');if(!t)return;let a=t.getAttribute("href");if(!a||a==="#")return;let i=a.replace(/^#\/?/,"").split("?")[0];if(!["apartments","map-section","footer","contacts"].includes(i))return;let n=location.hash.replace(/^#/,"")||"/",s=n==="/"||n===""||n==="#";e.preventDefault();let l=i==="contacts"?"footer":i,r=()=>{let o=document.getElementById(l);o&&o.scrollIntoView({behavior:"smooth",block:"start"})};if(s){r();return}location.hash="#"+i,requestAnimationFrame(()=>{requestAnimationFrame(r)})},!0);(async()=>{try{await Promise.all([Q("data/settings.json"),Q("data/apartments.json"),z()]).then(([e,t])=>{y=e,T=t})}catch(e){console.error(e),document.getElementById("app").innerHTML=`
      <div class="container" style="padding:80px 0;text-align:center;">
        <h1 style="font-size:24px;margin:0 0 12px;">\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435</h1>
        <p style="color:var(--color-muted);margin:0 0 24px;">\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.</p>
        <button class="btn btn--primary" onclick="location.reload()">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>
      </div>`;return}Oe(y),window.addEventListener("hashchange",ee),ee()})();
