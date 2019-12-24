"use strict";
const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
let data = new Object();

function xhrSuccess() {
    this.callback.apply(this);
}

function xhrError() { 
    console.error('error: ${this.status}; request status: ${this.statusText}'); 
}

function loadFile(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.responseType = 'json';
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send();
}

function cunstruct() {
    data = this.response;
}

loadFile(fileUrl, cunstruct);
