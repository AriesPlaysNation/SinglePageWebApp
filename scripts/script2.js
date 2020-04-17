/* Author:          Brad Botteron
Date Written:       2/14/2020
Description:        Script for ConsterTube
 */
"use strict";
var home = document.getElementById("home");
var contact = document.getElementById("contact");
var products = document.getElementById("products");
var services = document.getElementById("services");
var news = document.getElementById("news");
var gallery = document.getElementById("gallery");
var login = document.getElementById("login");


function init()
{
    console.log("Entering init");
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
    home.addEventListener("click", function () {
        ajaxFunction("home");
    }, init);
    home.addEventListener("click", function () {
        ajaxFunction2("home");
    }, init);
    contact.addEventListener("click", function () {
        ajaxFunction("contact");
    }, init);
    contact.addEventListener("click", function () {
        ajaxFunction2("contact");
    }, init);
    products.addEventListener("click", function () {
        ajaxFunction("products");
    }, init);
    products.addEventListener("click", function () {
        ajaxFunction2("products");
    }, init);
    services.addEventListener("click", function () {
        ajaxFunction("services");
    }, init);
    services.addEventListener("click", function () {
        ajaxFunction2("services");
    }, init);
    news.addEventListener("click", function () {
        ajaxFunction("news");
    }, init);
    news.addEventListener("click", function () {
        ajaxFunction2("news");
    }, init);
    gallery.addEventListener("click", function () {
        ajaxFunction("gallery");
    }, init);
    gallery.addEventListener("click", function () {
        ajaxFunction2("gallery");
    }, init);
    login.addEventListener("click", function () {
        ajaxFunction("login");
    }, init);
    login.addEventListener("click", function () {
        ajaxFunction2("login");
    }, init);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
    home.attachEvent("onclick", function () {
        ajaxFunction("home");
    });
    home.attachEvent("onclick", function () {
    ajaxFunction2("home");
    });
    contact.attachEvent("onclick", function () {
        ajaxFunction("contact");
    });
    contact.attachEvent("onclick", function () {
        ajaxFunction2("contact");
    });
    products.attachEvent("onclick", function () {
        ajaxFunction("products");
    });
    products.attachEvent("onclick", function () {
        ajaxFunction2("products");
    });
    services.attachEvent("onclick", function () {
        ajaxFunction("services");
    });
    services.attachEvent("onclick", function () {
        ajaxFunction2("services");
    });
    news.attachEvent("onclick", function () {
        ajaxFunction("news");
    });
    news.attachEvent("onclick", function () {
        ajaxFunction2("news");
    });
    gallery.attachEvent("onclick", function () {
        ajaxFunction("gallery");
    });
    gallery.attachEvent("onclick", function () {
        ajaxFunction2("gallery");
    });
    login.attachEvent("onclick", function () {
        ajaxFunction("login");
    });
    login.attachEvent("onclick", function () {
        ajaxFunction2("login");
    });
}