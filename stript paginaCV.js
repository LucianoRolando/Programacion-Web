

function validacion() {
   
    var nom =document.getElementById("nombre").value;
    var mail =document.getElementById("mail").value;
    var mnje =document.getElementById("mensaje").value;
   var no;
   var ma="";
   var me="";
   if(nom==""){
       no="\n -nombre";}
    else {
    no="";}
    if(mail==""){
        ma="\n -mail";}
     else {
     ma="";}
     if(mnje==""){
        me="\n -mensaje";}
     else {
     me="";}

    if (nom==""||mail==""||mnje=="") {
    alert("Falta completar: "+no+ma+me);
    }
    
    else {
    alert("Gracias por contactar");
    document.getElementById("nombre").value="";
    document.getElementById("mail").value="";
    document.getElementById("mensaje").value="";
    }
    }
