import globalCss from './style.css'

// Inject CSS
document.head.append(<style>{globalCss}</style>)

for (const headline of document.getElementsByClassName('mw-headline')) {
    // Inject links
    const link = <a className="headerlink" href={`#${headline.id}`} title="Permalink to this headline">¶</a>
    headline.insertAdjacentElement('afterend', link)

    // Add hover events
    const parent = headline.parentNode
    parent.addEventListener('mouseenter', () => {
        link.style.visibility = 'visible'
    })
    parent.addEventListener('mouseleave', () => {
        link.style.visibility = 'hidden'
    })
}
