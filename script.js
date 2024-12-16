// recuperar elementos del árbol DOM

const tablero = document.querySelector("#tablero");
const addBallBtn = document.querySelector("#addBallBtn");
const add10BallsBtn = document.querySelector("#add10BallsBtn");
const rem10BallsBtn = document.querySelector("#rem10BallsBtn");

const ANCHURA_TABLERO = 800;
const ALTURA_TABLERO = 450;
const ANCHURA_BOLA = 30;
const ALTURA_BOLA = 30;

const bolas = [];


//código automático

tablero.style.width = ANCHURA_TABLERO + "px";
tablero.style.height = ALTURA_TABLERO + "px";

let añadeBolas = setInterval(addBola,2000);
let mueveBolas = setInterval(moverBolas,20);

//setTimeout(() => {clearInterval(añadeBolas)},10000);


addBallBtn.addEventListener("click",function()
{
    addBola(1);
})

add10BallsBtn.addEventListener("click",function()
{
    addBola(10);
})

rem10BallsBtn.addEventListener("click",function()
{
    DelBola(10);
})
// Funciones auxiliares 

function addBola(num = 1)
{
    for(let i =1 ; i<=num; i++)
    {
        let nuevaBola = document.createElement("div");
        nuevaBola.classList.add("bola");
        tablero.append(nuevaBola);
        
        let top0 = Math.floor(Math.random()*(ALTURA_TABLERO-ALTURA_BOLA));
        let left0 = Math.floor(Math.random()*(ANCHURA_TABLERO-ANCHURA_BOLA));


        let velx0 = Math.floor(Math.random()*10-5);
        let vely0 = Math.floor(Math.random()*10-5);


        let r0 = Math.floor(Math.random()*255);
        let g0 = Math.floor(Math.random()*255);
        let b0 = Math.floor(Math.random()*255);


        let color0 = `rgb( ${r0}, ${g0}, ${b0} )`;

        nuevaBola.style.backgroundColor = color0;

        let nuevaInstanciaBola = new Bola(nuevaBola,top0,left0,velx0,vely0,color0);
        bolas.push(nuevaInstanciaBola);

        
        
    }
}


function moverBolas()
{
    bolas.forEach(b =>
    {

        if(b.top < 0 || b.top > ALTURA_TABLERO - ALTURA_BOLA)
        {
            b.vely = -b.vely;
        }

        if(b.left < 0 || b.left > ANCHURA_TABLERO - ANCHURA_BOLA)
        {
            b.velx = -b.velx;
        }


        b.top = b.top + b.vely;
        b.left = b.left + b.velx;

        b.punteroDIV.style.top = b.top + b.vely + "px";
        b.punteroDIV.style.left = b.left + b.velx + "px";
    }
    )
    // bolas[0].style.top = parseInt(bolas[0].style.top)+1 +"px"
    // bolas[0].style.left = parseInt(bolas[0].style.left)+1 + "px";
}

