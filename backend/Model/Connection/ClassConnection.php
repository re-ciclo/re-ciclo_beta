<?php

class Connection
{
    public static function getDb()
    {
        $conn = new PDO(
            "mysql:host=localhost;dbname=reciclo;charset=utf8",
            "root",
            ""
        );
        
        if (!$conn) {
            echo "Não foi possível conectar ao banco MySQL.";
        } else {
            echo "Conectado";
        }
    }
}


/*
if (!$conn) {echo "Não foi possível conectar ao banco MySQL.
"; exit;}
else {echo "Parabéns!! A conexão ao banco de dados ocorreu normalmente!.
";}
mysql_close(); */