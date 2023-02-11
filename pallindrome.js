
let str="madam"

 let box="";
   
   for(let i=str.length-1;i>=0;i--){
       box=box+str[i];
   } 
    if(box===str){
        console.log("Yes");
    }
    else{
        console.log("No");
  
}