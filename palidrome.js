function reverse(string){
let bag="";
for(let i=string.length-1;i<=0;i--){
bag=bag+string[i]
}
return(bag);
}
let reversed=reverse("naman");
if(string==reversed){
console.log("palindrome");
}
else{
console.log("not a palindrome")
}