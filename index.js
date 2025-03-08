exports.showMsg = function() {
  console.log("This is a message from the demo package");
}

exports.validatePresence = function(param){
  throw new Error(`${param} is mandatory`);
}