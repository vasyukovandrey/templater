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

function mapData(data) {
    const result = [];

    for (let key in data) {
        const item = {
            name: key,
            value: data[key],
            tag: elementsTags[key] || elementsTags.default
        }
    
        result.push(item);
    }

    return result;
}

function buildDom(squadProperties) {
    const fragment = document.createDocumentFragment();

    squadProperties.forEach(function(item){
        const node = document.createElement(item.tag);
        node.innerText = item.value;
        fragment.appendChild(node);
    });
    
    return fragment;
}

const elementsTags = {
    default: 'div',
    squadName: 'h1',
    secretBase: 'i'
};

const fileUrl = "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json";
const xhr = new LoadResource(fileUrl);
const responseData = xhr.responseData();
const root = document.getElementById('root');

delete responseData.active;
delete responseData.members;

const data = mapData(responseData);
const segment = buildDom(data);
root.append(segment);