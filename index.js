const tablero= document.querySelector('.tablero');
const casillas = document.querySelectorAll('div');
const winner= document.querySelector(".winner")
const popup=document.querySelector("aside")
const p= document.querySelector("p")
const btn= document.querySelector("button")
const wining=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let contador=0;
function consultarGanador() {
    

    for (let combinacion of wining) {
        const [a, b, c] = combinacion;
        if (casillas[a].textContent !== '' &&
            casillas[a].textContent === casillas[b].textContent &&
            casillas[a].textContent === casillas[c].textContent) {
                popup.classList.add("popup")
                p.textContent=`El ganador es ${casillas[a].textContent}`
        }
    }
}
casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
        if(contador===0 || contador%2==0){
            casilla.textContent="X"
            contador++
        }else{
            casilla.textContent="O"
            contador++
       }

       consultarGanador()
    });
});

btn.addEventListener("click",()=>{
    casillas.forEach(casilla => {
                casilla.textContent=""
                popup.classList.remove("popup")
                p.textContent=""
        });
    });