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















