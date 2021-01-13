<?php

include_once("../Connection/Connection.php");


class Endereco
{
    // public $id_endereco; esse aqui deixa comentado, pois é auto incremento. Não remove pois futuramente podemos precisar
    public $id_usuario; // 
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


        $dados = $connection->query("SELECT count(id_usuario)+1 FROM endereco");
        $id_usuario = $dados[0]["count(id_usuario)+1"];
      

        $connection = Connection::getDb();
                                                     
        $stmt = $connection->query("INSERT INTO endereco (id_usuario, cep, logradouro, complemento, bairro, localidade, uf, numero) values ('$this->id_usuario','$this->cep', '$this->logradouro', '$this->complemento', '$this->bairro', '$this->localidade', '$this->uf', '$this->numero')");
 

    }
}

