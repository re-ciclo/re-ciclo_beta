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


    public  function getDadosEditaveis()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT 
        usuario.id_usuario, usuario.nome, usuario.email, usuario.telefone, 
        endereco.cep, endereco.logradouro, endereco.complemento, endereco.numero
        FROM usuario INNER JOIN endereco
        ON usuario.id_usuario = endereco.id_usuario");

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
        // Eita '-' I know

        $a = $this->nome;
        $b = $this->email;
        $c = $this->telefone;
        $d = $this->id_usuario;

        $stmt4 = $connection->query("UPDATE usuario
        SET nome = '$a', email = '$b', telefone = '$c' 
        WHERE id_usuario = '$d'");

        // echo '..';
        // echo $this->nome, $this->id_usuario;

        if ($stmt4->rowCount() > 0) {

            return true;
            
        } else {
            
            return false;
        }


    }


    public function deleteUsuario()
    {
        $connection = Connection::getDb();


        $stmt = $connection->query("DELETE FROM usuario WHERE id_usuario = '$this->id_usuario'");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }

    }








    public function loginUsuario(){

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM usuario WHERE email = '$this->email' and senha = '$this->senha'");
        
        if($stmt->rowCount() > 0){
            $ajuste = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $id = $ajuste[0]['id_usuario'];
       
       
            $stmt2 = $connection->query("SELECT 
            usuario.id_usuario, usuario.nome, usuario.email, usuario.telefone, usuario.nivel_acesso, 
            endereco.cep, endereco.logradouro, endereco.complemento, endereco.numero
            FROM usuario INNER JOIN endereco
            ON usuario.id_usuario = endereco.id_usuario
            WHERE usuario.id_usuario = $id");

            // return $stmt2->fetchAll(PDO::FETCH_ASSOC);

            // [0]['nome']

            if ($stmt2->rowCount() > 0) {

                return $stmt2->fetchAll(PDO::FETCH_ASSOC);
                
            } else {
                
                return false;
            }

        }else{

            return false;

        }
        

        

        


        

    }


   
}