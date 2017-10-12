// callback function with arguments 'id' and 'callback'
var getUser=(id, callback)=>{
  var user={
    id:id,
    name:'Vikram'
  }
  callback(user);
}

// call the function. In the callback function pass 'user' as argument
getUser(31,(userObj)=>{
  console.log(userObj);
});
