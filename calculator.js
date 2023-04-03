let a = '';
let b = '';
let sign = '';
let operation = false;

function clearAll(){
    a = '';
    b = '';
    operation = false;
    return;
}

const operands = ['x', '+', '-', '%', '/']

const firstNumber = document.querySelector('#text-one');
const secondNumber = document.querySelector('#text-two');
const buttons = document.querySelectorAll('.buttons');
const equalButton = document.querySelector('.equal');
const delButton = document.querySelector('#backspace');
let trigger = 0;

buttons.forEach(function(button){
    button.addEventListener('click', ()=>{
        const key = event.target.textContent;
        if(operands.includes(key)){
            b = '';
            operation = true;
            sign = key;
        }
        if(operation === false && key !== '=' && key !== 'DEL' && !operands.includes(key)){
            a += key;
            firstNumber.value = a;  
        }
        if(operation === true && !operands.includes(key) && key !== '=' && key !== 'DEL'){
            if(trigger !== 0){
                trigger = 0;
                b = '';
            }
            b += key;
            secondNumber.value = b;
        }
        if(key === '='){
            switch(sign){
                case '/':
                    if(b === '0'){
                        firstNumber.value =  'ERROR';
                        secondNumber.value = '';
                        operation = false;
                        b = '';
                        a = '';
                        return;
                    }
                    a = a / b;
                    break;
                case '+':
                    a = +(a) + +(b);
                    break;
                case 'x':
                    a = a * b;
                    break;
                case '-':
                    a = +(a) - +(b);
                    break;
                case '%':
                    a = a/100 * b; 
                    break;
            }
            firstNumber.value = a;
            secondNumber.value = '';
            trigger++;
        }
        if(key === 'AC'){
            firstNumber.value = '';
            secondNumber.value ='';
            clearAll();
        }
        if(key === 'DEL' ){
            if(b === ''){
                a = a.substring(0, a.length - 1);
                firstNumber.value = a;
                if(sign != null){
                    sign = '';
                    operation = false;
                }
            }else{
                b = b.substring(0, b.length -1);
                secondNumber.value = b;
            }
        }
    })
});
console.log('das')