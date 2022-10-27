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
