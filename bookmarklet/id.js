!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.0.4",n=e=>{const n=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert('Seret tombol "Sa11y" ke bilah penanda Anda. Kemudian klik penanda di halaman web mana pun.'):alert("Sa11y sudah dimuat di halaman ini. Mohon tunggu, atau muat ulang halaman dan coba lagi."):function(a){const t=document.createElement("link"),s=document.getElementsByTagName("head")[0];t.rel="stylesheet",t.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,t.type="text/css",s.appendChild(t);const d=document.createElement("script");d.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${a}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(d),d.onload=()=>n(a),d.onreadystatechange=()=>n(a)}("id")}));