function setCssHead(cssFile) {

    let headCss = document.querySelector('head');
    let setCss = document.createElement('link');

    setCss.setAttribute('rel', 'stylesheet');
    setCss.setAttribute('href', cssFile);
    headCss.appendChild(setCss);
}

export { setCssHead };