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
