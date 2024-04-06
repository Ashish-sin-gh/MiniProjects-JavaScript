const red = document.getElementById('red-color');
const yellow = document.getElementById('yellow-color');
const green = document.getElementById('green-color');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
});

red.addEventListener('dblclick' , () => {
    document.body.style.backgroundColor = "white";
});


yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = "yellow";
});

yellow.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = "white";
});


green.addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
});

green.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = "white";
});


// function backButton(){
//     document.body.textContent = '';
//     const div = document.createElement('div');
//     div.className = 'backDiv';

//     const span = document.createElement('span');
    
//     const text = document.createTextNode('back');

//     span.appendChild(text);
//     div.appendChild(span);
//     document.body.appendChild(div);

//     div.addEventListener('click' , () =>{
//         const h1 = document.createElement('h1');
//         const texth1 = document.createTextNode('Background Picker');
//         h1.appendChild(texth1);

//         const h2 = document.createElement('h2');
//         const texth2 = document.createTextNode('lease press the desired color to implement the change on whole page');
//         h2.appendChild(texth2);

//         const img = document.createElement('img');
//         img.setAttribute('src', 'image.png');
//         img.setAttribute('alt', 'logo for fun');

//         const divv =  document.createElement('div');
//         div.id = 'color-section';

//         const div1 =  document.createElement('div');
//         div1.className = 'sections';
//         div1.id = 'red-color';

//         const div2 =  document.createElement('div');
//         div2.className = 'sections';
//         div2.id = 'yellow-color';

//         const div3 =  document.createElement('div');
//         div3.className = 'sections';
//         div3.id = 'green-color';

//         divv.appendChild(div1);
//         divv.appendChild(div2);
//         divv.appendChild(div3);

//         document.body.appendChild(h1);
//         document.body.appendChild(h2);
//         document.body.appendChild(img);
//         document.body.appendChild(divv);
//     });
// }