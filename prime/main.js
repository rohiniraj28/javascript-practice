function Prime(n) {
    for(let i=0; i<=n; i++){
        if(n%2===0 || n%3===0){
            break;
        }
        return n>1;
        if(n<=3 && n!=0){
            return n;
        }
    }

}
function Primeprint(n){
    for(let i=1; i<=n; i++){
        if(Prime(i)){
            console.log(i);
        }
        
    }
}
Primeprint(100);



















/*let n=11;
let i=2;
function F(n){
while(i<n/2){
//for(let i=2; i<n/2; i++){
    if(n%i==0){
        break;
    }
    i++;
}
}
if(i>n/2){
    console.log("Prime Number"+" "+n);
}
else {
    console.log("Not Prime Number");
}
*/