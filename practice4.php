<!DOCTYPE html>
<html>

<body>
<?php

    $rows = $_POST["size"]+1;
    $cols = $_POST["size"]+1;
    
    echo "<table border=\"1\">";
        echo "<tbody>";

        for ($r =0; $r < $rows; $r++){
	    if($r == 0)
	    {
		echo '<tr>';
		for ($i = 0; $i < $cols; $i++)
                    echo '<td>' .$i.'</td>';
                echo '</tr>';
	    } 
	    else 
	    {
                echo'<tr>';
                for ($c = 0; $c < $cols; $c++)
                {
			if($c == 0){echo '<td>' .$r.'</td>';}
			else{echo '<td>' .$c*$r.'</td>';}
                }
		echo '</tr>';
	    }
        }
        echo "</tbody>";
  echo"</table>";
?>
</body>
</html>
