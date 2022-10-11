/**
 * Exemplo de Modulo externo + modulo em outras pastas
    @author Mateus Felipe da Silveira Vieira
*/


import name from "../../revisao.mjs"
import colors from "colors"

 


console.log(name)

console.log(colors.bold(name))

console.log(colors.bold(colors.green(name.msg)))


console.log(colors.bold(colors.rainbow(name.who)))


//console.log(colors.bold("hello".rainbow))

//console.log(colors.bold(name.who.rainbow))

console.log("teste")