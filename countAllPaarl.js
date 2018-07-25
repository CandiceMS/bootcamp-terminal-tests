module.exports = function(regNumbers){
  var regSplit = regNumbers.split(", ");
  var allPaarl = [];
  for (var i = 0; i < regSplit.length; i++){
    if (regSplit[i].startsWith("CJ")){
    allPaarl.push(regSplit[i]);
    }
  }
  return allPaarl.length;
}
