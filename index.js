// Closure
// Function along with it's lexical scope is called closure

function x(){
    var a=7;
   function y(){
        console.log(a);
    }
    a=100;
    return y;
}
x()();

function fun(){
    var a=7;
   return function sun(){
        console.log(a);
    }
    a=100;
}
fun()();