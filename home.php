<?php
/* Author:      Brad Botteron
Date Written:   2/15/2020
Desc:           home.php (home page for spa index)
*/

$pageID = "home";

echo <<<heredoc
<span><h1 class="h1Header">Home ConsterTube</h1></span>
<article id="homeArticle">
<img src="img/placeholder.png" alt="Profile Picture of Conster" width="300" height="auto"/>
<div class="pBesidePic">
<a class="linkA" href="https://www.youtube.com/channel/UCcTk8rsmR7VXt4r0cR9X3YQ"><img class="image" src="img/youtubeLogo.png" alt="YouTube Logo"></a>
<a class="linkA" href="https://twitter.com/conner_yt_"><img class="image" src="img/twitterLogo.png" alt="Twitter Logo"></a>
<a class="linkA" href="https://www.twitch.tv/consterplaysstreaming"><img class="image" src="img/twitchlogo.png" alt="Twitch Logo"></a>
<a class="linkA" href="https://paypal.me/TheAriesPlays"><img class="image" src="img/paypal.png" alt="Paypal Logo"></a>
</div>
</article>
heredoc;


?>