<?php 

include_once("../Model/ClassTable/Usuario.php");



 $usuario = new Usuario();

 $usuario->id_usuario = $_POST['id_usuario'];
 $usuario->nome = $_POST['nome'];
 $usuario->email = $_POST['email'];
 $usuario->telefone = $_POST['telefone'];
 $usuario->senha = $_POST['senha'];

 $usuario->getAll();
 $usuario->registerUsuario();
 $usuario->updateUsuario();








