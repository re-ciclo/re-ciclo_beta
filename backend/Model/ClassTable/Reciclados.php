<?php 

include_once("../Connection/ClassConnection.php");

class Reciclados
{
    public $id_reciclado;
    public $id_usuario;
    public $id_material;
    public $peso_total;
    public $valor_total;
    public $data;

    public function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM reciclados");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerRciclado()
    {
        $connection = Connection::getDb();

        $connection->query("INSERT INTO reciclado(id_reciclado, id_usuario, id_material, peso_total, valor_total, data) VALUES('$this->id_reciclado', '$this->id_usuario', '$this->id_material', '$this->peso_total', '$this->valor_total' )");
        
    }

}

    
