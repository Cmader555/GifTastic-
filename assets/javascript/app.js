
//Team array

var teams = ["Arizona Cardinals", "Arizona Diamonbacks", "Arizona State Football", "Arizona State Basketball", "Phoenix Suns", "Arizona Coyotes"];



function generateButton() {

    //when new buttons are made, old ones are not re-generated
    $("#teamButtons").empty();

    //loop to go through the array
    for (i = 0; i < teams.length; i++) {
        //creates button and adds value of team array value
        console.log(teams[i]);
        //$("#teamButtons").append(`<button type="button" class="btn btn-danger teamButton"> ${teams[i]} </button>`);
        var button = $("<button>");
        button.attr("class", "btn btn-outline-danger teamButton btn-space");
        button.attr("data-name", teams[i]);
        button.html(teams[i]);
        $("#teamButtons").append(button);
    };
};


//adds a gif generating button
$("#add-team").on("click", function (event) {
    event.preventDefault();

    var team = $("#team-input").val().trim();

    teams.push(team);

    generateButton();

});

// function to generate gifs
function gifGenerator() {


    var nTeam = $(this).attr("data-name");
    console.log(nTeam);
    //nTeam = nTeam.trim().replace(/ /g, "+")
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=HMiONM4iBo0PrAJ5528VESMF7ZWMRUdX&q=${nTeam}&limit=10&offset=0&rating=G&lang=en`; 

    console.log(queryURL);
    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        console.log(response.data)
        $("#gifs").empty(); 
        //loops over response and appends gifs to associated div
        for (i = 0; i < response.data.length; i++) {

            var gif = $("<img>").attr("src", response.data[i].images.original_still.url);
            gif.attr("class", "gif"); 
            gif.attr("other", response.data[i].images.original.url); 
            
            $("#gifs").append(gif);
            var rating = $(`<p class="text-danger"> Rating: ${response.data[i].rating} </p>`);
            $("#gifs").append(rating);

        };

    });



};

//allows user to play and stop gifs
$(document).on("click", ".gif",function () {

    var source = $(this).attr("src"); 
    var other = $(this).attr("other"); 
    $(this).attr("src", other); 
    $(this).attr("other", source); 



}); 


$(document).on("click", ".teamButton", gifGenerator);


generateButton(); 