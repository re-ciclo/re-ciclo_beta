<?php
            
    
    header('Access-Control-Allow-Origin:*');
    header("Content-type: json");

    include_once("../Model/ClassTable/Usuario.php");
    
    

    $login = new Usuario;
    $login->email = $_POST['email'];
    $login->senha = $_POST['senha'];
           
    $validateUsuarioLogin = $login->loginUsuario();

    if($validateUsuarioLogin){

        // print_r($validateUsuarioLogin[0]['nome']);
        // print_r($validateUsuarioLogin[0]['email']);
       
        
        echo json_encode($validateUsuarioLogin);
    }else{
        echo json_encode([0]);
    }


    /*
        [
            {
                "id_usuario": "1",
                "nome": "Alex",
                "email": "alex@gmail.com",
                "telefone": "33333333",
                "senha": "11111",
                "nivel_acesso": "0",
                "data": "2021-01-14 20:19:39"
            }
            ]

    */
   

