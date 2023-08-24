function adicionar(){
    var num = document.getElementById('txtn')
    var nume = Number(num.value)
    var array = []

    if( num.value.length <= 0 || nume > 100 || nume < 1){
        alert('Valor inválido ou já encontrado na lista.')
    }else{
        //TENHO QUE ARMAZENAR OS NUMEROS DENTRO DE UM ARRAY
        var valor = document.getElementById('selval')
        array.push(valor)
        valor.innerHTML = `Valor ${valor} adicionado!`
    }
    
}