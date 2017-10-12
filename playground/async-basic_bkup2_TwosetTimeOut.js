// The setTimeout() works as an async,non-blocking and gets executed after 2 seconds and after the first and last console.log are printed

console.log('Starting async-basics app');

// Arguments:(function(), time in milliseconds)
setTimeout(()=>{
  console.log('Inside of setTimeout callback');
},2000); // 2 seconds

setTimeout(()=>{
  console.log('Inside of setTimeout 2 callback');
},0);

console.log('Finishing async-basics app');
/*  Output - Eventhough the second setTimeout is 0 milliseconds, it gets executed only after the last console log as it goes to the callback queue and it has to wait till the call stack is not empty. Check the ASynchronous example.jsp file
>node playground/async-basic.js
Starting async-basics app
Finishing async-basics app
Inside of setTimeout 2 callback
Inside of setTimeout callback
*/
