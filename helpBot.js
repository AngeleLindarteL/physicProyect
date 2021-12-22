let req1 = document.getElementById("req1");
let req2 = document.getElementById("req2");
let re1EV = document.getElementById("req1EV");
let re2EV = document.getElementById("req2EV");
let re1CL = document.getElementById("closeReq1");

const tip = document.getElementById("tip");
const req1FormC = document.getElementById("req1Form");
const desY = document.getElementById("helpBotYes");
const desN = document.getElementById("helpBotNo");
const botBody = document.getElementById("assitant");
const tipText = document.getElementById("tipText");
const backToAll = document.getElementById("backTuto");
const decBtnContainer = document.getElementById("decBtnContainer");
const shadowned = document.getElementById("shadowned");
const shadownedForm = document.getElementById("step-2I");
const cancelAction = document.getElementById("cancelAction");
const helpbotHeader = document.getElementById("helpBotYesHeader");
let overEventHandler;

const interactionSimule = {
    'simulateMouseOver' : (elementIdentifier,styleClass) => {
        element = document.querySelector(elementIdentifier);
        overEventHandler = element.addEventListener('mouseover', () => {element.classList.add(styleClass)});
        hoverEvent = new MouseEvent('mouseover', {
            "view": window,
            "bubbles": true,
            "cancelable": true
        });
        element.dispatchEvent(hoverEvent);
    },
}

function removeImpontClases(){
    if(window.localStorage.getItem("step") < 1){
        re1EV.classList.add("notChoosen");
        re2EV.classList.add("notChoosen");
    }else{
        try{
            re1EV.classList.remove("notChoosen");
            re1EV.classList.remove("notChoosen");
            shadownedForm.style.display = "none";
            shadownedForm.style.opacity = "0";
            req1FormC.classList.remove("step1form");
            req1Btn.classList.remove("sendHovered");
            req1Btn.removeEventListener('mouseover',overEventHandler);
            document.getElementById("censoredAction").style.display = "none";
            cancelAction.style.display = "none";
        }catch(e){
            console.log(e)
        }
    }
}

function findElementPos({elementID = null, elementClass = null}){
    let element;
    elementID == null ? element = "." + elementClass : element = "#" + elementID;
    console.log(element)
    try{
        let posy = window.scrollY + document.querySelector(element).getBoundingClientRect().top;
        let posx = window.scrollX + document.querySelector(element).getBoundingClientRect().left;
        return [posx,posy];
    }catch(e){
        console.log("El elemento no existe o hubo un error al hayar su posicion");
        console.log(e);
    }
}

function changeBotState(state){
    if(state == false){
        try{
            botBody.style.left = "-100%";
            botBody.style.opacity = "-0%";
            setTimeout(() => {
                botBody.style.display = "none";
            }, 1000)
            window.localStorage.setItem("step",0);
        }catch(e){
            console.log(e)
        }
    }else{
        try{
            botBody.style.left = "0";
            botBody.style.opacity = "100%";
            setTimeout(() => {
                botBody.style.display = "flex";
            }, 1000)
        }catch(e){
            console.log(e)
        }
    }
}

function shadownedState(state){
    if(state == false){
        try{
            shadowned.style.opacity = "0%";
            setTimeout(() => {
                shadowned.style.display = "none";
            }, 200)
        }catch(e){
            console.log(e);
        }
    }else{
        try {
            shadowned.style.display = "flex";
            shadowned.style.opacity = "100%";
        } catch (e) {
            console.log(e);
        }
    }
}

