/*
This program is built to HANDLE ERROR when fetching an address by giving a part of it in the command line. The more details given increases the accuracy.
If the arguments are incorrect or API site not working, then error is to be handled

Also use callback
*/

//Request is designed to be the simplest way possible to make http calls.
const request=require('request');

const yargs=require('yargs'); //To parse command line arguments

const geocode=require('./geocode/geocode'); // custom js file Contains the method to get address

const argv=yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

console.log(argv);

// Call method from another javascript file.
// Use callback as well
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{

    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(JSON.stringify(results,undefined,2));
    }

});
