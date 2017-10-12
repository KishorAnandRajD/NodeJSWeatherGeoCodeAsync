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
  console.log(JSON.stringify(body,undefined,2));// 2- indendation

  // output of response argument
    console.log(JSON.stringify(response,undefined,2));// 2- indendation
});

/*  OUTPUT
>node app.js
node app.js
{
 "results": [
   {
     "address_components": [
       {
         "long_name": "11",
         "short_name": "11",
         "types": [
           "street_number"
         ]
       },
       {
         "long_name": "7th Street",
         "short_name": "7th Street",
         "types": [
           "route"
         ]
       },
       {
         "long_name": "Tansi Nagar",
         "short_name": "Tansi Nagar",
         "types": [
           "political",
           "sublocality",
           "sublocality_level_2"
         ]
       },
       {
         "long_name": "Velachery",
         "short_name": "Velachery",
         "types": [
           "political",
           "sublocality",
           "sublocality_level_1"
         ]
       },
       {
         "long_name": "Chennai",
         "short_name": "Chennai",
         "types": [
           "locality",
           "political"
         ]
       },
       {
         "long_name": "Chennai",
         "short_name": "Chennai",
         "types": [
           "administrative_area_level_2",
           "political"
         ]
       },
       {
         "long_name": "Tamil Nadu",
         "short_name": "TN",
         "types": [
           "administrative_area_level_1",
           "political"
         ]
       },
       {
         "long_name": "India",
         "short_name": "IN",
         "types": [
           "country",
           "political"
         ]
       },
       {
         "long_name": "600042",
         "short_name": "600042",
         "types": [
           "postal_code"
         ]
       }
     ],
     "formatted_address": "11, 7th Street, Tansi Nagar, Velachery, Chennai, Tamil Nadu 600042, India",
     "geometry": {
       "location": {
         "lat": 12.9791233,
         "lng": 80.2258999
       },
       "location_type": "ROOFTOP",
       "viewport": {
         "northeast": {
           "lat": 12.9804722802915,
           "lng": 80.22724888029151
         },
         "southwest": {
           "lat": 12.9777743197085,
           "lng": 80.2245509197085
         }
       }
     },
     "place_id": "ChIJl4E3o4RdUjoRH9W3xpUB4Fs",
     "types": [
       "street_address"
     ]
   }
 ],
 "status": "OK"
}

"headers": {
   "content-type": "application/json; charset=UTF-8",
   "date": "Wed, 06 Sep 2017 14:21:41 GMT",
   "expires": "Thu, 07 Sep 2017 14:21:41 GMT",
   "cache-control": "public, max-age=86400",
   "access-control-allow-origin": "*",
   "server": "mafe",
   "x-xss-protection": "1; mode=block",
   "x-frame-options": "SAMEORIGIN",
   "alt-svc": "quic=\":443\"; ma=2592000; v=\"39,38,37,35\"",
   "accept-ranges": "none",
   "vary": "Accept-Language,Accept-Encoding",
   "connection": "close"
 },
 "request": {
   "uri": {
     "protocol": "https:",
     "slashes": true,
     "auth": null,
     "host": "maps.googleapis.com",
     "port": 443,
     "hostname": "maps.googleapis.com",
     "hash": null,
     "search": "?address=11%20Tansi%20nagar%20velachery",
     "query": "address=11%20Tansi%20nagar%20velachery",
     "pathname": "/maps/api/geocode/json",
     "path": "/maps/api/geocode/json?address=11%20Tansi%20nagar%20velachery",
     "href": "https://maps.googleapis.com/maps/api/geocode/json?address=11%20Tansi%20nagar%20velachery"
   },
   "method": "GET",
   "headers": {
     "accept": "application/json"
   }
 }
}


*/
