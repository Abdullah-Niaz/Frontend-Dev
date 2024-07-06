var buttons = document.querySelectorAll("#home, #about, #contact");
var texts = document.querySelectorAll("#hometext, #abouttext, #contacttext");

function sartexthatao() {
    texts.forEach(function(text) {
        text.style.display = "none";
    });
}

function showText(text) {
    sartexthatao();
    text.style.display = "block";
    text.style.width = "50%";
}

// Initially show the home text
showText(document.querySelector("#hometext"));

buttons.forEach(function(button) {
    button.addEventListener("click", function () {
        var textId = "#" + this.id + "text";
        var text = document.querySelector(textId);
        showText(text);
    });
});



// var home = document.querySelector("#home")
// var about = document.querySelector("#about")
// var contact = document.querySelector("#contact")

// var hometext = document.querySelector("#hometext")
// var abouttext = document.querySelector("#abouttext")
// var contacttext = document.querySelector("#contacttext")


// hometext.style.display = "block"
// hometext.style.width = "50%"

// home.addEventListener("click", function () {
//     sartexthatao()
//     hometext.style.display = "block"
//     hometext.style.width = "50%"
// })
// about.addEventListener("click", function () {
//     sartexthatao()
//     abouttext.style.display = "block"
//     abouttext.style.width = "50%"
// })
// contact.addEventListener("click", function () {
//     sartexthatao()
//     contacttext.style.display = "block"
//     contacttext.style.width = "50%"
// })


// function sartexthatao(){
//     document.querySelectorAll("h4").forEach(function(h4) {
//         h4.style.display = "none"
//     });
// }