<?php
/* Author: Brad botteron
Date:       4/16/2020
Desc:       login for general users
*/

$pageID = "login";
$thisScript = htmlspecialchars($_SERVER['PHP_SELF']);

echo <<<heredoc
<span><h1 class="h1Header">Login</h1></span>
heredoc;
if(!isset($_POST['submit']))
{
    echo <<<herdoc
<form action="$thisScript" method="post">
<fieldset>
<legend>Sign In To Your Account</legend>
<p><label class="oneFifty">UserName:</label>
 <input type="text" name="username" placeholder="Username"/>
 </p>
 <p>
 <label class="oneFifty">Password:</label>
 <input type="password" name="password"/>
</p>
<p>
<input type="reset" name="reset" value="Clear"/>
<input type="submit" name="submit" value="Login"/>
</p>
</fieldset>
</form>
herdoc;
} else{

}

?>