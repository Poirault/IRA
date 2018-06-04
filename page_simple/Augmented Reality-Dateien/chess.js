

class Chess{
	constructor(){
		this.board = [];
	}
	



	/* Place the differents pieces on the board
	* 1 = tour
	* 2 = cavalier
	* 3 = fou
	* 4 = reine
	* 5 = roi
	* 10 = pion
	*/
	initiate () {
	    for(var i = 0 ; i < 64 ; i++){
	        if(i < 8){
	            if(i < 5){
	                this.board[i] = i + 1;
	            }
	            else{
	               this.board[i] = 8 - i;
	            }
	        }
	        else if(i > 54){
	            if(i > 59){
	               this.board[i] = 63 - i + 1 + 10;
	            }
	            else{
	               this.board[i] = i - 53 - 1 + 10;
	            }
	        }
	        else if(i < 16 && i >6){
	           this.board[i] = 10;
	        }
	        else if(i < 55 && i >46){
	           this.board[i] = 20;
	        }
	        else{
	           this.board[i] = 0;
	        }
	    }
	};

	/* check if a piece can go to a destination
	* 
	* 
	* from = the origin
	* to = the destination
	* 
	* 
	*/
	validePosition (from,to) {
	    if(this.board[from] < 11 && this.board[to] < 11 && this.board[to] > 0 ){
	        return(false);
	    }
	    else if(this.board[from] > 10 && this.board[to] > 10){
	        return(false);
	    }
	    switch (this.board[from]) {

	        //cas de la tour
	        case 1 || 11:
	            if( Math.trunc(from/8) == Math.trunc(to/8) ){
	                if( from < to ){
	                    for(var i = from + 1; i < (to - from - 1) ; i++ ){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                else{
	                    for(var i = to + 1; i < (from - to - 1) ; i++ ){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                return(true);
	            }
	            else if( (Math.abs(from - to) % 8) == 0){
	                if(from < to){
	                    for(var i = from + 8 ; i < to ; i + 8){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                else{
	                    for(var i = to + 8 ; i < from ; i + 8){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                return(true);
	            }
	            else{
	                return(false);
	            }
	            break;

	        //cas du cavalier
	        case 2 || 12:
	            if(from % 8 > 1 && from % 8 < 6){
	                if(to == 6 + from || to == from - 6 || to == 10 + from || to == from - 10 || to == 15 + from || to == from - 15 || to == 17 + from || to == from - 17){
	                    return(true);
	                }
	            }
	            else if(from % 8 == 1){
	                if(to == from - 6 || to == 10 + from || to == 15 + from || to == from - 15 || to == 17 + from || to == from - 17){
	                    return(true);
	                }
	            }
	            else if(from % 8 == 6){
	                if(to == from + 6 || to == 10 - from || to == 15 + from || to == from - 15 || to == 17 + from || to == from - 17){
	                    return(true);
	                }
	            }
	            else if(from % 8 == 0){
	                if(to == from - 6 || to == 10 + from || to == from - 15 || to == 17 + from){
	                    return(true);
	                }
	            }
	            else if(from % 8 == 7){
	                if(to == from + 6 || to == 10 - from || to == 15 + from || to == from - 17){
	                    return(true);
	                }
	            }
	            else{
	                return(false);
	            }
	            break;

	        //cas du fou
	        case 3 || 13:
	            if(from < to){
	                if(Math.abs( (from % 8) - (to % 8) ) - ( (to - from) % 8 ) == 0){
	                    if((from % 8) - (to % 8) < 0){
	                        for(var i = from + 9 ; i < to % 8 ; i+9){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    else{
	                        for(var i = from + 7 ; i < to % 8 ; i+7){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    return(true);
	                }
	                else{
	                    return(false);
	                }
	            }
	            else{
	                if(Math.abs( (from % 8) - (to % 8) ) - ( (from - to) % 8 ) == 0){
	                    if((to % 8) - (from % 8) < 0){
	                        for(var i = to + 9 ; i < from % 8 ; i+9){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    else{
	                        for(var i = to + 7 ; i < from % 8 ; i+7){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    return(true);
	                }
	                else{
	                    return(false);
	                }
	            }
	            break;

	        //cas de la reine
	        case 4 || 14:
	            if( Math.trunc(from/8) == Math.trunc(to/8) ){
	                if( from < to ){
	                    for(var i = from + 1; i < (to - from - 1) ; i++ ){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                else{
	                    for(var i = to + 1; i < (from - to - 1) ; i++ ){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                return(true);
	            }
	            else if( (Math.abs(from - to) % 8) == 0){
	                if(from < to){
	                    for(var i = from + 8 ; i < to ; i + 8){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                else{
	                    for(var i = to + 8 ; i < from ; i + 8){
	                        if(this.board[i] != 0){
	                            return(false);
	                        }
	                    }
	                }
	                return(true);
	            }
	            if(from < to){
	                if(Math.abs( (from % 8) - (to % 8) ) - ( (to - from) % 8 ) == 0){
	                    if((from % 8) - (to % 8) < 0){
	                        for(var i = from + 9 ; i < to % 8 ; i+9){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    else{
	                        for(var i = from + 7 ; i < to % 8 ; i+7){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    return(true);
	                }
	                else{
	                    return(false);
	                }
	            }
	            else if(from > to){
	                if(Math.abs( (from % 8) - (to % 8) ) - ( (from - to) % 8 ) == 0){
	                    if((to % 8) - (from % 8) < 0){
	                        for(var i = to + 9 ; i < from % 8 ; i+9){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    else{
	                        for(var i = to + 7 ; i < from % 8 ; i+7){
	                            if(this.board[i] != 0){
	                                return(false);
	                            }
	                        }
	                    }
	                    return(true);
	                }
	            }
	            else{
	                return(false);
	            }
	            break;

	        //cas du roi
	        case 5 || 15:
	            if(this.board[from] == 5){
	                if( (this.board[to] == 0) && ((to == from - 8) || (to == from + 8) || (to == from + 7) || (to == from + 9) || (to == from - 7) || (to == from - 9) || (to == from + 1) || (to == from - 1)) ){
	                    return(true);
	                }
	                else if( (this.board[to] > 10) && ( (to == from - 8) || (to == from + 8) || (to == from + 7) || (to == from + 9) || (to == from - 7) || (to == from - 9) || (to == from + 1) || (to == from - 1) ) ){
	                    if( ((this.board[from] % 8 == 0) && (to == from + 7)) || ((this.board[from] % 8 == 7) && (to == from + 9)) || ((this.board[from] % 8 == 0) && (to == from - 1)) || ((this.board[from] % 8 == 7) && (to == from + 1)) ){
	                        return(false);
	                    }
	                    return(true); 
	                }
	                else{
	                    return(false);
	                }
	            }
	            else if(this.board[from] == 15){
	                if( (this.board[to] == 0) && ((from == to - 8) || (from == to + 8) || (from == to + 7) || (from == to + 9) || (from == to - 7) || (from == to - 9) || (from == to + 1) || (from == to - 1)) ){
	                    return(true);
	                }
	                else if( (this.board[to] < 11) && ((from == to - 8) || (from == to + 8) || (from == to + 7) || (from == to + 9) || (from == to - 7) || (from == to - 9) || (from == to + 1) || (from == to - 1)) ){
	                    if( (this.board[from] % 8 == 0) && ((to == from - 8) || (to == from + 8) || (to == from + 7) || (to == from + 9) || (to == from - 7) || (to == from - 9) || (to == from + 1) || (to == from - 1) ) ){
	                        return(false);
	                    }
	                    return(true); 
	                }
	                else{
	                    return(false);
	                }
	            }
	            break;

	        //cas du pion
	        case 10 || 20:
	            if(this.board[from] == 10){
	                if( (this.board[to] == 0) && (to == from + 8) ){
	                    return(true);
	                }
	                else if( (this.board[to] > 10) && ((to == from + 7) || (to == from + 9))){
	                    if( ((this.board[from] % 8 == 0) && (to == from + 7)) || ((this.board[from] % 8 == 7) && (to == from + 9)) ){
	                        return(false);
	                    }
	                    return(true); 
	                }
	                else{
	                    return(false);
	                }
	            }
	            else if(this.board[from] == 20){
	                if( (this.board[to] == 0) && (from == to + 8) ){
	                    return(true);
	                }
	                else if( (this.board[to] < 11 &&this.board[to] > 0) && ((to == from + 7) || (to == from + 9))){
	                    if( ((this.board[from] % 8 == 0) && (from == to + 7)) || ((this.board[from] % 8 == 7) && (from == to + 9)) ){
	                        return(false);
	                    }
	                    return(true); 
	                }
	                else{
	                    return(false);
	                }
	            }
	            
	            break;
	        default:
	            false;
	    }
	}

	move (from, to) {
	    var test = this.validePosition(from,to);
	    if(test){
	       this.board[to] = this.board[from];
	       this.board[from] = 0;
	       return( [to % 8, ((to - (to % 8)) / 8)]  )
	    }
	    else{
	    	console.log("Deplacement impossible");
	    	return( [-1,-1] )
	    }
	}
}