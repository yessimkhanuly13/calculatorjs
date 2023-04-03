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
let trigger = 0;

buttons.forEach(function(button){
    button.addEventListener('click', ()=>{
        const key = event.target.textContent;

        if(operands.includes(key)){
            b = '';
            operation = true;
            sign = key;
        }
        if(operation === false && key !== '=' && key !== '->' && !operands.includes(key)){
            a += key;
            firstNumber.value = a;  
        }
        if(operation === true && !operands.includes(key) && key !== '=' && key !== '->'){
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
        if(key === '->'){
            if(b === ''){
                let length = a.length;
                if(!sign){
                    sign = '';
                    length += 1;
                }
                a = a.substring(0, length-1);
                firstNumber.value = a;
            }else{
                b = b.substring(0, b.length-1);
                secondNumber.value = b;
            }
        }

    })
});
