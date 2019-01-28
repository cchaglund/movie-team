<?php

include('includes/boot.php');




$statement = $db->prepare("SELECT seatsPerRow FROM lounge WHERE lounge_id = :salong");
$statement->execute(array(
  'salong' => $_GET['salong']
));

$response = $statement->fetchAll(PDO::FETCH_ASSOC);

 

// skicka svar till klienten

echo( json_encode($response) );