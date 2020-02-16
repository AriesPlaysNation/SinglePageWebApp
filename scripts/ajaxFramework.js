/* Author:      Brad Botteron
Date Written:   2/14/2020
Desc:           Ajax Framework for ConsterTube
 */
"use strict";
var whichSelected = "";

function ajaxFunction(whichSelected) {
    console.log("Entering ajax-framework");
    var ajaxRequest; // The variable that makes the AJAX magic possible!
    try {
        // REAL BROWSERS
        ajaxRequest = new XMLHttpRequest();
        console.log("Going through with ajax");
    } catch (e) {
        // Internet Exploder Browsers
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    ajaxRequest.onreadystatechange = function () {
        if(ajaxRequest.readyState == 4)
        {
            console.log("Enter readystate 4");
            var article = document.getElementById("mainArticle");
            article.innerHTML = "";
            article.innerHTML = ajaxRequest.responseText;
        }
    } // end of readystate change function() = {}
    console.log("4. ajax: calling proper page load");
    var stuff = "";
    switch (whichSelected) {
        case "home":
            stuff = "home.php";
            console.log("home");
            break;
        case "contact":
            stuff = "contact.php";
            console.log("contact");
            break;
        case "products":
            stuff = "products.php";
            console.log("products");
            break;
        case "services":
            stuff = "services.php";
            console.log("services");
            break;
        case "news":
            stuff = "news.php";
            console.log("news");
            break;
        case "gallery":
            stuff = "gallery.php";
            console.log("gallery");
            break;
        default:
            stuff = "error.php";
            console.log("error");
            break;
    }
    ajaxRequest.open("GET", stuff, true);
    ajaxRequest.send(null);
}