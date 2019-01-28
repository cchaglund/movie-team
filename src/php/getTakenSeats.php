<?php

include('includes/boot.php');




$statement = $db->prepare("SELECT takenSeats FROM bokningar WHERE visning = :visning");
$statement->execute(array(
  'visning' => $_GET['visning']
));

$response = $statement->fetchAll(PDO::FETCH_ASSOC);

 

// skicka svar till klienten

echo( json_encode($response) );