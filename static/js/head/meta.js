function setMetaDescription(content) {

    let headMeta = document.querySelector('head');
    let setMeta = document.createElement('meta');

    setMeta.setAttribute('name', 'description');
    setMeta.setAttribute('content', content);
    headMeta.appendChild(setMeta);
}


function setMetaauthor(content) {

    let headMeta = document.querySelector('head');
    let setMeta = document.createElement('meta');

    setMeta.setAttribute('name', 'author');
    setMeta.setAttribute('content', content);
    headMeta.appendChild(setMeta);
}


function setMetaKeyWords(content) {

    let headMeta = document.querySelector('head');
    let setMeta = document.createElement('meta');

    setMeta.setAttribute('name', 'keyWords');
    setMeta.setAttribute('content', content);
    headMeta.appendChild(setMeta);
}


function setMetaRobots(content) {

    let headMeta = document.querySelector('head');
    let setMeta = document.createElement('meta');

    setMeta.setAttribute('name', 'robots');
    setMeta.setAttribute('content', content);
    headMeta.appendChild(setMeta);
}


function setMetaClassification(content) {

    let headMeta = document.querySelector('head');
    let setMeta = document.createElement('meta');

    setMeta.setAttribute('name', 'classification');
    setMeta.setAttribute('content', content);
    headMeta.appendChild(setMeta);
}


export { setMetaDescription, setMetaauthor, setMetaKeyWords, setMetaRobots, setMetaClassification };