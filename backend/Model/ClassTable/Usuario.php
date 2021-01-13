<?php


include_once("../Connection/Connection.php");


class Usuario
{
    public $id_usuario;
    public $nome;
    public $telefone;
    public $email;
    public $senha;
    public $endereco;
    public $nivel_acesso;

    public  function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM usuarios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

    public function registerUsuario()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO usuarios(name, email, telefone, senha, endereco) values ('$this->nome', '$this->email', '$this->telefone', '$this->senha', '$this->endereco')");
 
        //Verifica quantas linhas foram afetadas 
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}