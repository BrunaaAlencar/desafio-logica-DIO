ranking("Fabio" , 150, 38)
ranking("Josue" , 110, 37)
ranking("Jorge" , 106, 38)
ranking("Jair" , 88, 30)
ranking("fabricio" , 100, 57)
ranking("Felipe" , 68, 30)
ranking("Wallacy" , 65, 28)
ranking("Cesar" , 40, 15)
ranking("Fernando" , 50, 27)
ranking("Paulo" , 59, 82)


function ranking(nome, vitorias, derrotas){
	console.log("O Herói " + nome + " tem " + vitorias +" vitorias e " + derrotas + " derrotas, ficando assim com uma media de " + (vitorias - derrotas) + " vitorias")
	if((vitorias - derrotas) <= 10){
	console.log(nome + " está no nível de Ferro")
}else if((vitorias - derrotas) <= 20){
	console.log(nome + " está no nível de Bronze")
}else if((vitorias - derrotas) <= 50){
	console.log(nome + " está no nível de Prata")
}else if((vitorias - derrotas) <= 80){
	console.log(nome + " está no nível de Ouro")
}else if((vitorias - derrotas) <= 90){
	console.log(nome + " está no nível de Diamante")
}else if((vitorias - derrotas) <= 100){
	console.log(nome + " está no nível de Lendário")
}else if((vitorias - derrotas) >= 101){
	console.log(nome + " está no nível de Imortal")
}else {
	console.log("Try again") 
}
}

