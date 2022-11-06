
let titleContact = document.querySelector('#titleContact');
let selectorTitleContact = 'Rota';
titleContact.textContent = selectorTitleContact;


let subtitleContact = document.querySelector('#subtitleContact');
let selectorSubtitleContact = 'Veja como chegar';
subtitleContact.textContent = selectorSubtitleContact;


let rotaIframe = document.querySelector('#rota');
let selectorRotaIframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.56223344515!2d-48.07744593965978!3d-15.721717481080342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1667769848635!5m2!1spt-BR!2sbr';
rotaIframe.setAttribute('src', selectorRotaIframe);