function accept(step){
    document.getElementById("censoredAction").style.display = "flex";
    const helpHeaderBtn = document.querySelector(".helpBotBtnH");
    helpHeaderBtn.style.display = "none";
    let stepx,stepy;
    cancelAction.style.display = "block"
    decBtnContainer.style.display = "none";
    switch(step){
        case 1:
            botBody.style.transform = "scale(1)";
            re1EV.classList.remove("notChoosen");
            re2EV.classList.remove("notChoosen");
            tipText.innerHTML = "Vamos a ello!";
            [stepx, stepy] = findElementPos({elementID: "choose"});
            botBody.style.left = Math.round((stepx) + document.querySelector('#choose').clientWidth / 2.1) + "px";
            botBody.style.top = Math.round((stepy) - + document.querySelector('#choose').clientHeight / 2) + "px";
            botBody.style.boxShadow = "none";
            shadownedState(true);
            setTimeout(() => {
                tipText.textContent = "¡Elige la primera opción para continuar!";
            }, 500)
            break;
            case 2:
                req1FormC.classList.add("step1form");
                req1.style.top = "0%";
                req1.style.zIndex = "100";
                req1.style.backgroundColor = "white";
                shadownedForm.style.display = "flex";
                re1CL.style.opacity = "0%";
                setTimeout(() => {
                    re1CL.style.opacity = "0%";
                    document.getElementById("form-ul-container").style.opacity = "100%"
                    shadownedForm.style.opacity = "100%";
                    [stepx, stepy] = findElementPos({elementID: "req1Form"});
                    botBody.style.left = Math.round((stepx) + document.querySelector('#req1Form').clientWidth / 2.1) + "px";
                    botBody.style.top = Math.round((stepy) /*- + document.querySelector('#req1Form').clientHeight / 2*/) + "px";
                    tipText.textContent = "Llena todo estos campos para obtener la capacidad!";
                },800);
                setTimeout(() => {
                    re1CL.style.opacity = "0%";
                    [stepx, stepy] = findElementPos({elementID: "req1Submit"});
                    botBody.style.width = `${document.querySelector("#assitant").clientHeight*3}px`;
                    botBody.style.left = Math.round((stepx)  + document.querySelector('#req1Form').clientWidth) + "px";
                    botBody.style.top = Math.round((stepy)) + "px";
                    tipText.textContent = "¡Cuando los datos esten llenos, presiona este botón para obtener la información!";
                    interactionSimule.simulateMouseOver('#req1Submit',"sendHovered");
                    document.getElementById("form-ul-container").style.opacity = "0%"
                }, 4000);
                setTimeout(() => {
                    shadownedForm.style.zIndex = "5";
                    shadownedForm.style.width = "50%";
                    tipText.textContent = "Aquí aparecera el resultado de tu operación";
                    [stepx, stepy] = findElementPos({elementID: "resultreq1"});
                    botBody.style.left = Math.round((stepx)) + "px";
                    console.log(stepx,stepy);
                    botBody.style.top = Math.round((stepy)+ document.querySelector("header").clientHeight ) + "px";
                    setTimeout(() => {
                        document.getElementById("form-ul-container").style.opacity = "100%"
                    }, 500)
                }, 8000);
                setTimeout(() => {
                    cancelAction.style.width = "95%"
                    cancelAction.style.right = "0"
                    shadownedForm.style.width = "100%";
                    re1CL.style.opacity = "100%";
                    [stepx, stepy] = findElementPos({elementID: "closeReq1"});
                    botBody.style.left = Math.round((stepx)) + "px";
                    botBody.style.top = Math.round((stepy) + document.querySelector("header").clientHeight) + "px";
                    tipText.textContent = "Si te equivocaste o quieres salir puedes presionar este boton";
                    re1CL.style.display = "flex";
                }, 12000);
                setTimeout(() => {
                    cancelAction.style.width = "100%"
                    cancelAction.style.opacity = "100%"
                    botBody.style.transform = "scale(2)";
                    [stepx, stepy] = findElementPos({elementID: "req1"});
                    botBody.style.left = Math.round((stepx) + document.querySelector("#req1").clientWidth / 2) + "px";
                    botBody.style.top = Math.round((stepy) + document.querySelector("#req1").clientHeight / 2) + "px";
                    tipText.style.fontSize = ".8em";
                    tipText.textContent = "¡Funciona igual con el otro requerimiento! Si necesitas ayuda podrás activar el bot de nuevo en el header";
                }, 17000);
                setTimeout(() => {
                    tipText.textContent = "¡Nos vemos!";
                    setTimeout(() => {                        
                        tip.style.display = "none";
                        botBody.style.transform = "scale(1)";
                        [stepx, stepy] = findElementPos({elementClass: "headerF"});
                        botBody.style.zIndex = "99999";
                        botBody.style.left ="88.5%";
                        botBody.style.transform = "scale(1.2)";
                        botBody.style.top = Math.round(stepy) + "px";
                        botBody.style.opacity = "0%";
                        helpHeaderBtn.style.display = "flex";
                        helpHeaderBtn.style.opacity= "0";
                    }, 2000)
                    setTimeout(() => {
                        helpHeaderBtn.style.opacity= "100%";
                        changeBotState(false);
                    },2800)
                    setTimeout(() => {
                        window.localStorage.setItem("nAS",false);
                        location.reload();
                    },3200)
                }, 21000);
                window.localStorage.setItem("ct",true);
                break;
            }
        }
        
        desY.addEventListener('click', () => {
            window.localStorage.setItem("nAS",true);
            window.localStorage.setItem("step",1);
            accept(parseInt(window.localStorage.getItem("step")));
        });
        
        desN.addEventListener('click',() => {
            window.localStorage.setItem("nAS",false);
            changeBotState(false);
        });
        
        
        backToAll.addEventListener('click', () => {
            changeBotState(false);
            shadownedState(false);
            removeImpontClases();
            cancelAction.style.display = "none";
            helpbotHeader.style.display= "flex";
            helpbotHeader.style.opacity= "100%";
            document.getElementById("censoredAction").style.display = "none";
        })
        
        window.addEventListener('load', ()=>{
            if(window.localStorage.getItem("nAS") == "true"){
                if(parseInt(window.localStorage.getItem("step")) < 1){
                    changeBotState(true);
                    decBtnContainer.style.display = "flex"
                    removeImpontClases();
                }
                parseInt(window.localStorage.getItem("step")) == 999 ? window.localStorage.setItem("step",0) : false;
            }else if(window.localStorage.getItem("nAS") == "false"){
                changeBotState(false);
            }else{
                window.localStorage.setItem("nAS",true);
            }
        })
        
        window.addEventListener('scroll',(e) => {
            if(!parseInt(window.localStorage.getItem("step")) < 1){
                window.scrollTo(0,0)
    }
})

