//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function stopSnacking(){
    const val = document.querySelector('form input').value;
    for(let i=0; i<val; i++){
        document.getElementById('stops').innerText += ' stop snacking...'
    }
}

document.getElementById('help').addEventListener('click' , stopSnacking);