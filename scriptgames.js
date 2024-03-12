/*let imagen=document.querySelector(img);

const inicioDeArrastre=()=>{
    console.log("se inicio el arrastre")
}

imagen.addEventListener("dragend",()=>{
console. log("se solto la imagen")
})/imagenesjc/Rompe1.pgn*/

//prueba 
let imagen=document.querySelector("img");
let cuadroUno=document.querySelector(".cuadroUno");

const inicioDeArrastre=(event)=>{
    console.log(event.dataTransfer)
    event.dataTransfer.setData("tex","./Imagenesjc/Rompe1.png");
};

const prevenirDefault =(event)=>{
   //event.preventDefault()
};

const soltarElemento =(event)=>{
   // console.log("se solto un elemento dentro")
   let infoObtenida= event.dataTransfer.getData("tex")
   destino.innerHTML='<img src="{infoObtenida}" />'
   imagen.classList.add("ocultar")
};

const reinicio=()=>{
    window.location.reload()
};


