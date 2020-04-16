<?php
/* Author:          Brad Botteron
Date Written:       2/14/2020
Desc:               home page
*/

$title = "ConsterTube Production Services";
$dbName = "bbottero_project";
$pageID = "home";

require ("connecti2db.inc.php");
require ("metaQueries.inc");
require("htmlHead.inc");
?>
<article id="mainArticle">
    <?php require("home.php");?>
</article>

<?php
require ("htmlFoot.inc");
mysqli_close($connection);
?>