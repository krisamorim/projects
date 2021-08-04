<?php session_start() ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xptoIT</title>
</head>
<body>
    <?php
        //is there a login session? 
        if(!isset($_SESSION['login'])){

            //if not
            if(isset($_POST['acao'])){
                $login = 'xptoit';
                $senha = 'xptoit';

                //get data from post method
                $loginForm = $_POST['login'];
                $senhaForm = $_POST['senha'];

                //check credentials
                if($login =$loginForm && $senha == $senhaForm){
                    //login sucess
                    $_SESSION['login'] = $login;
                    header('Location: index.php');
                }else{
                    //login failed
                    echo 'Dados Inválidos';
                }
            }
            include('login.php');
        }else{
            if(isset($_GET['logout'])){
                unset($_SESSION['login']);
                session_destroy();
                header('Location: index.php');
            }
            include('home.php');
        }
    ?>
</body>
</html>