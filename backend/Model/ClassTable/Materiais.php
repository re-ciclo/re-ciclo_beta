<?php

include_once("../Connection/ClassConnection.php");


class Materiais {
    
    public $id_material;
    public $nome;
    public $preco_kg;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM material");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);   
    }

    public function registerMaterial()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO material(material, nome, preco_kg) values ('$this->material', '$this->nome', '$this->preco_kg')");
 
    }
}