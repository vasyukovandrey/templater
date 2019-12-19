"use strict";
const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
let data = new Object();

function xhrSuccess() {
<<<<<<< HEAD
    this.callback.apply(this, this.arguments);
=======
    this.callback.apply(this);
>>>>>>> f9eca96... правки #3
}

function xhrError() { 
    console.error('error: ${this.status}; request status: ${this.statusText}'); 
}

function loadFile(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.responseType = 'json';
<<<<<<< HEAD
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
=======
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send();
>>>>>>> f9eca96... правки #3
}

function cunstruct() {
    data = this.response;
<<<<<<< HEAD
    let wrap = document.getElementById("root");
    for(let el in data) {
        if(typeof data[el] === 'object') {
            let herowsWrap = document.createElement('div');
            herowsWrap.className = 'herowWrap';
            for(let members in data[el]) {
                let herowsElement = document.createElement('div');
                herowsElement.className = 'herowWrap__element hero';
                for (let heroProp in data[el][members]) {
                    if ( typeof data[el][members][heroProp] === 'object') {
                        let powersTitle =  document.createElement('p');
                        powersTitle.className = 'hero__powersTitle';
                        powersTitle.innerHTML = heroProp;
                        herowsElement.appendChild(powersTitle);
                        let herowsElementPropList =  document.createElement('ul');
                        herowsElementPropList.className = 'hero__' + heroProp;
                        for (let heroPower in data[el][members][heroProp]) {
                            let herowsElementPropListItem =  document.createElement('li');
                            herowsElementPropListItem.className = 'hero__power';
                            herowsElementPropListItem.innerHTML = data[el][members][heroProp][heroPower];
                            herowsElementPropList.appendChild(herowsElementPropListItem);
                        }
                        herowsElement.appendChild(herowsElementPropList);
                    } else {
                        let herowsElementProp =  document.createElement('div');
                        herowsElementProp.className = 'hero__' + heroProp;
                        herowsElementProp.innerHTML = '<b>' + heroProp + '</b>:' + data[el][members][heroProp];
                        herowsElement.appendChild(herowsElementProp);
                    }
                }
                herowsWrap.appendChild(herowsElement);
            }
            wrap.appendChild(herowsWrap);
        } else if(typeof data[el] !== 'boolean') {
            let newElement = document.createElement('div');
            newElement.className = el;
            newElement.innerHTML = '<b>' + el + ':</b> ' + data[el];
            wrap.appendChild(newElement);
        }
    }
}

loadFile(fileUrl, cunstruct, "New message!\n\n");
=======
}

loadFile(fileUrl, cunstruct);
>>>>>>> f9eca96... правки #3
