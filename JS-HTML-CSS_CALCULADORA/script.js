function insert(num){
    var numero = document.getElementById('entrada').innerHTML;
    document.getElementById('entrada').innerHTML = numero + num;
}

function clear(){
    document.getElementById('entrada').innerHTML = " ";
}

function back(){
    var result = document.getElementById('entrada').innerHTML;
    document.getElementById('entrada').innerHTML = result.substring(0, result.length-1);
}

function calcular(){
    var result = document.getElementById('entrada').innerHTML;
    if(result){
        document.getElementById('entrada').innerHTML = eval(result);
    }else{
        document.getElementById('entrada').innerHTML = 'Nada p/ calcular'
    }
}