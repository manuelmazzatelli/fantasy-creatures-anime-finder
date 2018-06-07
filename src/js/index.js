
function datiArrivati(data) {
    console.log(data)
}

let apiUrl = "src/db/creatures.json"                  //"https://api.jikan.moe/search/anime/categoria/1"
let paramsStrings = ''
let finalUrl = apiUrl + paramsStrings
$.getJSON(finalUrl,datiArrivati)
console.log ("chiamata arrivata")