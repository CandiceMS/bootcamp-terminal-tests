module.exports = function(list){
  var itemsOver20 = [];
  for (var i = 0; i < list.length; i++){
    var indexList = list[i];
	   if (indexList.qty > 20) {
       itemsOver20.push(indexList);
     };
   };
  return itemsOver20;
};
