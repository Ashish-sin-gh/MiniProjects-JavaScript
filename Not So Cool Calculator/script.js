let total = 0;

const result = document.querySelector('#result h2 span');

document.querySelector('#operations li:nth-child(1)').addEventListener('click' , () => {
    total = 0;
    result.innerText = total;
});

document.querySelector('#operations li:nth-child(2)').addEventListener('click' , () => {
    total += 9;
    result.innerText = total;
});

document.querySelector('#operations li:nth-child(3)').addEventListener('click' , () => {
    total -= 5;
    result.innerText = total;
});

document.querySelector('#operations li:nth-child(4)').addEventListener('click' , () => {
    total /= 2;
    result.innerText = total;
});
