module.exports = function(inputDay){
  var notWeekend = !inputDay.startsWith("S");
  return notWeekend;
};
