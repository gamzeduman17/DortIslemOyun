var number1=document.getElementById('Number1');
var number2=document.getElementById('Number2');
var operator=document.getElementById('Operator');
var result=document.getElementById('result');
var answer=document.getElementById('answer');
var True=0;
var False=0;
True=document.getElementById('True');
False=document.getElementById('False');


function randomNumber(max,min){
     var number=(Math.floor(Math.random() * (max-min)) + min);
    return number;
}
function newOperation(){
    var operations=["+","-","*","/"];
    operator.textContent=operations[randomNumber(0,4)];
    number1.textContent=randomNumber(0,100);
    number2.textContent=randomNumber(0,100);
    if(operator.textContent=="/")
    {
        while(true)
        {
            number2.textContent=randomNumber(0,100);
            if(number1.textContent%number2.textContent==0){
                break;
            }
        }
    }
}
window.onload=function(){
    newOperation();
}
answer.onclick=function(){
    var ans,n1,n2;
    n1=Number(number1.textContent);
    n2=Number(number2.textContent);
    switch(operator.textContent)
    {
        case "+":ans=n1+n2;break;
        case "-":ans=n1-n2;break;
        case "*":ans=n1*n2;break;
        case "/":ans=n1/n2;break;
        default: break;
    }
    if(result.value==ans)
    {
        True.textContent=Number(True.textContent)+1;
    }
    else
    {
        False.textContent=Number(False.textContent)+1;
    }
}
newOperation();