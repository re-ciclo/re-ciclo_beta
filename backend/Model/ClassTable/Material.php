<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: json");
include_once("../Connection/Connection.php");


class Material {
    
    // public $id_material; esse aqui deixa comentado, pois é auto incremento. Não remove pois futuramente podemos precisar
    public $nome;
    public $preco_kg;
    public $id_material;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM material");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);   
    }

    public function registerMaterial()
    {
        $connection = Connection::getDb();
                                                
        $stmt = $connection->query("INSERT INTO material(nome, preco_kg) values ('$this->nome', '$this->preco_kg')");
 
    }

    public function updateMaterial()
    {
        $connection = Connection::getDb();

        $connection->query("UPDATE material
        SET nome = '$this->nome', preco_kg = '$this->preco_kg'
        WHERE id_material = '$this->id_material'");
    }

    public function deleteMaterial()
    {
        $connection = Connection::getDb();

        $connection->query("DELETE FROM material WHERE id_material = '$this->id_material'");
    }

}