<?php

include('includes/boot.php');

$statement = $db->query("SELECT * FROM filmer");
$statement->execute();

$response = $statement->fetchAll(PDO::FETCH_ASSOC);

 

// skicka svar till klienten

echo( json_encode($response) );