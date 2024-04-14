const btn = document.getElementById('result');
const input = document.getElementById('celsius');

btn.addEventListener('click', onClick);

// input.addEventListener('keypress', onEnter);

// function onEnter(e){
//     if(e.key === 'Enter'){
//         onClick();
//     } else{
//         return;
//     }
// }

function onClick(){
    const h1 = document.getElementById('displayRes');
    h1.innerText = 'Result: ';

    const valueC = input.value;
    
    //F = (9/5 × °C) + 32
    const valueF = (9/5 * valueC) + 32;

    const op = document.createTextNode(`${valueF} F`);

    h1.appendChild(op); 
}