var valores = [ 2 , 4 , 1 , 9 , 6 , 0 ]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


for(let pos=0; pos< valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

for( let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}