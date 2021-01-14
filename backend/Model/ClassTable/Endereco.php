<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");
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

        $stmt = $connection->query("SELECT count(id_usuario)+1 FROM endereco");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

    public function registerEndereco()
    {

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT count(id_usuario)+1 FROM endereco");
        $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $this->id_usuario = $dados[0]["count(id_usuario)+1"];

              

        
         $stmt2 = $connection->query("INSERT INTO endereco
         (id_usuario, cep, logradouro, complemento, bairro , localidade, uf, numero) VALUES
         ('$this->id_usuario','$this->cep','$this->logradouro','$this->complemento', '$this->bairro', '$this->localidade', '$this->uf','$this->numero')");
        

        // echo $this->id_usuario;
      
        



        //Verifica quantas linhas foram afetadas 
            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                return false;
            }

    }
}

