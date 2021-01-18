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

        $stmt = $connection->query("SELECT * FROM endereco");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

    public function registerEndereco()
    {

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT count(id_usuario)+1 FROM endereco");
        $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $this->id_usuario = $dados[0]["count(id_usuario)+1"];

        $id =  $this->id_usuario;

        
         $stmt2 = $connection->query("INSERT INTO endereco
         (id_usuario, cep, logradouro, complemento, bairro , localidade, uf, numero) VALUES
         ('$id','$this->cep','$this->logradouro','$this->complemento', '$this->bairro', '$this->localidade', '$this->uf','$this->numero')");
        

        // echo $this->id_usuario;
      

        //Verifica quantas linhas foram afetadas 
            if ($stmt2->rowCount() > 0) {
                return true;
            } else {
                return false;
            }

    }


    public function updateEndereco()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("UPDATE endereco
        SET cep = '$this->cep', logradouro = '$this->logradouro', complemento = '$this->complemento', numero = '$this->numero'
        WHERE id_usuario = '$this->id_usuario'");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
           
         
    }


    public function deleteEndereco()
    {
        $connection = Connection::getDb();


        $stmt = $connection->query("DELETE FROM endereco WHERE id_usuario = '$this->id_usuario'");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }

    }






}

