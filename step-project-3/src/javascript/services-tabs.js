const tabContent = document.getElementsByClassName('services__tab-content');
const tabLinks = document.getElementsByClassName('services__button');

function openService(evt, serviceName) {

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' services__button--active', '');
    }

    document.getElementById(serviceName).style.display = 'flex';
    evt.currentTarget.className += ' services__button--active';
}

const serviceArray = ['web_design', 'graphic_design', 'online_support', 'app_design', 'online_marketing', 'seo_service'];

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].onclick = function () {
        openService(event, serviceArray[i]);
    }
}
