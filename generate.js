exports.generator = {
	range: undefined,
	shapes: [
		{
			label: 'square',
			texture: 'X',
			chance: .02
		},
		{
			label: 'square',
			texture: '0',
			chance: .04
		}
	],
	defaultPoint: {
		x: 0,
		y: 0,
		texture: '-',
		shape: undefined
	},
	map: undefined,
	init: function(minX,maxX,minY,maxY){
		this.range = [minX,maxX,minY,maxY];
		return this;
	},
	generate: function(){
		if(this.range === undefined || this.range[0] === undefined)
			throw new Error('Undefined range');
		if(this.map !== undefined)
			return this;
		var curX = this.range[0];
		var curY = this.range[2];
		var points = [];
		while(curX <= this.range[1]) {
			curY = 0;
			points[curX] = [];
			while(curY <= this.range[3]){
				if(points[curX][curY] == undefined){
					points[curX][curY] = {};
					points[curX][curY].x = curX;
					points[curX][curY].y = curY;
					for (var i = this.shapes.length - 1; i >= 0; i--) {
						var r = Math.random();
						if(r < this.shapes[i].chance){
							points[curX][curY].label = this.shapes[i].texture;
							i = -1;
						}
					}
					if(points[curX][curY].label === undefined)
						points[curX][curY].label = '-';	
				}
				curY++;
			}
			curX++;
		}
		this.map = points;
		return this;
	},
	printMap: function(){
		var map = this.generate().map;
		var curX = this.range[0];
		var curY = this.range[2];
		var string = '';
		while(curX <= this.range[1]) {
			curY = 0;
			while(curY <= this.range[3]){
				string += map[curX][curY].label;
				curY++;
			}
			string += "\n";
			curX++;
		}
		return string;
	}
};