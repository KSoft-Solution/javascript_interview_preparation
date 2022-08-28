/*

In javascript , functions are first class objects.
first class functions means when functions in that language are treated like any other variable

for example , in such a language, a function can be passed as an argument to other functions,
can be returned by another function and can be assigned as a value to a variable.

for example,
*/

const handler = ()=> console.log('clicked')

document.addEventListener('click',handler)