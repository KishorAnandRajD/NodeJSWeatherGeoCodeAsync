/*
This program is built to HANDLE ERROR when fetching an address by giving a part of it in the command line. The more details given increases the accuracy.
If the arguments are incorrect or API site not working, then error is to be handled

$ node app.js -a '00000000'
{ _: [],
  help: false,
  h: false,
  a: '00000000',
  address: '00000000',
  '$0': 'app.js' }
E:\Kishor\Udemy\NodeJS\NodeJSProjects\weather-app\app.js:53
console.log(`Address: ${body.results[0].formatted_address}`);
                                       ^

TypeError: Cannot read property 'formatted_address' of undefined
    at Request.request [as _callback] (E:\Kishor\Udemy\NodeJS\NodeJSProjects\weather-app\app.js:53:40)
    at Request.self.callback (E:\Kishor\Udemy\NodeJS\NodeJSProjects\weather-app\node_modules\request\request.js:1
87:22)
    at emitTwo (events.js:125:13)
    at Request.emit (events.js:213:7)
    at Request.<anonymous> (E:\Kishor\Udemy\NodeJS\NodeJSProjects\weather-app\node_modules\request\request.js:104
4:10)
    at emitOne (events.js:115:13)
    at Request.emit (events.js:210:7)
    at IncomingMessage.<anonymous> (E:\Kishor\Udemy\NodeJS\NodeJSProjects\weather-app\node_modules\request\reques
t.js:965:12)
    at emitNone (events.js:110:20)
    at IncomingMessage.emit (events.js:207:7)


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

  // If error exists
    if(error){// Don't know what the error is. To test this add junk to URL
      console.log('Unable to connect to google servers');

    }
    else if(body.status==='ZERO_RESULTS'){  // Check if the status returns zero results
      /*  Just try the below link in the URL and you will get status
      https://maps.googleapis.com/maps/api/geocode/json?address=0000000
          {
         results: [ ],
         status: "ZERO_RESULTS" */
    console.log('Unable to find the address. Please provide correct details');
  }else if(body.status==='OK'){ // When everything is right
    // CHeck the JSON OUTPUT and traverse to get the details
    console.log(`Address: ${body.results[0].formatted_address}`);
    // Latitude and Longitude
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

    }


    /*
    ################ INCORRECT URL WITH CORRECT ADDRESS INPUT #################
    $ node app.js -a 'Plot No 103 4th Cross Vijayanagar Chennai'
    { _: [],
      help: false,
      h: false,
      a: 'Plot No 103, 4th Cross 10th Main Road Velacheryr',
      address: 'Plot No 103, 4th Cross 10th Main Road Velacheryr',
      '$0': 'app.js' }
    Unable to connect to google servers

    ################ INVALID ADDRESS #################
    $ node app.js -a '00000000'
    { _: [],
      help: false,
      h: false,
      a: '00000000',
      address: '00000000',
      '$0': 'app.js' }
    Unable to find the address. Please provide correct details

    ################ VALID ADDRESS #################
    $ node app.js -a 'Plot No 103 4th Cross Vijayanagar Chennai'
    { _: [],
    help: false,
    h: false,
    a: 'Plot No 103 4th Cross Vijayanagar Chennai',
    address: 'Plot No 103 4th Cross Vijayanagar Chennai',
    '$0': 'app.js' }
    Address: 4th Cross St, Vijaya Nagar, Velachery, Chennai, Tamil Nadu 600042, India
    Latitude: 12.9720003
    Longitude: 80.21810099999999


    */

});
