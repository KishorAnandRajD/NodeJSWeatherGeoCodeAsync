// callback function with arguments 'id' and 'callback'
var getUser=(id, callback)=>{
  console.log("First Entry");
  var user={
    id:id,
    name:'Vikram'
  }
  //callback(user);
  setTimeout(()=>{
    callback(user);
  },3000);
}



// call the function. In the callback function
getUser(31,(userObj)=>{
  console.log(userObj);
});
