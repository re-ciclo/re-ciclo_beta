<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

class Connection
{
    public static function getDb()
    {
        $conn = new PDO(
            "mysql:host=localhost;dbname=reciclo;charset=utf8",
            "root",
            ""
        );
        
        if ($conn) {
            return $conn;
        } else {
            echo "Erro ao realizar conexão";
        }
    }
}

