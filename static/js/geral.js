import { setFaviconHead } from './head/favicon.js';
import { setMetaDescription, setMetaauthor, setMetaKeyWords, setMetaRobots, setMetaClassification } from './head/meta.js';
import { setFontAwesomeHead } from './head/fontAwesome.js';
import { setFontsHead } from './head/fonts.js';
import { setCssHead } from './head/css.js';


const host = 'https://angelitasantos.github.io/sig-mec-test/';
const cssFolder = 'static/css/';
const imgFolder = 'static/img/';
const jsFolder = 'static/js/';


// Content Meta
const metaDescription = 'Descrição do website.';
setMetaDescription(metaDescription);

const metaAuthor = 'Autor do website.';
setMetaauthor(metaAuthor);

const metaKeyWords = 'tag1, tag2';
setMetaKeyWords(metaKeyWords);

const metaRobots = 'index, follow';
setMetaRobots(metaRobots);

const metaClassification = 'site, personal, website';
setMetaClassification(metaClassification);


// Favicon
const linkFavicon = host + imgFolder + 'logo.png';
setFaviconHead(linkFavicon);


// Links Icons and Fonts
const fontIcons = 'https://kit.fontawesome.com/bfe7a3e22e.js';
setFontAwesomeHead(fontIcons);

const fontFamilyRoboto = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
setFontsHead(fontFamilyRoboto);

const fontFamilyMontserrat = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
setFontsHead(fontFamilyMontserrat);


// Links CSS files
const linkCssReset = host + cssFolder + 'reset.css';
setCssHead(linkCssReset);

const linkCssRoot = host + cssFolder + 'root.css';
setCssHead(linkCssRoot);

const linkCssStyle = host + cssFolder + 'style.css';
setCssHead(linkCssStyle);

const linkResponsive = host + cssFolder + 'responsive.css';
setCssHead(linkResponsive);
