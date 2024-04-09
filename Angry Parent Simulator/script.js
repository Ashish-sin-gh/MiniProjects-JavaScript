const btn = document.getElementById('shoutBtn');

btn.addEventListener('click', onClick);

function onClick(){
    const result = document.getElementById('result');

    result.innerText = "";

    const fn = document.getElementById('firstName').value;
    const mn = document.getElementById('middleName').value;
    const ln = document.getElementById('lastName').value;

    const fa = document.createElement('i');
    fa.className = 'fas fa-angry icon';
    
    const textNode = document.createTextNode(` ${fn} ${mn} ${ln} !!!! U ARE GROUNDED.`);

    result.appendChild(fa);
    result.appendChild(textNode);

    document.getElementById('result').style.color = 'red';

    //speech Synthesis

    const syn = window.speechSynthesis; 
    
    const whatToSpeak = `${fn} ${mn} ${ln}. U ARE GROUNDED.`;

    let yellThis = new SpeechSynthesisUtterance(whatToSpeak);
    syn.speak(yellThis);
}
