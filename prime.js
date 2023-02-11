let number = 5;
let count =0;

for(let i=0;i<=5;i++){
   if(number%i===0){
	count++;}
}
if(count==2){
	console.log("Prime Number");
else{
	console.log("Not a Prime Number");