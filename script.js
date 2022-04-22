
/* 
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */


const main = document.querySelector('.main-wrapper');
const BOMBS_NUMBER = 16;
document.querySelector('button').addEventListener('click', play);

function play(){

    reset();
    
    const userChoice = document.getElementById('choice').value;
    const gridLevels = [100,81,49];
    const cellNumbers = gridLevels[userChoice];
    const bombs = generateBombs(cellNumbers);
    console.log(bombs);
    
    

    

    generatPlayground(cellNumbers);

}

function reset(){
    main.innerHTML = "";
}



function generatPlayground(cellNumbers){

    const grid =document.createElement('div');
    grid.className = 'sc-container';

    for( let i = 1; i <= cellNumbers; i++){

        const cell = generateCell(i,cellNumbers);
        grid.append(cell);

    }

    main.append(grid);

}


function generateCell(n, cellNumbers){
    const cell = document.createElement('div');
        cell.className = 'square cell' + cellNumbers;
        cell.innerHTML =`<span>${n}</span>`;
        cell.myNumber = n;
        cell.addEventListener('click', handleClickCell);
        return cell;
}

function generateBombs(cellNumbers){
    const generateBombs = [];

    while(generateBombs.length < BOMBS_NUMBER){
        
        const bomb = getRandomNumber(1 ,cellNumbers);
        if(!generateBombs.includes(bomb)){
            generateBombs.push(bomb);
        }
    }


    return generateBombs;
}

function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
  
}

/* function generaArrayNumeri(){

    const numeriScelti = [];
    for(let i = 0; i < numeriScelti; i++){
        numeriScelti.push(myNumber)
    }

    return numeriScelti;
} */

function handleClickCell(){

    const myNumber = parseInt(this.myNumber);
    let numeriScelti = [];
    console.log(numeriScelti);

    numeriScelti.push(myNumber);
    
        
   
    console.log(numeriScelti);
    //verificare che il numero scelto non sia nel arraybombe
   
    /* this.classList.add('bomb'); */

    this.classList.add('clicked'); 
    
    
    
}

function prova(myNumber,bombs){

    if(myNumber === bombs){
        console.log("boom");
    }
}


