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

const squadName = `<h1> ${data.squadName} </h1>`;
document.getElementById('root').innerHTML += squadName;

const homeTown = `<div> ${data.homeTown} </div>`;
document.getElementById('root').innerHTML += homeTown;

const formed = `<div> ${data.formed} </div>`;
document.getElementById('root').innerHTML += formed;

const secretBase = `<i> ${data.secretBase} </i>`;
document.getElementById('root').innerHTML += secretBase;