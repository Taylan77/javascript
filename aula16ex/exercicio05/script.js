function adicionar(){
    var num = document.getElementById('txtn')
    var nume = Number(num.value)
    var array = []

    if( num.value.length <= 0 || nume > 100 || nume < 1){
        alert('Valor inválido ou já encontrado na lista.')
    }else{
        //TENHO QUE ARMAZENAR OS NUMEROS DENTRO DE UM ARRAY
        var valor = document.getElementById('selval')
        array.push(nume)
        let item = document.createElement('option')
        item.text = `Valor ${nume} adicionado.`
        valor.appendChild(item)
    }
    
}

function finalizar(){
    var res = document.getElementById('res')
    var maior = Math.max.apply(null, array)
    res.innerHTML = `Ao todo, temos  números cadastrados.<br/><br/>`
    res.innerHTML += `O maior valor informado foi .<br/><br/>`
    res.innerHTML += `O menor valor informado foi .<br/><br/>`
    res.innerHTML += `Somando todos os valores, temos .<br/><br/>`
    res.innerHTML += `A média dos valores digitados é .<br/><br/>`
} //TENHO QUE COLOCAR OS VALORES ACIMA