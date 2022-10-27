function exer2(a){
	var myTableau = Array(10);
   	var nombre=parseInt(prompt("Entrez un chiffre entier"));


    for (i=0; i<=10; i++){
    resultat=nombre*i;
	myTableau[i]= i +" X "+ nombre + " = " + resultat+ "\n";
	}
	alert(myTableau);
	
}
  exer2();