$(document).ready(function () {

    var mapLayer = new Layer('#root', {
        width: TILE_SIZE * LEVEL_COLS,
        height: TILE_SIZE * LEVEL_ROWS,
        id: 'map'
    }).init();

    renderLevel(mapLayer);

    var playerXPos = PLAYER_ROW * TILE_SIZE;
    var playerYPos = PLAYER_COL * TILE_SIZE;
    var hero = new Player(mapLayer, playerXPos, playerYPos).drawPlayer();

    window.requestAnimationFrame = (function (callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    }());

    function updateGame() {
        PLAYER_X_SPEED = 0;
        PLAYER_Y_SPEED = 0;

        if (RIGHT_PRESSED) {
            PLAYER_X_SPEED = MOVEMENT_SPEED;
        }
        if (LEFT_PRESSED) {
            PLAYER_X_SPEED = -MOVEMENT_SPEED;
        }
        if (UP_PRESSED) {
            PLAYER_Y_SPEED = -MOVEMENT_SPEED;
        }
        if (DOWN_PRESSED) {
            PLAYER_Y_SPEED = MOVEMENT_SPEED;
        }


//        if(RIGHT_PRESSED){
//            PLAYER_X_SPEED = MOVEMENT_SPEED;
//        } else {
//            if(LEFT_PRESSED){
//                PLAYER_X_SPEED = -MOVEMENT_SPEED;
//            } else {
//                if(UP_PRESSED){
//                    PLAYER_Y_SPEED = -MOVEMENT_SPEED;
//                } else {
//                    if(DOWN_PRESSED){
//                        PLAYER_Y_SPEED = MOVEMENT_SPEED;
//                    }
//                }
//            }
//        }
        hero.x += PLAYER_X_SPEED;
        hero.y += PLAYER_Y_SPEED;


        renderLevel(mapLayer);
        hero.drawPlayer();

        requestAnimationFrame(function () {
            updateGame();
        });
    }

    updateGame();

});