module.exports = function(salesData){
  var map = {};
  for (var i = 0; i < salesData.length; i++){
  	var dataList = salesData[i];
    if (map[dataList.department] === undefined){
    map[dataList.department] = 0;
    }
    map[dataList.department] += dataList.sales;
  }
  var maxSales = 0;
  var deptName = '';

  for(var department in map){
  	if (map[department] > maxSales){
    maxSales = map[department];
    deptName = department;
    }
  }
  return deptName;
}
