/////////////////////////////////////////////ex1////////////////////////////////////////////////////////
function exer1(){
var a=0;
var b=0;
var c=0;
var d=0;

  while((age <=100));
  var age=parseInt(prompt("Indiquez votre âge: ","0"),10);

  if ((age <20)){  
    a= a+1; 
}
  else if ((age >=20 && age <=40)){
    b = b+1;
}
  else if((age >= 40)){
    c = c+1;
  }
  else if((age<=100)){
    d = d+1;
  }  
alert(("Il y a " + "" + a + "" + " jeunes\n " + 
"Il y a " + "" + b + "" + " adulte\n " + 
"Il y a " + "" + c + "" + " vieux\n " +
"Il y a " + "" + d + "" + "centenaire " +""));
}
var ex1=document.getElementById("bout1");
ex1.addEventListener("click",function(){
	exer1();
});

///////////////////////////////////////////////////ex 2/////////////////////////////////////////////////
function exer2(){

	var myTableau = Array(10);
   	var nombre=parseInt(prompt("Entrez un chiffre entier"));


    for (i=0; i<=10; i++){
    resultat=nombre*i;
	myTableau[i]= i +" X "+ nombre + " = " + resultat+ "\n";
	}
	alert(myTableau);
}
var ex2=document.getElementById("bout2");
ex2.addEventListener("click",function(){
	exer2();
});
  

/////////////////////////////////////////////////////ex3////////////////////////////////////////////////
function exer3(){
var tab = ["AUDREY", "AURELIEN","FLAVIEN","JEREMY","LAURENT","MELIK","NOUARA","SALEM","SAMUEL","STEPHANE"];
var choix = window.prompt("Choisissez un prénom dans la liste suivante : AUDREY, AURELIEN, FLAVIEN, JEREMY, LAURENT, MELIK, NOUARA, SALEM, SAMUEL, STEPHANE");
choix=choix.toUpperCase();


if(choix=="AUDREY"||"AURELIEN"||"FLAVIEN"||"JEREMY"||"LAURENT"||"MELIK"||"NOUARA"||"SALEM"||"SAMUEL"||"STEPHANE"){
	tab.splice(tab.indexOf(choix),1);
	tab.push(" ");	
	console.log(tab);
	
}else {
	alert("Prénom inconnu");
}
}
var ex3=document.getElementById("bout3");
ex3.addEventListener("click",function(){
	exer3();
});

////////////////////////////////////////////////ex4///////////////////////////////////////////////////////

function exer4(){
  var pu=parseInt(prompt("veuillez saisir le prix unitaire"));
  var qtecom=parseInt(prompt("veuillez saisir une quantité"));
  var tot = pu*qtecom;
  var rem;
  var pap; //pu*qtecom  - rem
  var port;
  alert(tot);
  
  if(tot>=100 && tot<=200){
    rem=tot*5/100;
    pap=tot-rem;
  alert(pap);
  
  }else if(tot>=200 && tot<=500){
    rem=tot*10/100;
    pap=tot+port;
  alert(pap);
  
  }else if(tot>500){
    rem=tot*10/100;
    pap=tot-rem;
  alert (pap);
  }
  
  else if(tot>=200){
    rem=tot*10/100
    pap=tot-rem;
  alert(pap);
  }
  
  if(pap<500){
    port=tot*2/100;
    pap=pap+port;
  alert(pap.toFixed(2));
  }
  
}
var ex4=document.getElementById("bout4");
ex4.addEventListener("click",function(){
	exer4();
});
