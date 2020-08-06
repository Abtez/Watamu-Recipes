<?php
mysql_connect("localhost","cate","Pluto_one1") or die("could not connect");
mysql_select_db()

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>search bar</title>
</head>
<body>

    <form action="index.php" method="GET">
        <input type="text" placeholder="Search here..." name="search">
        
      </form>
      

 

</body>
</html>