
function datiArrivati(data) {
    console.log(data)
    let container = jQuery("#creatures-container")
    for (let index = 0; index < data.length; index++) {
        var blogCard = jQuery(
            [
                '<div class="blog-card ' + (index % 2 ? '' : 'alt') + '">',
                '  <div class="photo photo" style="background-image: url(\'' + data[index].url_img + '\')"></div>',
                '  <div class="description">',
                '    <h1>' + data[index].nome + '</h1>',
                '    <p class="summary">' + data[index].descrizione + '</p>',
                '    <a href="#" data-search="' + data[index].nome + '">Read More</a>',
                '    <div class="anime-container"></div>',
                '  </div>',
                '  <ul class="details"></ul>',
                '</div>'
            ].join("\n")
        ).appendTo(container);

        blogCard.find("a").click(function (event) {
            let detailsContainer = $(this).parent().parent().find(".details");
            $(this).remove();
            $.getJSON("https://api.jikan.moe/search/anime/" + $(this).data("search") + "/", function (data) {
                console.log(data.result.slice(0, 15));
                for (let index = 0; index < data.result.slice(0, 13).length; index++) {
                    var animeItem = jQuery(
                        [
                            '<li><a href="#" data-id="'+ data.result[index].mal_id + '">' + data.result[index].title + '</a></li>',



                        ].join("\n")
                    ).appendTo(detailsContainer);
                    let animeContainer = animeItem.parent().parent().find(".anime-container");
                    var animeDescription = jQuery(
                        [
                            
                            '<div id="' + data.result[index].mal_id + '" class= "mdl-card mdl-shadow--2dp mdl-card--horizontal" >',
                            '<div class="mdl-card__media">',
                            '<img src="' + data.result[index].image_url + '" alt="img">',
                            '</div>',
                            '<div class="mdl-card__title">',
                            '<h2 class="mdl-card__title-text">' + data.result[index].title + '</h2>',
                            '</div>',
                            '<div class="mdl-card__supporting-text">',
                            '' + data.result[index].description + '',
                            '<a href="'+ data.result[index].url +'"> More information </a>',
                            '</div>',
                            '<div class="mdl-card__actions mdl-card--border">',
                            '</div>',
                            '</div>'
                        ].join("\n")
                    ).appendTo(animeContainer);
                    animeDescription.hide();
                    animeItem.find('a').click(function(event){
                        let id = $(this).data("id");
                        $('.mdl-card').hide();
                        $('#'+id).slideDown();
                        event.preventDefault();
                    })
                }

            });
            event.preventDefault();
        });
    }
}


let apiUrl = "src/db/creatures.json"                  //  hide show    slide down "https://api.jikan.moe/search/anime/categoria/1"
let paramsStrings = ''
let finalUrl = apiUrl + paramsStrings
$.getJSON(finalUrl, datiArrivati)
console.log("chiamata arrivata")