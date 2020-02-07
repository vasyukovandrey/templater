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

function buildDom (items,rules) {
    const fragment = document.createDocumentFragment();
    let tag = '';

    for (let item in items) {
        if (item !== 'members' && item !== 'active') {
            if  (rules[item]) {
                tag = rules[item];
            } else {
                tag = 'div';
            }
            const node = document.createElement(tag);
            node.innerText = items[item];
            fragment.appendChild(node);
        }
    }

    return fragment;
}

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
const data = xhr.responseData();
const root = document.getElementById('root');

const tagRules = {
    "squadName": "h1",
    "secretBase": "i"
};

const segment = buildDom(data,tagRules);
root.append(segment);