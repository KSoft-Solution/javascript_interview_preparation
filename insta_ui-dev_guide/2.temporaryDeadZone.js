/*

the temporary dead zone is a behaviour in javascript that occurs when declaring a variable with the let and const keywords, but not with var.

in ecmascript 6, accessing a let or const variable before its declaration(within its scope)
causes a ReferenceError. the time span when that happens, between the creation of a variable's 
binding and its declaration , is called the twmporal dead zone.
*/


function fun(){
    console.log(counter1)
    console.log(counter2)

    var counter1 = 1;
    let counter2 = 2;
}

fun()