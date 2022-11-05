function setTitles(title) {

    let headTitle = document.querySelector('head');
    let setTitle = document.createElement('title');

    setTitle.setAttribute('id', 'titleHead');
    headTitle.appendChild(setTitle);
}

export { setTitles };