parseInt(window.localStorage.getItem("step")) > 0 ? accept(parseInt(window.localStorage.getItem("step"))) : window.localStorage.setItem("step",0);

// BtnFunctions


re1EV.addEventListener('click',() => {
    req1.style.top = "0%";
    req1.style.zIndex = "100";
    req1.style.backgroundColor = "white";
    re1CL.style.display = "flex";
    setTimeout(() => {
        re1CL.style.opacity = "100%";
    },300)
    if(window.localStorage.getItem("step") == 1 || window.localStorage.getItem("step") == "1"){
        window.localStorage.setItem("step",2);
        accept(parseInt(window.localStorage.getItem("step")));
    }
})

re2EV.addEventListener("click" ,() => {
    req2.style.top = "0%";
    req2.style.opacity = "100%";
    req2.style.zIndex = "100";
    req2.style.backgroundColor = "white";
    re1CL.style.display = "flex";
    setTimeout(() => {
        re1CL.style.opacity = "100%";
    },300)
})

re1CL.addEventListener('click', () => {
    req1.style.top = "-100%";
    req1.style.zIndex = "100";
    req1.style.backgroundColor = "transparent";
    re1CL.style.opacity = "0";
    req2.style.top = "-100%";
    req2.style.zIndex = "100";
    req2.style.backgroundColor = "transparent";
    setTimeout(() => {
        re1CL.style.display = "none";
    },300)
    if(window.localStorage.getItem("step") > 1){
        window.localStorage.setItem("step",1);
        accept(parseInt(window.localStorage.getItem("step")));
        removeImpontClases();
    }
})

helpbotHeader.addEventListener('click', () => {
    window.localStorage.setItem("nAS",true)
    window.localStorage.setItem("step",0)
    changeBotState(true)
    // accept(parseInt(window.localStorage.getItem("step")))
    location.reload()
})