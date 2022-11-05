import { setTitles } from './head/title.js';

const titleHead = 'SIG PANEL';
let setTitle = '';
setTitles(setTitle);
setTitle = document.getElementById('titleHead');
setTitle.innerHTML = titleHead;