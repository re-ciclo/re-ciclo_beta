<?php

include_once("../Connection/ClassConnection.php");


class Endereco
{
    public $cep;
    public $logradouro;
    public $complemento;
    public $bairro;
    public $localidade;
    public $uf;
    public $numero;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM endereco");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

    public function registerEndereco()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO usuarios(cep, logradouro, complemento, bairro, localidade, uf, numero) values ('$this->cep', '$this->logradouro', '$this->complemento', '$this->bairro', '$this->localidade', '$this->uf', '$this->numero')");
 

    }
}