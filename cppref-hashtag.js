// ==UserScript==
// @name         cppref-hashtag
// @namespace    mailto:QuarticCat@protonmail.com
// @version      0.1.0
// @description  Add Python-doc-like links to cppreference
// @author       QuarticCat
// @match        https://*.cppreference.com/w/cpp/language/lambda
// @icon         https://www.google.com/s2/favicons?domain=cppreference.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict'

    // Inject CSS class
    document.getElementsByTagName('head')[0].innerHTML += `
        <style type="text/css">
            a.headerlink {
                color: #0072aa;
                /* font-size: 0.8em; */
                /* padding: 0 4px 0 4px; */
                text-decoration: none;
                visibility: hidden;
            }
        </style>
    `

    for (let headline of document.getElementsByClassName('mw-headline')) {
        // Inject links
        headline.insertAdjacentHTML('afterend', `
            <a class="headerlink" href="#${headline.id}" title="Permalink to this headline">¶</a>
        `)

        // Add hover events
        const parent = headline.parentNode
        const link = headline.nextElementSibling
        parent.addEventListener('mouseenter', () => {
            link.style.visibility = 'visible'
        })
        parent.addEventListener('mouseleave', () => {
            link.style.visibility = 'hidden'
        })
    }
})();
