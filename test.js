import {toHTML, View} from "./globalJs/modules.js";console.time();let nodes = [];for(let i = 0; i < 100; i++){    nodes[i] = toHTML(`        <div>            <h1>{{ i }}</h1>            <div>                <button onmouseenter="{{ fn }}" onclick="{{ fn }}">Click me</button>            </div>              </div>    `, {        i,        fn(){            console.log("gg");            this.style.backgroundColor = this.style.backgroundColor === "black" ? "white" : "black";        }    });}console.timeLog();View(document.body, nodes);console.timeEnd();