<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");
include_once("../Connection/Connection.php");

class Reciclado
{
    public $id_reciclado;
    public $id_usuario;
    public $id_material;
    public $peso_total;
    public $data;

    public function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM reciclado");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerReciclado()
    {
        $connection = Connection::getDb();

        $connection->query("INSERT INTO reciclado (id_reciclado, id_material, peso_total, data) VALUES (NULL, '$this->id_material', '$this->peso_total', CURRENT_TIMESTAMP)");
        
    }

    public function updateReciclado()
    {
        $connection = Connection::getDb();

        $connection->query("UPDATE reciclado
        SET id_material = '$this->id_material', peso_total = '$this->peso_total'
        WHERE id_reciclado = '$this->id_reciclado'");
    }

    public function deleteReciclado()
    {
        $connection = Connection::getDb();

        $connection->query("DELETE FROM reciclado WHERE id_reciclado = '$this->id_reciclado'");
    }

}

    
