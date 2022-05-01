var a = 100;
{
    let a = 10;
    // block scoped
}
console.log(a);

let x= 10;
{
    let x= 100;
}
// This is not shadowing 
console.log(x);

// var is functional scoped so you can't access it outside it
var a =100;
function fun(){
    var a =500;
}
fun();
console.log(a);