function contar(){
    var cont1 = document.getElementById('txti')
    var cont2 = document.getElementById('txtf')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (cont1.value.length == 0 || cont2.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!!')
    }else {
        res.innerHTML = 'Contando: '
        var i = Number(cont1.value)
        var f = Number(cont2.value)
        var p = Number(passo.value)

        for (let c = i; c <= f; c += p ){
            res.innerHTML += `${c}`
        }   
    }
}