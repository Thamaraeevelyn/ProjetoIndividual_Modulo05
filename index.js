import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores = []
let input =""

while(input !="sair")
{
 valores.push(input)
 input = readLineSync.question("Digite uma propriedade CSS").toLocaleLowerCase()

}
console.log(valores.sort().join("\n"))



