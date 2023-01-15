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

function BuildUserSquare(id, login, imgUrl, urltoAccount) {
    const html = document.createElement('div');
    html.classList.add("userBox");
    html.innerHTML = `
        <a href="${urltoAccount}">
            <img src="${imgUrl}" title="User Image" class="userBox-img" />
        </a>
        <div class="userBox-body">
            Id: ${id}<br/>
            Login: ${login}<br/>
        </div>
    `;
    return html;
}

function BuildErrorSquare(message){
    const html = document.createElement('div');
    html.classList.add("ErrorBox");
    html.innerText = message;
    return html;
}