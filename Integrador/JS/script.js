function borrarM() {
    document.getElementById('Cantidad').value="Cantidad";
    document.getElementById('Select').value=1;
    document.getElementById('pagar').innerHTML="Total a pagar $...";
}

function calculo() {
    let cant=parseInt(document.getElementById('Cantidad').value);
    let a= document.getElementById('Select').value;
    let r= cant*200,result;

    if(a==1){
        result=r-(r*0.8);
    }
    else if(a==2){
        result=r-(r*0.5);
    }
    else if(a==3){
        result=r-(r*0.15);
    }
    return result;
}

function Resum() {
    document.getElementById('pagar').innerHTML="Total a pagar $ "+calculo();
}