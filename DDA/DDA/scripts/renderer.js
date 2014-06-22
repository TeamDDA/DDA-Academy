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
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

};

function renderLevel(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    for (var i = 0; i < LEVEL_ROWS; i++) {
        for (var j = 0; j < LEVEL_COLS; j++) {
            if (LEVEL[i][j] === 1) {
                drawRect(context, j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, 'black');
            } else if (LEVEL[i][j] === 2) {
                LEVEL[i][j] = new GameCharacter(context, j * TILE_SIZE, i * TILE_SIZE, 'green', CHARACTERISTIC.Programming).drawPlayer();
            } else {
                drawRect(context, j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE, 'white');
            }
        }
    }
}

function renderCell(context, row, col) {
    drawRect(context, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, 'white');
}