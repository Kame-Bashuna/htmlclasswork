let fruits=["Mango","Apple","Banana","Orange"]

let array= new Array(20,30,6,7)

console.log((fruits));
console.log((array));

fruits[1]=3;
console.log((fruits));
console.log('length',fruits.length);

//array method
let addLast = fruits.push("Kiwi");
console.log((fruits));

let addFirst = fruits.unshift("Pawpaw");
console.log((fruits));

let remove = fruits.pop();
console.log((fruits));

let removeFirst = fruits.shift();
console.log((fruits));

let items=[20,30,40,50,60]

let add = items.reduce((acc,curr) => acc+curr)
console.log((add));

let multiply = items.map(item  => item*2);
console.log((multiply));

let addEach=[]
items.forEach(item => {
    const add = item +2
    console.log((add))
    addEach.push(add)
});
console.log((addEach));

let multiplyAll = 1;
items.map(item => {
    multiplyAll *= item;
    return item 
})
console.log((multiplyAll));

//destructuring
let [num1,num2,num3, ...rest]= items;
console.log((num1));
console.log((num2));
console.log((num3));
console.log((rest));