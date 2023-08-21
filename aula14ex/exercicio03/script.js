function contar(){
    var cont1 = document.getElementById('cont1')
    var cont2 = document.getElementById('cont2')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerText += 'Contando..'
    var cnt1 = Number(cont1.value)
    var cnt2 = Number(cont2.value)
    var pass = Number(passo.value)
    if (cont1.value.length == 0) {
        res.innerText = 'Impossivel contar'
    }else if (pass == 0){
        alert('Passo invalido, considerando passo = 1')
        pass = 1
        while (cnt1 <= cnt2){
            res.innerText += `${cnt1}`
            cnt1 = cnt1 + pass
        }
    }else{
        for(;cnt1 <= cnt2; cnt1 = cnt1 + pass){
            res.innerText += `${cnt1}`
        }
    }
}