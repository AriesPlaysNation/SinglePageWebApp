<?php
/* Author: Brad Botteron
Date:       4/16/2020
Desc:       Receiving meta request for ajax
*/

$page = htmlspecialchars($_GET['page']);
$dbName = "bbottero_project";
require ("connecti2db.inc.php");
$query = "select description
from metaDescription
where pageID = '$page'";
$result = mysqli_query($connection, $query)
    or
die("<b>Query Failed</b><br/>" . mysqli_error($connection));

$row = mysqli_fetch_row($result);
echo $row[0];