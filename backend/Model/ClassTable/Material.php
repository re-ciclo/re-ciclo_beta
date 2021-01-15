<?php

include_once("../Connection/Connection.php");


class Material {
    
    // public $id_material; esse aqui deixa comentado, pois é auto incremento. Não remove pois futuramente podemos precisar
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
                                                
        $stmt = $connection->query("INSERT INTO material(nome, preco_kg) values ('$this->nome', '$this->preco_kg')");
 
    }

}