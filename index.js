"use strict";

class LoadResource {
    constructor(fileUrl) {
        this.fileUrl = fileUrl;
    }
    responseData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.fileUrl, false);
        xhr.send();
        if (xhr.status !== 200) {
            console.error(`error: ${xhr.status}; request status: ${xhr.statusText}`);
        } else {
            return JSON.parse(xhr.response);
        }
    }
}

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
const data = xhr.responseData();
console.log(data);

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

const squadName  = document.createElement("h1");
squadName.innerText = data.squadName;
fragment.appendChild(squadName);

const homeTown  = document.createElement("div");
homeTown.innerText = data.homeTown;
fragment.appendChild(homeTown);

const formed  = document.createElement("div");
formed.innerText = data.formed;
fragment.appendChild(formed);

const secretBase  = document.createElement("i");
secretBase.innerText = data.secretBase;
fragment.appendChild(secretBase);

root.append(fragment);