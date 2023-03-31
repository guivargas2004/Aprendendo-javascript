//alternando palavras
let txt="Estão chegando as provas"
document.write(txt.replace("provas","avaliações"))
document.write("<br><br>")

//apresentando casas decimais
let num=123.4567
document.write(num.toFixed(2))
document.write("<br><br>")

let num1=123.4567
document.write(num1.toPrecision(4))
document.write("<br><br>")

//caixa alert
alert("Olá mundo")

//Caixa de confirmação
let teste=confirm("Você é um aluno?")
document.write("O resultado é: ",teste)

//Caixa de prompt
let texto=prompt("Digite seu nome")
document.write("O seu nome é: ", texto)

//Estrutura condicional - if
if(10 < 7){
    document.write("10 é maior que 7")
}else{
    document.write("10 não é maior que 7")
}
document.write("<br><br>")

let valor = 10
if(valor > 7){
    document.write("Valor é maior que 7")
}else{
    document.write("valor não é maior que 7")
}
document.write("<br><br>")

//if else encadeado
let idade = 1

if(idade <=12){
    document.write("É uma criança")
}else if(idade <=17){
    document.write("É um adolescente")
}else if(idade <=40){
    document.write("É um adulto")
}else{
    document.write("É um idoso experiente")
}