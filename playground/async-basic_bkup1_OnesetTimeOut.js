// The setTimeout() works as an async,non-blocking and gets executed after 2 seconds and after the first and last console.log are printed

console.log('Starting async-basics app');

// Arguments:(function(), time in milliseconds)
setTimeout(()=>{
  console.log('Inside of setTimeout callback');
},2000); // 2 seconds


console.log('Finishing async-basics app');
/*  Output
>node playground/async-basic.js
Starting async-basics app
Finishing async-basics app
Inside of setTimeout callback

*/
