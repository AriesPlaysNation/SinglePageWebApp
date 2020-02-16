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
    contact.addEventListener("click", function () {
        ajaxFunction("contact");
    }, init);
    products.addEventListener("click", function () {
        ajaxFunction("products");
    }, init);
    services.addEventListener("click", function () {
        ajaxFunction("services");
    }, init);
    news.addEventListener("click", function () {
        ajaxFunction("news");
    }, init);
    gallery.addEventListener("click", function () {
        ajaxFunction("gallery");
    }, init);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
    home.attachEvent("onclick", function () {
        ajaxFunction("home");
    });
    contact.attachEvent("onclick", function () {
        ajaxFunction("contact");
    });
    products.attachEvent("onclick", function () {
        ajaxFunction("products");
    });
    services.attachEvent("onclick", function () {
        ajaxFunction("services");
    });
    news.attachEvent("onclick", function () {
        ajaxFunction("news");
    });
    gallery.attachEvent("onclick", function () {
        ajaxFunction("gallery");
    });
}