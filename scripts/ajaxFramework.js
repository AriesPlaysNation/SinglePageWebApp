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
        case "login":
            stuff = "login.php";
            console.log("login");
        /*default:
            stuff = "error.php";
            console.log("error");
            break;*/
    }
    ajaxRequest.open("GET", stuff, true);
    ajaxRequest.send(null);
}

function ajaxFunction2(whichSelected) {
    console.log("Entering ajax-framework");
    var ajaxRequest2; // The variable that makes the AJAX magic possible!
    try {
        // REAL BROWSERS
        ajaxRequest2 = new XMLHttpRequest();
        console.log("Going through with ajax");
    } catch (e) {
        // Internet Exploder Browsers
        try {
            ajaxRequest2 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    ajaxRequest2.onreadystatechange = function () {
        if(ajaxRequest2.readyState == 4)
        {
            console.log("Enter readystate 4");
            var meta = document.getElementsByTagName("meta");
            meta[0].setAttribute("content","");
            meta[0].setAttribute("content", ajaxRequest2.responseText);
            console.log("Tag set to: " + ajaxRequest2.responseText);
        }
    } // end of readystate change function() = {}
    ajaxRequest2.open("GET", "selectMeta.php?page=" + whichSelected, true);
    ajaxRequest2.send(null);
    //ajaxRequest2.send("?page=" + whichSelected);
}