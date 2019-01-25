<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
  // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
  // you want to allow, and if so:
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])){
      // may also be using PUT, PATCH, HEAD etc
      header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  }

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }

  exit(0);
}


session_start();

header('Content-type: application/json; charset=UTF-8');

$request = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);

try{

	$db = new PDO('mysql:host=127.0.0.1;dbname=movie-team', 'root', '');
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$db->exec("SET CHARACTER SET utf8");

}catch(PDOException $e) {

	echo $e->getMessage();
	exit();

}

$statement = $db->query("SELECT * FROM visningar");
$response = $statement->fetchAll(PDO::FETCH_ASSOC);
 

// skicka svar till klienten

echo( json_encode($response) );