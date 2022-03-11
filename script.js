window.addEventListener("DOMContentLoaded", domLoaded);

// Global variable to determine what photo is going to be shown on click of button
var imageNum = 0;


function domLoaded() {
    // Set an initial image after site is loaded
    thirdImage();

}

function pageRedirect(link, id) {
    // Reformat the link to be correct format
    link = 'http://' + link;
    // Now I am going to change the color for the button for a .2 seconds
    // then change it back
    $(`#${id}`).css("background-color", "#535353");
    $(`#${id}`).css("color", "white");
    // After 200ms, go back
    setTimeout(function() {
        window.open(link);
        $(`#${id}`).css("background-color", "#dddddd");
        $(`#${id}`).css("color", "black");
    }, 300)
}

function firstImage() {
    $("#imageExplanation").text("This is an image of me taken while I was in the USAF,\n\
    I left to futher pursue my own passions. And for that I am forever grateful!\n\
    I would not be where I am today without the skills and dicipline I learned from that experience.");
    $("#imageExplanation").css("background-color", "#dddddd");
    $(".imageBorders").css("width", "9em")
    $(".imageBorders").css("height", "14em")
    $(".imageBorders").attr("src", "images/USAF.jpg")

}


function secondImage() {
    $("#imageExplanation").text("I like this photo because it encapsulates my goofy side.\n\
    I like to think of myself as an empathetic and creative person. I strongly believe that has made me\n\
    an easier person to work with.");
    $("#imageExplanation").css("background-color", "#dddddd");
    $(".imageBorders").css("width", "10.5em");
    $(".imageBorders").attr("src", "images/goofBall.jpg");
}

function thirdImage() {
    $("#imageExplanation").text("Welcome to my website! I hope you enjoy. I put this together from scratch.\n\
    Using CSS/HTML/JS and no front end tools; hence why it is an eye sore. Anyways, here's some pictures of me!\n\
    This is a photo of me taken in highschool (left), I used to play ball #BallIsLyfe");
    $("#imageExplanation").css("background-color", "#dddddd");
    $(".imageBorders").css("width", "12em");
    $(".imageBorders").attr("src", "images/football.jpg");


}

// Three image functions
// This is the selector function
// Which changes the image when the user selects the button
// Unless it is the same image
function expandInfo() {
    imageNum++;
    if (imageNum > 2){
        imageNum = 0;
    }

    $("#infoButton").css("background-color", "#535353");
    $("#infoButton").css("color", "white");

    setTimeout(function() {
        if (imageNum == 0) {
            firstImage();
        }
        else if (imageNum == 1) {
            secondImage();
        }

        else {
            thirdImage();
        }
        $("#infoButton").css("background-color", "");
        $("#infoButton").css("color", "black");
    }, 300)

}


// Function to show/hide the main page
// Also creates another button to show it again
// When the new button is clicked, it is then terminated
// and the content comes back...
function hideAll() {
    $("main").css("display", "none");


    let $newButton = document.createElement("button");
    // $newButton.setAttribute("style", "height: 100em");
    // $newButton.setAttribute("style", "width: 10em");
    // $newButton.setAttribute("style", "margin-left: 50%");
    $newButton.textContent = "Show All";
    $(".webPage").append($newButton);

    $newButton.addEventListener("click", function(){
        $("main").css("display", "");
        $newButton.remove();

    })

}