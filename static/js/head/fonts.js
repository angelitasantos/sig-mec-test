function setFontsHead(fontLink) {

    let headFont = document.querySelector('head');
    let setFont = document.createElement('link');

    setFont.setAttribute('rel', 'stylesheet');
    setFont.setAttribute('href', fontLink);
    headFont.appendChild(setFont);
}

export { setFontsHead };