function adicionar(){
    var num = document.getElementById('txtn')
    var valor = document.getElementById('selval')
    var nume = Number(num.value)

    if( num.value.length <= 0 || nume > 100 || nume < 1){
        alert('Valor inválido ou já encontrado na lista.')
    }else{
        //TENHO QUE ARMAZENAR OS NUMEROS DENTRO DE UM ARRAY
    }
    
}