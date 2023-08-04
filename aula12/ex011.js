var idade = 20
console.log (`Voce tem ${idade} anos.`)
if (idade < 16){
    console.log ('Voce não vota!')
} else if (idade < 18 || idade > 65){
    console.log ('O seu voto é opcional')
} else if (idade > 18){
    console.log ('O seu voto é obrigatório')
}