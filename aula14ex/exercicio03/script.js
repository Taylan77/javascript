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
        if( p <= 0 ){
            alert('Impossivel contar! Considerando passo 1.')
            p = 1
        }
        if ( i < f){
            for (let c = i; c <= f; c += p ){
                res.innerHTML += ` ${c} \u{1F449} ` 
            }   
        }else {
            for ( c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449} `
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}