module.exports = function(yearInput){
  var year = new Date();
  var yearOnly = year.getFullYear();
  var yearsOutput = yearOnly-yearInput;
  return yearsOutput;
};
