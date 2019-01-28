<?php

include('includes/boot.php');

if (!isset($_SESSION['id'])) {
  $_SESSION['id'] = null;
}

$statement = $db->prepare("INSERT INTO bokningar SET visning = :visning, user = :user, takenSeats = :taken");
$result = $statement->execute(array(
  'visning' => $request['visning'],
  'user' => $_SESSION['id'],
  'taken' => $request['taken']
));

$id = $db->lastInsertId();
$bookingRef = $id . '-' . $request['visning'];

 

// skicka svar till klienten

echo( $bookingRef );