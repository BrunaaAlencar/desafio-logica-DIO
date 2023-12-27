// inicio do projeto
// inicio do projeto
//O joguinho do cavaleiro que precisa encontrar sua princesa
//Comando de saida
console.log("Digite o nome do cavaleiro")

//Declarando uma variável
let cavaleiro ="Fernando"

//concatenando uma mensagem fixa + mais uma variável
console.log("Bem vindo " + cavaleiro)

console.log (cavaleiro + " entrou no servidor")

//atribuição de constante
const ele = "Nosso cavaleiro "

let pontosDeVida = 10

console.log (ele + "está com um XP " + pontosDeVida)

console.log (ele + cavaleiro + " terá que fazer escolhas muito importates de agora em diante para chegar a sua princesa")


//atribuição de variável
let obstaculo1 = "montanhas altas"
let obstaculo2 = "mares revoltos"
let obstaculo3 = "deserto escaldante"

// Estrutura de decisão
// switch/case/break/default
let situacao = "montanhas altas"

switch (situacao){
	case "montanhas altas":
    console.log( ele + "ganhou 1000 pontos de XP")
    pontosDeVida += 1000
    break

	case "mares revoltos":
        console.log( ele + "ganhou 3000 pontos de XP")
        pontosDeVida += 3000
    break
    
    
	case "deserto escaldante":
        console.log( ele + "ganhou 5000 pontos de XP")
        pontosDeVida += 5000
    break
    
    default:
    console.log(ele + "morreu. Reinicie o jogo." )
}

console.log("Após passar por desafios " + ele + "se encontra diante de um desafio maior. E agora o que " +  ele + "irá fazer?")

situacao = "mares revoltos"

switch (situacao){
	case "montanhas altas":
    console.log( ele + "ganhou 1000 pontos de XP")
    pontosDeVida += 1000
    break

	case "mares revoltos":
        console.log( ele + "ganhou 3000 pontos de XP")
        pontosDeVida += 3000
    break
    
    
	case "deserto escaldante":
        console.log( ele + "ganhou 5000 pontos de XP")
        pontosDeVida += 5000
    break
    
    default:
    console.log(ele + "morreu. Reinicie o jogo." )
}

//if, else if ,else 

if(pontosDeVida <= 1000){
	console.log(ele + cavaleiro + "está no nível de Bronze")
}else if(pontosDeVida <= 3000){
	console.log(ele + cavaleiro + "está no nível de Prata")
}else if(pontosDeVida >= 4000){
	console.log(ele + cavaleiro + " está no nível de Ouro") 
}else {
	console.log(ele + "morreu. Reinicie o jogo.") 
}