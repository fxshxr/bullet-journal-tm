<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Habit Tracker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="header">
    <a href="" class="active">Track habits</a>
    <a href="admin.php" class ="">Add habits</a>
    <br>

    <a href="work.php">Work</a>
    <a href="food.php">Food</a>
    <a href="personal.php">Personal</a>
    <a href="education.php" class="active">Education</a>
    

    <?php 
			
            require_once "functions.php";
        
            $link=mysqli_connect($host,$user,$password,$database)
                or die("error" . mysqli_error($link));
            $query = " SELECT * FROM education ORDER BY date DESC;" ;
            $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
         
            echo "<br>";
                echo "<table><tr>
                <th>привычка</th>
                <th>описание</th>
                <th>дата</th>
               </tr>";
            while ($row = mysqli_fetch_assoc($result)){
                
                echo " <tr><th> ". $row['name']."</th>" ;
                echo  "<th> ".$row['description']."</th>" ;
                echo "<th> ".$row['date']."</th></tr>";
            };

    ?>
    </div>
</body>
</html>