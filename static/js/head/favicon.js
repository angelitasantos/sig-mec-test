function setFaviconHead(favImg) {

    let headFavicon = document.querySelector('head');
    let setFavicon = document.createElement('link');

    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headFavicon.appendChild(setFavicon);
}

export { setFaviconHead };