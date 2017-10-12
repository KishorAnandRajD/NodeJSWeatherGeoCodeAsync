const request=require('request');

var geocodeAddress=(address,callback)=>{


  // Get URI encoded address
  var encodedAddress=encodeURIComponent(address);

  //https://www.npmjs.com/package/request
  // CHeck above URL for arguments
  //request('http://www.google.com', function (error, response, body) {
  // Return the request from the URL as JSON
  //request({url:'https://maps.googleapis.com/maps/api/geocode/json?address=11%20Tansi%20nagar%20velachery',json:true},(error,response,body)=>{
  // Change it to append the encoded address
  request
  (
    {url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,json:true},(error,response,body)=>
        {

            // If error exists
              if(error){// Don't know what the error is. To test this add junk to URL
                callback('Unable to connect to google servers');
                //console.log();

              }
              else if(body.status==='ZERO_RESULTS'){  // Check if the status returns zero results
                /*  Just try the below link in the URL and you will get status
                https://maps.googleapis.com/maps/api/geocode/json?address=0000000
                    {
                   results: [ ],
                   status: "ZERO_RESULTS" */
            //  console.log('Unable to find the address. Please provide correct details');
              callback('Unable to find the address. Please provide correct details');
            }else if(body.status==='OK'){
              callback(undefined,{
                address: body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
              });

               // When everything is right
              // CHeck the JSON OUTPUT and traverse to get the details
              // console.log(`Address: ${body.results[0].formatted_address}`);
              // // Latitude and Longitude
              // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
              // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

              }

          }
   );
 }
module.exports.geocodeAddress=geocodeAddress;
