module.exports = function(list, threshold){
  var itemsOverThreshold = [];
  for (var i = 0; i < list.length; i++){
    var indexList = list[i];
	   if (indexList.qty > threshold) {
       itemsOverThreshold.push(indexList);
     };
   };
  return itemsOverThreshold;
};
