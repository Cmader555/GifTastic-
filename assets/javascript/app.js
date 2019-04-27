
//Team array

var teams = ["Arizona Cardinals", "Arizona Diamonbacks", "Arizona State Football", "Arizona State Basketball", "Pheonix Suns", "Arizona Coyotes"];



function generateButton() {

    //when new buttons are made, old ones are not re-generated
    $("#teamButtons").empty();

    //loop to go through the array
    for (i = 0; i < teams.length; i++) {
        //creates button and adds value of team array value
        $("#teamButtons").append(`<button type="button" class="btn btn-danger teamButton" value="${teams[i]}"> ${teams[i]} </button>`);
    };
};



$("#add-team").on("click", function (event) {
    event.preventDefault();

    var team = $("#team-input").val().trim();

    teams.push(team);

    generateButton();

});


function gifGenerator() {


    var nTeam = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HMiONM4iBo0PrAJ5528VESMF7ZWMRUdX&q=" + nTeam + "&limit=10&offset=0&rating=Y&lang=en";
    console.log(nTeam); 
    console.log(queryURL); 
    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#gifs").append(response.url); 

    });



};

$(document).on("click", ".teamButton", gifGenerator);


generateButton(); 