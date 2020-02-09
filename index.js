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

function buildDom (squadProperties, elementsTags) {
    const fragment = document.createDocumentFragment();
    

    for (let property in squadProperties) {

        if (property === 'members' || property === 'active') {
            continue;
        }

        let tag = 'div';

        if  (elementsTags[property]) {
            tag = elementsTags[property];
        }

        const node = document.createElement(tag);
        node.innerText = squadProperties[property];
        fragment.appendChild(node);
        
    }

    return fragment;
}

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
const data = xhr.responseData();
const root = document.getElementById('root');

const elementselementsTags = {
    "squadName": "h1",
    "secretBase": "i"
};

const segment = buildDom(data, elementselementsTags);
root.append(segment);