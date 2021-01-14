<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");
include_once("../Connection/Connection.php");

class Reciclado
{
    // public $id_reciclado;
    public $id_usuario;
    public $id_material;
    public $peso_total;
    public $valor_total;
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

        $connection->query("INSERT INTO reciclado( id_usuario, id_material, peso_total) VALUES('$this->id_usuario', '$this->id_material', '$this->peso_total' )");
        
    }

}

    
