/*
This program is built to fetch weather data using a callback using the inbuilt 'request' library
*/

//Request is designed to be the simplest way possible to make http calls.
const request=require('request');

//https://www.npmjs.com/package/request
// CHeck above URL for arguments
//request('http://www.google.com', function (error, response, body) {
// Return the request from the URL as JSON
request({url:'https://maps.googleapis.com/maps/api/geocode/json?address=11%20Tansi%20nagar%20velachery',json:true},(error,response,body)=>{
  console.log(body);
});

/*  OUTPUT
>node app.js
{ results:
  [ { address_components: [Array],
      formatted_address: '11, 7th Street, Tansi Nagar, Velachery, Chennai, Tamil Nadu 600042, India',
      geometry: [Object],
      place_id: 'ChIJl4E3o4RdUjoRH9W3xpUB4Fs',
      types: [Array] } ],
 status: 'OK' }


*/
