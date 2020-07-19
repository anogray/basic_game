// // Methods
let another = {
    name: "Steve"
}
let obj = {
    name: "Jasbir",
    fn:function (ref) {
        console.log(ref.name)
    }
}
// functions
let a,b;
function myfn() {
    console.log(this);
    a=this;
}
function myf() {
    console.log(this);
    b=this;
}
myfn();
myf();
if(a==b)
console.log("yes")
// this is defined on  runtime
// fn call => this global object 
// myfn(this);
// let bFn = myfn.bind(another);
// bFn();
// bFn = myfn.bind(obj);
// bFn();

// object /Method call=> this is the object that calls that fn
obj.fn(another);
// console.log(global);
// this => according to my constraints

