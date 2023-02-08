function GetData() {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.getResponseHeader("Content-type", "application/json");
        xhr.open("GET", "https://api.github.com/users", true);
        xhr.send();

        xhr.onload = function () {
            if (this.status == 200) {
                const users = JSON.parse(this.responseText);
                let htmlCode = document.createElement("main");
                users.forEach(element => {
                    htmlCode.appendChild(BuildUserSquare(element.id, element.login, element.avatar_url, element.html_url));
                });
                resolve(htmlCode);
            }
            else {
                const text = JSON.parse(this.responseText);
                reject(BuildErrorSquare(text.message));
            }
        }

        xhr.onerror = function () {
            reject(BuildErrorSquare(this.status));
        }

        xhr.onreadystatechange = function () {
            console.log("State: " + xhr.readyState);
        }
    });
}

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

export function StartDownloadData(btn) {
    setTimeout(() => {
        btn.remove();
        document.querySelector(".lds-roller").style.display = "block";
        GetData().then(res => {
            document.querySelector(".lds-roller").remove();
            document.querySelector("main").appendChild(res);
        }).catch(error => {
            document.querySelector(".lds-roller").remove();
            document.querySelector("main").appendChild(error);
        });
    }, 300);
}