"use strict";

class LoadResource {
    constructor(fileUrl) {
        this.fileUrl = fileUrl;
        this.result = false;
    }

    xhrSuccess(xhr) {
        this.result = xhr.response;
        return this.result;
    }
    
    xhrError() {
        console.error(`error: ${this.status}; request status: ${this.statusText}`); 
    }

    responseData() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onload = this.xhrSuccess.bind(this,xhr);
        xhr.onerror = this.xhrError.bind(xhr);
        xhr.open("GET", this.fileUrl, true);
        xhr.send();
    }

    getData(){
        return this.result;
    }
}

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
xhr.responseData();
const data = xhr.getData();
console.log(data);