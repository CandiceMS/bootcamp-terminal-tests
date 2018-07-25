module.exports = function(reg, location){
  var regConfirm = reg.endsWith(location);
  return regConfirm;
};
