// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var myVideoMusic;

window.onload = function () {
    myVideoMusic = document.getElementById("myVideoMusic");
}

var littleSize = true; //Initial width is 560, defined in HTML file
function changeWidth() {
    let id = null;
    var increment = 25;
    clearInterval(id);
    id = setInterval(changeS, 25);
    function changeS() {
        if (increment <= 0) {
            littleSize = !littleSize;
            clearInterval(id);
        } else {
            if (littleSize) {
                myVideo.width = parseInt(myVideo.width) + increment;
                myVideo.height = parseInt(myVideo.height) + increment;
            } else {
                myVideo.width = parseInt(myVideo.width) - increment;
                myVideo.height = parseInt(myVideo.height) - increment;
            }
        }
        increment--;
    }
}