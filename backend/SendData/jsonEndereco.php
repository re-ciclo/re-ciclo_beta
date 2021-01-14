<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: json");


include_once("../Model/ClassTable/Endereco.php");

$dados = Endereco::getAll();




echo $dados[0]["count(id_usuario)+1"];