<?php
include "connect.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab3</title>
    <script src="js.js">
    </script>
</head>

<body>
<h3>Ковалик Іван Васильович, КІУКІ-19-2, Варіант 6</h3>
    <p><strong> Полученный доход с проката по состоянию на выбранную дату: </strong>
        <select name="dateValue" id="dateValue" >
            <?php
            $sql = "SELECT distinct date_end from $db.rent";
            $sql = $dbh->query($sql);
            foreach ($sql as $cell) {
                echo "<option> $cell[0] </option>";
            }
            ?>
        </select>
        <button onclick="_1()">ОК</button>
    </p>
    <p><strong>Автомобили выбранного производителя: </strong>
        <select name="vendors" id="vendors">
            <?php
            $sql = "SELECT DISTINCT name from $db.vendors";
            $sql = $dbh->query($sql);
            foreach ($sql as $cell) {
                echo "<option> $cell[0] </option>";
            }
            ?>
        </select>
        <button onclick="_2()">ОК</button>
    </p>
    <p><strong> Свободные автомобили </strong>
        <select  name="dateFree" id="dateFree">
            <?php
            $sql = "SELECT distinct date_start from $db.rent";
            $sql = $dbh->query($sql);
            foreach ($sql as $cell) {
                echo "<option> $cell[0] </option>";
            }
            ?>
        </select>
        <button onclick="_3()">ОК</button>
    </p>
<div id="res"></div>
</body>

</html>