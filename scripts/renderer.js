function drawCircle(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
};

function drawRect(ctx, x, y, w, h, color) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
};

function renderLevel(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    for (var i = 0; i < LEVEL_ROWS; i++) {
        for (var j = 0; j < LEVEL_COLS; j++) {
            if(LEVEL[i][j] == 1){
                drawRect(context, j*TILE_SIZE, i*TILE_SIZE, TILE_SIZE, TILE_SIZE, 'black');
            }
        }
    }
}