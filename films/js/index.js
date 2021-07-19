import {toHTML, View, waitAllImgs} from "../../globalJs/modules.js";const searchForm = document.querySelector("#search");const filmList = document.querySelector(".filmList");function search(q){    return fetch(`https://www.omdbapi.com/?s=${q}&apikey=4a3b711b`)        .then(data => data.json());}function filmElement(film){    let elem = toHTML(`         <div class="film__item">            <p>{{ Title }}</p>            <img draggable="false" src="{{ Poster }}" alt="">            <p>{{ Year }}</p>        </div>        `, film);    return elem;}async function addFilms(q){    let data = await search(q);    if (data.Error) return filmList.textContent = data.Error;    data.Search = data.Search.filter(event => event.Poster !== "N/A");    let nodes = data.Search.map(filmElement);    await waitAllImgs(nodes);    View(filmList, nodes);}searchForm.onsubmit = async function (event){    event.preventDefault();    let {filmName} = this.elements;    if (!filmName.value) return;    await addFilms(filmName.value);}