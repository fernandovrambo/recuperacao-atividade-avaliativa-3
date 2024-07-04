import leia from 'readline-sync'

var n1 = leia.questionInt("escreva um numero")
var n2 = leia.questionInt("escreva um numero")
var n3 = leia.questionInt("escreva um numero")

if (n1<n2 && n1<n3) {
    if (n2<n3)
    console.log (n1, n2, n3)
    else 
    console.log (n1, n3, n2)
}   
if (n2<n1 && n2<n3) { 
    if (n1<n3)
    console.log (n2, n1, n3)
    else
    console.log (n2, n3, n1)
}
if (n3<n1 && n3<n2) {
    if (n1<n2)
    console.log (n3, n1, n2)
    else 
    console.log (n3, n2, n1)
}