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
