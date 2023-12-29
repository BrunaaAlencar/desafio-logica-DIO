class herois{
	constructor(tipoDoHeroi, nomeDoHeroi, idadeDoHeroi, ataqueDoHeroi){
    	this.tipoDoHeroi = tipoDoHeroi
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.ataqueDoHeroi = ataqueDoHeroi
    }
    
    escrever(){
    	console.log(`O ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}`)
 }
}   
   
let heroi1 = new herois(" mago", "Fernando", "28", " magia")
let heroi2 = new herois("guerreiro", "Felipe", "18","espada")
let heroi3 = new herois(" monge","Jackie Chan", "50", " artemarcial")
let heroi4 = new herois("ninja", "Naruto", "35", "shuriken")

heroi2.escrever()
heroi4.escrever()
