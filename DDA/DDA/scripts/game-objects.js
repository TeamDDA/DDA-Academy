function Layer(parent, options){
    this.width = options.width;
    this.height = options.height;
    this.id = options.id || 'unknown';
    this.parent = parent;
    var self = this;
    this.init = function () {
        var canvas = document.createElement('canvas');
        canvas.width = self.width;
        canvas.height = self.height;
        canvas.id = self.id;
        var parent = document.querySelector(self.parent);
        parent.appendChild(canvas);
        return canvas.getContext('2d');
    }
}

function GameCharacter(layer ,x, y, color, characteristic) {
    this.layer = layer;
    this.x = x;
    this.y = y;
    this.w = player_SIZE.w;
    this.h = player_SIZE.h;
    this.characteristic = characteristic;
    this.color = color;
    var self = this;
    this.drawPlayer = function () {
        drawRect(self.layer ,self.x, self.y, this.w, this.h, this.color);
        return self;
    };
    this.interactWithGameObject = function () {

        var baseCol = Math.floor(self.x/TILE_SIZE);
        var baseRow = Math.floor(self.y/TILE_SIZE);

        // Check top
        if(LEVEL[baseRow - 1][baseCol] instanceof GameCharacter){
            console.log('GameObject on top');
            console.log(LEVEL[baseRow - 1][baseCol].characteristic)
            showQuestion(LEVEL[baseRow - 1][baseCol]);
        }
        // Check topRight
        if(LEVEL[baseRow - 1][baseCol + 1] instanceof GameCharacter){
            console.log('GameObject on topRight');
        }
        // Check Right
        if(LEVEL[baseRow][baseCol + 1] instanceof GameCharacter){
            console.log('GameObject on Right');
        }
        // Check rightDown
        if(LEVEL[baseRow + 1][baseCol + 1] instanceof GameCharacter){
            console.log('GameObject on downRight');
        }
        // Check Down
        if(LEVEL[baseRow + 1][baseCol] instanceof GameCharacter){
            console.log('GameObject on Down');
        }
        // Check DownLeft
        if(LEVEL[baseRow + 1][baseCol - 1] instanceof GameCharacter){
            console.log('GameObject on DownLeft');
        }
        // Check Left
        if(LEVEL[baseRow][baseCol - 1] instanceof GameCharacter){
            console.log('GameObject on Left');
        }
        // Check topLeft
        if(LEVEL[baseRow - 1][baseCol - 1] instanceof GameCharacter){
            console.log('GameObject on topLeft');
        }
    }
};