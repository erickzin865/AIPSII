

// let nota1, nota2, resultado
// nota1 = Number (prompt("1º nota"))
// nota2 = Number (prompt("2º nota"))
// resultado = (nota1 + nota2)/2
// if(resultado >=7){
//     alert("voce passou, sua nota foi: " + resultado)
// }else{
// alert("voce rodou, sua nota foi:" + resultado)}


// let pontuação

// pontuação = Number(prompt("qual sua pontuação?"))
// if(pontuação <= 10){
//     alert("deu ruim...")
// }
// if (pontuação > 10 && pontuação <= 100){
//     alert("talvez da proxima você consiga")
// }
// if (pontuação > 100 && pontuação <= 200){
//     alert("Supimpinha!!")
// }
// if(pontuação > 200){
//     alert("Seu mito!!!!!!!!!")
// }
let dias,diarias, multa, desconto


dias = Number(prompt("Quantos dias vai ficar? "))
multa = Number(150)
desconto = Number(0.25)


if(dias <= 5){
    diarias = ((100*dias) + multa)*desconto
    alert("Sua conta ficou: " + diarias)


}
if(dias >5 && dias <= 10){
    diarias = ((90*dias) + multa)*desconto
    alert("Sua conta ficou: " + diarias)


}
if(dias >10){
    diarias = ((80*dias) + multa)*desconto
    alert("Sua conta ficou: " + diarias)


}
