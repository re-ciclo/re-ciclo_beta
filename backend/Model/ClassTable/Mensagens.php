<?php

include_once("../Connection/ClassConnection.php");


class Mensagens
{
    public $assunto;
    public $nome;
    public $email;
    public $telefone;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM mensagem");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

    public function registerEndereco()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO mensagem(assunto, nome, email, telefone) values ('$this->assunto', '$this->nome', '$this->email', '$this->telefone')");
 

    }
}