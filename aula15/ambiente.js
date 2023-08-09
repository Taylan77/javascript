let num = [ 2 , 9 , 3 , 7 ]
num.push(4)
num.sort()
console.log (`Os vetores são ${num}`)
console.log (`Os vetores tem ${num.length} elementos!`)
let pos = num.indexOf(5)
if ( pos == -1){
    console.log ('O valor nao foi encontrado')
}else{
    console.log(`O vetor 9 esta na posiçao ${pos}`)
}