function multiple(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function add(a, b){
    return (+a) + (+b);
}

function subtraction(a, b){
    return (+a) - (+b);
}

function percent(a, b){
    return a/100 * b;
}

function clearAll(){
    a = '';
    b = '';
    operation = false;
    return;
}

let a = '';
let b = '';
let sign = '';
let operation = false;

const operands = ['x', '+', '-', '%', '/']

const firstNumber = document.querySelector('#text-one');
const secondNumber = document.querySelector('#text-two');
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(function(button){
    button.addEventListener('click', ()=>{
        const key = event.target.textContent;
        if(operation === false){
            a += key    
        }
        if(key.includes(operands)){
            operation = true;
            sign = key;
        }
        else{
            b += key;
        }
        firstNumber.textContent = a;
        console.log(a, b, sign) 
    })
});
