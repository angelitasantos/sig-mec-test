function setFontAwesomeHead(fontAwesomeLink) {

    let headFontAwesome = document.querySelector('head');
    let setFontAwesome = document.createElement('script');

    setFontAwesome.setAttribute('crossorigin', 'anonymous');
    setFontAwesome.setAttribute('src', fontAwesomeLink);
    headFontAwesome.appendChild(setFontAwesome);
}

export { setFontAwesomeHead };