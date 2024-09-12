
let num=100;
let fib1=0;
let fib2=1;
let fib3=fib1+fib2;
while(num>0){
    console.log(fib1);
    fib1=fib2;
    fib2=fib3;
    fib3=fib1+fib2;
    num--;
}




























/*let n=10;
function fib(n) { 
    if(n<2) { 
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

if(n<=0){
    console.log('Enter the number')
}
else{
    for(let i=0; i<n; i++){
        console.log(fib(i))
    }
}
    */
