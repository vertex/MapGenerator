var gen = require('./generate');
var map = gen.generator.init(
	process.argv[2] || 0, 
	process.argv[3] || 20, 
	process.argv[4] || 0, 
	process.argv[5] || 40
);
var mapString = map.printMap();
console.log(mapString);
