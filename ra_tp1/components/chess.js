arcs_module(
    function (ARCS) {
        var Chess;

        Chess = ARCS.Component.create( 
            function() {
                var board[64];

                var self=this;

                /* Place the differents pieces on the board
                *
                *
                *
                */
                this.initiate = function () {
                    for(var i = 1 ; i < 65 ; i++){
                        if(i < 9){
                            if(i < 6){
                                board[i] = i;
                            }
                            else{
                                board[i] = 8 - i + 1;
                            }
                        }
                        else if(i > 56){
                            if(i > 59){
                                board[i] = 64 - i + 1;
                            }
                            else{
                                board[i] = 59 - i + 1;
                            }
                        }
                        else if( (i < 17 && i >8) || (i < 57 && i >48) ){
                            board[i] = 10;
                        }
                        else{
                            board[i] = 0;
                        }
                    }
                };

                this.move = function (from,to) {

                };
            },
            ['start','stop'],
            'onAnimationFrame'
        );

        return {Chess: Chess};
    }
);