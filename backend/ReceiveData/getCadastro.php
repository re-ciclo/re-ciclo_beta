<?php
            
    
    header('Access-Control-Allow-Origin:*');
    header("Content-type: json");

    // header("Access-Control-Allow-Origin:http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/getCadastro.php");
    // header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // header("Access-Control-Allow-Credentials:" true);


    include_once("../Model/ClassTable/Usuario.php");
    include_once("../Model/ClassTable/Endereco.php");

    

    // Recebe as variáveis e verifica

    // if(strlen($_POST['email']) > 2 && strlen($_POST['senha']) > 2){}
       // Inicia o objeto e em seguida atribui os valores
            $usuario = new Usuario();
            $usuario->nome = $_POST['nome'];
            $usuario->email = $_POST['email'];
            $usuario->telefone = $_POST['telefone'];
            $usuario->senha = $_POST['senha'];
    
    

    // if(strlen($_POST['cep']) > 2 && strlen ($_POST['numero']) > 0){}
        //Inicia o objeto e em seguida atribui os valores
            $endereco = new Endereco(); 
            $endereco->cep = $_POST['cep'];
            $endereco->logradouro = $_POST['logradouro'];
            $endereco->complemento = $_POST['complemento'];
            $endereco->bairro = $_POST['bairro'];
            $endereco->localidade = $_POST['localidade'];
            $endereco->uf = $_POST['uf'];
            $endereco->numero = $_POST['numero'];

    
        
    // Valida cada registro

       
       $validateUsuario = $usuario->registerUsuario();
       if($validateUsuario == true){

            $validateEndereco = $endereco->registerEndereco();

             // Se ambos registro ocorrerem, vai passar o valor true
                if($validateEndereco == true){
                    echo json_encode(true);
                }else{
                    echo json_encode(false);
                }
       }else{

            echo json_encode(false);
       }



       
 


   

