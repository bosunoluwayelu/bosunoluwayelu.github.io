let logo = document.querySelector('img');

logo.onclick = function() {
    let src = logo.getAttribute('src');

    if (src === 'images/firefox-icon.jpg') {
        logo.setAttribute('src', 'images/firefox-icon.png');
    }
    else {
        logo.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

let btnChangeUser = document.querySelector('button');
let pgHeader = document.querySelector('h1');

function SetUserName() {
    let userName = prompt('Please enter your name');
    
    if(!userName || userName === null) {
        SetUserName();
    }
    else {
        localStorage.setItem('name', userName);
    pgHeader.textContent = 'Mozilla is Cool'
    }

    if (!localStorage.getItem('name')) {
        SetUserName();
    } else {
        let storedName = localStorage.getItem('name');
        pgHeader.textContent = 'Mozilla is cool, ' + storedName;
    }
}

btnChangeUser.onclick = function() {
    SetUserName();
}

