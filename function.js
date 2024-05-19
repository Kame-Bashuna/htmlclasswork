function add(num1,num2){
    const sum=num1+num2
    console.log({console:sum});
    return{'return': sum};
}
console.log(add(2,3))
add(4,5)

//function Expression
const subtraction=function(num1,num2){
    console.log(num1-num2);
}
subtraction(20,10);

//Arrow function
const multiply=(num1,num2)=>console.log(num1*num2)
multiply(5,6);

//IIEPS
(function(){
    console.log('hello');
})();

//Hoisting
console.log((greet));

var greet='Hello There'

