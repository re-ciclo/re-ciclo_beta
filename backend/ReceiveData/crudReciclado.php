<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once("../Model/ClassTable/Reciclado.php");

$reciclado = new Reciclado();

$reciclado->id_reciclado = $_POST['id_reciclado'];
$reciclado->id_material = $_POST['id_material'];
$reciclado->peso_total = $_POST['peso_total'];


$reciclado->getAll();
$reciclado->registerReciclado();
$reciclado->updateReciclado();
$reciclado->deleteReciclado();