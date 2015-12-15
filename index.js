var fs = require('fs');

fs.readFile('./in.js', function(err, data) {
  if(err) throw err;
  var obj = JSON.parse(data);

  var output = transformData(obj);
  var txt = output.reduce(function(prev,cur,i,arr){
    return prev + '"' + cur + '",' + '\n';
  }, '');

  fs.writeFile('./out.js', txt, function(err) {
    if(err) throw err;
    console.log('Finished');
  });
});

var transformData = function(input) {
  var data = [];

  for(var i=0; i<input.length; i++) {
    var row = input[i];

    var feature = 'feature:' + row.featureType;

    var element = 'element:' + row.elementType;

    var stylers = row.stylers.map(function(styler) {
      var txt = [];
      for(var key in styler) {
        if(styler.hasOwnProperty(key)) {
          var obj = styler[key].toString().replace('#', '0x');
          txt.push(key + ':' + obj);
        }
      }
      return txt.join('|');
    });


    data.push(feature + '|' + element + '|' + stylers.join('|'));
  }

  return data;
};