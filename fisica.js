let objetivo = document.getElementById("result_value");
let req1Btn = document.getElementById("req1Submit");
let req1Form = document.getElementById("req1Form");

let objetivo2 = document.getElementById("result_valueReq2");
let req2Btn = document.getElementById("req2Submit");
let req2Form = document.getElementById("req2Form");

function valorEspesor(e, medidaE, medida) {
    if(medidaE==medida){
        e=e;
    }else if(medidaE== "mm" & medida=="m"){
        e = (e/1000);
    }else if(medidaE== "cm" & medida=="m"){
        e = (e/100);
    }else if(medidaE == "in" & medida=="m"){
        e = (e/39.37);
    }else if(medidaE == "ft" & medida=="m"){
        e = (e/3.28);
    }else if(medidaE== "m" & medida=="cm"){
        e = (e*100);
    }else if(medidaE== "mm" & medida=="cm"){
        e = (e/10);
    }else if(medidaE == "in" & medida=="cm"){
        e = (e*2,54);
    }else if(medidaE == "ft" & medida=="cm"){
        e = (e*30,48);
    }else if(medidaE== "m" & medida=="mm"){
        e = (e*1000);
    }else if(medidaE== "cm" & medida=="mm"){
        e = (e*10);
    }else if(medidaE == "in" & medida=="mm"){
        e = (e*25,4);
    }else if(medidaE == "ft" & medida=="mm"){
        e = (e*305);
    }else if(medidaE== "m" & medida=="in"){
        e = (e*39,37);
    }else if(medidaE== "cm" & medida=="in"){
        e = (e/2,54);
    }else if(medidaE == "mm" & medida=="in"){
        e = (e/25,4);
    }else if(medidaE == "ft" & medida=="in"){
        e = (e*12);
    }else if(medidaE== "m" & medida=="ft"){
        e = (e*3,281);
    }else if(medidaE== "cm" & medida=="ft"){
        e = (e/30,48);
    }else if(medidaE == "mm" & medida=="ft"){
        e = (e/304,8);
    }else if(medidaE == "in" & medida=="ft"){
        e = (e/12);
    }    
    return e;
}    

function obtenerVolumen(h,r,rE) {
    var volumenCilindro = Math.PI*Math.pow((r-rE),2)*h;
    var volumenCasquete = (4/3)*Math.PI*Math.pow((r-rE),3);
    return volumenCilindro + volumenCasquete;
}    

function obtenerAltura(r,v,rE) {
    let h = (v-(4/3)*Math.PI*Math.pow((r-rE),3))/(Math.PI*Math.pow((r-rE),2));
    return h
}    


req1Btn.addEventListener("click", function(ev) {
    ev.preventDefault();
    var e = document.getElementById("valorE").value;
    var h = document.getElementById("valorH").value - document.getElementById("valorD".value);
    var r = document.getElementById("valorD").value / 2;
    var medida = document.getElementById("medida").value;
    var medidaE = document.getElementById("medidae").value;
    var rE = valorEspesor(e, medidaE ,medida);
    objetivo.innerHTML = obtenerVolumen(h,r,rE).toFixed(2)+" "+medida+"^3";
});

req2Btn.addEventListener("click", function(ev) {
    ev.preventDefault();
    var e = document.getElementById("valorEreq2").value;
    var v = document.getElementById("valorVreq2").value;
    var r = document.getElementById("valorDreq2").value / 2;
    var medida = document.getElementById("medidaReq2").value;
    var medidaE = document.getElementById("medidaeReq2").value;
    var rE = valorEspesor(e, medidaE ,medida);
    objetivo2.innerHTML = obtenerAltura(r,v,rE).toFixed(2)+" "+medida;
});
