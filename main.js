import { StartDownloadData } from "./main_by_ajax.js";

const btn = document.querySelector('.btn');

const btnAnimation = e => {
    const insideBtnTop = e.clientY - e.target.offsetTop;
    const insideBtnLeft = e.clientX - e.target.offsetLeft;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = insideBtnTop + 'px';
    circle.style.left = insideBtnLeft + 'px';

    e.target.appendChild(circle);
    setTimeout(() => {
        circle.remove();
        btn.style.opacity = "0";
    }, 300);
}

btn.addEventListener('click', btnAnimation);



function BuildErrorSquare(message){
    const html = document.createElement('div');
    html.classList.add("ErrorBox");
    html.innerText = message;
    return html;
}

btn.addEventListener('click', ()=> {
    StartDownloadData(btn);
});