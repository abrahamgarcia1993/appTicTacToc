const tablero= document.querySelector('.tablero');
const casillas = document.querySelectorAll('div');
console.log(casillas[0].textContent);
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
casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
       if(contador===0 || contador%2==0){
        casilla.textContent="X"
        contador++
       }else{
        casilla.textContent="O"
        contador++
       }

    });
});



