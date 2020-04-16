<?php
#Author:        "Brad Botteron"
# Date:         4/15/2020
# Desc:         Contains SQL queries to populate the htmlHead.inc
# with meta description for a page while maintaining AJAX functionality

$query = "select description
from metaDescription
where pageID = '$pageID'";

$result = mysqli_query($connection, $query)
    or
die ("<b>Query Failed</b><br/>" . mysqli_error($connection));

$row = mysqli_fetch_row($result);
$metaDescription = $row[0];
?>