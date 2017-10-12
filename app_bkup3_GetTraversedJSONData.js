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
//  console.log(JSON.stringify(body,undefined,2));// 2- indendation

// CHeck the JSON OUTPUT and traverse to get the details
console.log(`Address: ${body.results[0].formatted_address}`);
/* OUTPUT
>node app.js
Address: 11, 7th Street, Tansi Nagar, Velachery, Chennai, Tamil Nadu 600042, India
*/

// Latitude and Longitude
console.log(`Address: ${body.results[0].geometry.location.lat}`);
//Address: 12.9791233
console.log(`Address: ${body.results[0].geometry.location.lng}`);
//Address: 80.2258999


});
