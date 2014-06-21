$( document ).ready(function() {

    var mapLayer = new Layer('#root', {
        width: TILE_SIZE * LEVEL_COLS,
        height: TILE_SIZE * LEVEL_ROWS,
        id: 'map'
    }).init();

    renderLevel(mapLayer);

    var playerXPos = PLAYER_ROW * TILE_SIZE;
    var playerYPos = PLAYER_COL * TILE_SIZE;
    var hero = new Player(mapLayer, playerXPos, playerYPos).drawPlayer();




});