<?php
/* Author:          Brad Botteron
Date Written:       2/14/2020
Desc:               ConsterTube Home/SPA + meta description from database
*/

echo <<<heredoc
<!doctype html>
<html lang="en">
<head>
<title>$title</title>
heredoc;
echo "\n<meta name=\"description\" content=\"$metaDescription\">\n";
echo <<<heredoc
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div id="wrapper">
<header>

    <nav id="navHeader">
    <div id="smallIcons">
            <a class="smallIconsLink" href="https://www.youtube.com/channel/UCcTk8rsmR7VXt4r0cR9X3YQ"><img class="smallIconsImg" src="img/youtubeLogo.png"></a>
            <a class="smallIconsLink" href="https://twitter.com/conner_yt_"><img class="smallIconsImg" src="img/twitterLogo.png"></a>
            <a class="smallIconsLink" href="https://www.twitch.tv/consterplaysstreaming"><img class="smallIconsImg" src="img/twitchlogo.png"></a>
            <a class="smallIconsLink" href="https://paypal.me/TheAriesPlays"><img class="smallIconsImg" src="img/paypal.png"></a> 
        </div>
        <ul class="ulContent">
            <li style="border: none; cursor: default" class="navUl"><img id="logo" src="img/logo.png"></li>
            <li id="home" class="navUl">Home</li>
            <li id="contact" class="navUl">Contact</li>
            <li id="products" class="navUl">Products</li>
            <li id="services" class="navUl">Services</li>
            <li id="news" class="navUl">News</li>
            <li id="gallery" class="navUl">Gallery</li>
        </ul>
    </nav>
</header>
heredoc;

?>