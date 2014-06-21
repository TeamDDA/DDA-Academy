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

function Player(layer ,x, y) {
    this.layer = layer;
    this.x = x;
    this.y = y;
    this.w = player_SIZE.w;
    this.h = player_SIZE.h;
    this.color = player_COLOR;
    var self = this;
    this.drawPlayer = function () {
        drawRect(self.layer ,self.x, self.y, this.w, this.h, this.color);
        return self;
    };
};