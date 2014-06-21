// Map
var mapLayer_WIDTH = 800,
    mapLayer_HEIGHT = 500,
/* Player */
    player_SIZE = {
        w: 20,
        h: 20
    },
    player_COLOR = 'yellowgreen',
    LEVEL_COLS = 11,
    LEVEL_ROWS = 9,
    TILE_SIZE = 30,
    PLAYER_COL = 5, // Player Starting Col
    PLAYER_ROW = 4,// Player Starting Row
    LEVEL = [
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,1,1],
        [1,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1]
    ],
    LEFT_PRESSED = false,
    RIGHT_PRESSED = false,
    UP_PRESSED = false,
    DOWN_PRESSED = false,
    MOVEMENT_SPEED = 3,
    PLAYER_X_SPEED = 0,
    PLAYER_Y_SPEED = 0;
