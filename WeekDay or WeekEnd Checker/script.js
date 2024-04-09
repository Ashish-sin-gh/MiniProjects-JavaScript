const button = document.getElementById('check');
const iptxt = document.getElementById('day');
const form = document.getElementById('form');


button.addEventListener('click' , onClick);

function onClick(e){
    const ipVal = iptxt.value.toLowerCase();

    if(ipVal === 'saturday' ){
        document.getElementById('output').innerHTML = "it is a week-end";
    } else if (ipVal === 'sunday'){
        document.getElementById('output').innerHTML = "it is a week-end";
    } else {
        document.getElementById('output').innerHTML = "it is a week-day";
    }
}


iptxt.addEventListener('focus', () => {
    iptxt.style.border = '3px solid blue';
});

iptxt.addEventListener('blur', () => {
    iptxt.style.border = '1.5px solid black';
});

