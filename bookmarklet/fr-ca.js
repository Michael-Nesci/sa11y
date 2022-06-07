/*-----------------------------------------------------------------------
* Sa11y: the accessibility quality assurance assistant.
* Bookmarklet: French (Canadian)
* @author: Development led by Adam Chaboryk, CPWA
* @acknowledgements: https://sa11y.netlify.app/acknowledgements/
* @license: https://github.com/ryersondmp/sa11y/blob/master/LICENSE.md
* Copyright (c) 2020 - 2022 Toronto Metropolitan University
* The above copyright notice shall be included in all copies or substantial portions of the Software.
------------------------------------------------------------------------*/

const v = "2.2.4"; //Version

/* Append sa11y.css */
const sa11ycss = document.createElement("link");
sa11ycss.setAttribute("rel", "stylesheet");
sa11ycss.setAttribute("href", `https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${v}/src/sa11y.min.css`);
sa11ycss.setAttribute("type", "text/css");

const bodyheader = document.getElementsByTagName("head")[0];
bodyheader.appendChild(sa11ycss);

/* Queue Poppers.js, Tippy.js, and Sa11y. Thanks to JSDeliver for this cool combine feature! */
const combine = document.createElement("script");
combine.src = `https://cdn.jsdelivr.net/combine/npm/@popperjs/core@2/dist/umd/popper.min.js,npm/tippy.js@6/dist/tippy.umd.min.js,gh/ryersondmp/sa11y@${v}/src/lang/fr-ca.min.js,gh/ryersondmp/sa11y@${v}/src/sa11y.min.js`;

document.body.appendChild(combine);
combine.onload = combine.onreadystatechange = function() {
    new Sa11y({
        detectSPArouting: true
    });
};