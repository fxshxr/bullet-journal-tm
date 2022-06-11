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

<?php 


 if (isset($_POST['title']) && isset($_POST['date']) && isset($_POST['section']) && isset($_POST['submit'])){

	require_once "functions.php";

	$link=mysqli_connect($host,$user,$password,$database)
		or die("error" . mysqli_error($link));
    $title = htmlentities(mysqli_real_escape_string($link, $_POST['title']));
    $descr = htmlentities(mysqli_real_escape_string($link, $_POST['description']));
    $section = htmlentities(mysqli_real_escape_string($link, $_POST['section']));
    $date = htmlentities(mysqli_real_escape_string($link, $_POST['date']));

     if ($section == 'work') {
		$query = " INSERT INTO work VALUES ('$title','$descr','$date')"  ;
	} else if ($section == 'food') {
		$query = " INSERT INTO food VALUES ('$title','$descr','$date')"  ;
    }else if ($section == 'personal') {
		$query = " INSERT INTO personal VALUES ('$title','$descr','$date')"  ;
    }else if ($section == 'education') {
		$query = " INSERT INTO education VALUES ('$title','$descr','$date')"  ;   
    }

    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    mysqli_close($link);
}
   
?>
<?php

if(isset($_POST['submit']) and $_FILES){
    
    echo "<script>
		alert('Успешно!');
	</script>";
} 

?>

<div class="header">
    <a href="index.php" class="">Track habits</a>
    <a href="admin.php" class ="active">Add habits</a>
    <form method="post">
        <p>Habit name <input type="text" name="title" required></p>
        <p>Habit type
            <select name="section" id="" required>
                <option value="work">Work</option>
                <option value="food">Food</option>
                <option value="personal">Personal</option>
                <option value="education">Education</option>
            </select></p>
        <p>Habit description <input type="text" name="description" required></p>
        <p>Habit date <input type="date" name="date"></p>
        <input type="submit" name="submit" value="Add new habit!">
        </form>
</div>
</body>


</html>