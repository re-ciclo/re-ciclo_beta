<?php

 
include_once("../Connection/Connection.php");


class Usuario
{
    public $id_usuario;
    public $nome;
    public $email;
    public $telefone;
    public $senha;
    public $nivel_acesso;

    public  function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM usuario");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }


    public function registerUsuario()
    {
        $connection = Connection::getDb();
                                                       
        $stmt = $connection->query("INSERT INTO usuarios(nome, email, telefone, senha) values ('$this->nome', '$this->email', '$this->telefone', '$this->senha')");
 
        //Verifica quantas linhas foram afetadas 
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}