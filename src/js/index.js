
function datiArrivati(data) {
    console.log(data)
    let container = jQuery("#creatures-container")
    for (let index = 0; index < data.length; index++) {
            jQuery(
                [
                    '<div class="blog-card '+( index%2 ? '' : 'alt')+'">',
                    '<div class="photo photo" style="background-image: url(\''+data[index].url_img+'\')"></div>',
                    '<ul class="details">',

                    '</ul>',
                    '<div class="description">',
                    '<h1>'+data[index].nome+'</h1>',
                    '<p class="summary">'+data[index].descrizione+'</p>',
                    '<a href="#">Read More</a>',
                    '</div>',
                    '</div>'
                ].join("\n")
            ).appendTo(container);
    }
}


let apiUrl = "src/db/creatures.json"                  //"https://api.jikan.moe/search/anime/categoria/1"
let paramsStrings = ''
let finalUrl = apiUrl + paramsStrings
$.getJSON(finalUrl, datiArrivati)
console.log("chiamata arrivata")