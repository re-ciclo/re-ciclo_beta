<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json"); 

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


        // verifica se há e-mail repetido
        $verificaEmail = $connection->query("SELECT * FROM usuario WHERE email = '$this->email'");
                                             
        // Verifica quantas linhas foram afetadas, é importante a query do e-mail não ter 1, pois significa que há e-mail já cadastrado, sendo assim vai cair em false      
        if($verificaEmail->rowCount() <= 0){
            // stmt equivale a statement (declaração ou afirmação)
            $stmt = $connection->query("INSERT INTO usuario
            (nome, email, telefone, senha) VALUES 
            ('$this->nome', '$this->email', '$this->telefone', '$this->senha')");
                
            if ($stmt->rowCount() > 0) {

                return true;
            } else {
                return false;
            }
            
        }else{
            return false;
        }
        
    }


    public function updateUsuario()
    {
        $connection = Connection::getDb();

        $connection->query("UPDATE usuario
        SET nome = '$this->nome', email = '$this->email', telefone = '$this->telefone', senha = '$this->senha'
        WHERE id_usuario = '$this->id_usuario'");
    }


    public function loginUsuario(){

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM usuario WHERE email = '$this->email' and senha = '$this->senha'");
        
        
        
        if ($stmt->rowCount() > 0) {

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
            
        } else {
            
            return false;
        }

    }


   
}