module.exports = function(regNumbers){
  var regSplit = regNumbers.split(",");
  var allFromTown = [];
  for (var i = 0; i < regSplit.length; i++){
    if (regSplit[i].startsWith("CL")) {
      allFromTown.push(regSplit[i]);
    }
  }
  return allFromTown.length;
}
