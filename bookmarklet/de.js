!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.0.7",n=e=>{const n=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert('Ziehen Sie die Schaltfläche "Sa11y" in Ihre Lesezeichenleiste. Klicken Sie dann auf einer beliebigen Webseite auf das Lesezeichen.'):alert("Sa11y ist bereits auf dieser Seite geladen. Bitte warten Sie, oder laden Sie die Seite neu und versuchen Sie es erneut."):function(t){const s=document.createElement("link"),i=document.getElementsByTagName("head")[0];s.rel="stylesheet",s.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,s.type="text/css",i.appendChild(s);const a=document.createElement("script");a.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${t}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(a),a.onload=()=>n(t),a.onreadystatechange=()=>n(t)}("de")}));
