/*
This program is built to fetch an address by giving a part of it in the command line. The more details given increases the accuracy.

$ node app.js -a 'Plot No 103, 4th Cross'
-a : alias for address as defined in the const argv

*/

//Request is designed to be the simplest way possible to make http calls.
const request=require('request');

const yargs=require('yargs'); //To parse command line arguments

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
// OUTPUT
/*
$ node app.js -help
Options:
  -a, --address  Address to fetch weather for                [string] [required]
  --help, -h     Show help                                             [boolean]

$ node app.js -h
  Options:
    -a, --address  Address to fetch weather for                [string] [required]
    --help, -h     Show help                                             [boolean]

*/

// Get URI encoded address
var encodedAddress=encodeURIComponent(argv.address);

//https://www.npmjs.com/package/request
// CHeck above URL for arguments
//request('http://www.google.com', function (error, response, body) {
// Return the request from the URL as JSON
//request({url:'https://maps.googleapis.com/maps/api/geocode/json?address=11%20Tansi%20nagar%20velachery',json:true},(error,response,body)=>{
// Change it to append the encoded address
request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,json:true},(error,response,body)=>{

// CHeck the JSON OUTPUT and traverse to get the details
console.log(`Address: ${body.results[0].formatted_address}`);
// Latitude and Longitude
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);


//Ouput
/*  IF you give less details in the address, it will get an approx addresss

$ node app.js -a 'Plot No 103, 4th Cross'
{ _: [],
  help: false,
  h: false,
  a: 'Plot No 103, 4th Cross',
  address: 'Plot No 103, 4th Cross',
  '$0': 'app.js' }
Address: 103, Plot No.4, 4th Cross Rd, S R Layout, Murgesh Pallya, Bengaluru, Karnataka 560017, India
Latitude: 12.9547328
Longitude: 77.64999689999999

##############################
if you give more details to the address, then it tried to fetch accurately
$ node app.js -a 'Plot No 103, 4th Cross Vijayanagar, velachery'
{ _: [],
  help: false,
  h: false,
  a: 'Plot No 103, 4th Cross Vijayanagar, velachery',
  address: 'Plot No 103, 4th Cross Vijayanagar, velachery',
  '$0': 'app.js' }
Address: 4th Cross St, Vijaya Nagar, Velachery, Chennai, Tamil Nadu 600042, India
Latitude: 12.9720003
Longitude: 80.21810099999999

#############################################
$ node app.js -a 'chennai velachery tansi nagar f1'
{ _: [],
  help: false,
  h: false,
  a: 'chennai velachery tansi nagar f1',
  address: 'chennai velachery tansi nagar f1',
  '$0': 'app.js' }
Address: 4th Street, Dhandeeswaram, Velachery, Chennai, Tamil Nadu 600042, India
Latitude: 12.9781498
Longitude: 80.2238878


*/

});
