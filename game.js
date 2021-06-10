const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var space =        [30, 88, 146, 204, 262, 320, 378, 436, 494];
var space_pieceX = [33, 91, 149, 207, 265, 323, 381, 439, 497];
var space_pieceY = [33, 91, 149, 207, 265, 323, 381, 439, 497];
var moveX = [999, 999, 999, 999, 999, 999, 999, 999];
var moveY = [999, 999, 999, 999, 999, 999, 999, 999];
var firstMoveWhite = [true, true, true, true, true, true, true, true];
var firstMovBlack = [true, true, true, true, true, true, true, true];
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
const board = new Image();
var whitePawns = [0,1,2,3,4,5,6,7];
var blackPawns = [0,1,2,3,4,5,6,7];
board.src = "board.png";
const blackPawn = new Image();
blackPawn.src = "piece/blackPawn.png";

const whitePawn = new Image();
whitePawn.src = "piece/whitePawn.png";


const blackRook = new Image();
blackRook.src = "piece/blackRook.png";

const whiteRook = new Image();
whiteRook.src = "piece/whiteRook.png";

const gray = new Image();
gray.src = "move/gray.png";
let movX= -100;
let movY= -100;
let box = 58;
let blackRook1 ={
	x: -25+box,
	y: -25+box*6
};

let whiteRook1 ={
	x: -25+box*8,
	y: -25+box*8
};
for (let i=0; i<8;i++){
whitePawns[i] ={
	x: -25+box*(i+1),
	y: -25+box*7 
}
blackPawns[i] ={
	x: -25+box*(i+1),
	y: -25+box*2 
}
}


function drawGame(){
	ctx.drawImage(board, 0, 0);
	ctx.drawImage(blackRook, blackRook1.x, blackRook1.y);
	ctx.drawImage(whiteRook, whiteRook1.x, whiteRook1.y);
	for (let i=0; i<8;i++){
		ctx.drawImage(whitePawn, whitePawns[i].x, whitePawns[i].y);
		ctx.drawImage(blackPawn, blackPawns[i].x, blackPawns[i].y);
	}
	ctx.drawImage(gray, movX-5, movY-7);
}
let game = setInterval(drawGame, 100);
piecePositionX = [ whitePawns[0].x, whitePawns[1].x, whitePawns[2].x, whitePawns[3].x, whitePawns[4].x, whitePawns[5].x, whitePawns[6].x, whitePawns[7].x, whiteRook1.x, blackRook1.x, blackPawns[0].x, blackPawns[1].x, blackPawns[2].x, blackPawns[3].x, blackPawns[4].x, blackPawns[5].x, blackPawns[6].x, blackPawns[7].x];
piecePositionY = [ whitePawns[0].y, whitePawns[1].y, whitePawns[2].y, whitePawns[3].y, whitePawns[4].y, whitePawns[5].y, whitePawns[6].y, whitePawns[7].y, whiteRook1.y, blackRook1.y, blackPawns[0].y, blackPawns[1].y, blackPawns[2].y, blackPawns[3].y, blackPawns[4].y, blackPawns[5].y, blackPawns[6].y, blackPawns[7].y];
savedTurnsX = [9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999];
savedTurnsY = [9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999];
canvas.onclick= () =>{
	let localCheckX = 0;
	let localCheckY = 0;
	coords = canvas.relMouseCoords(event);
	canvasX = coords.x;
	canvasY = coords.y;
	for(let i=0; i<19;i++){
		if(canvasX< space[i]){
			localCheckX = space_pieceX[i-1];
			console.log('localCheckX');
			console.log(localCheckX);
			
			break;
		}
	}
	for(let i=0; i<19;i++){
		if(canvasY< space[i]){
			localCheckY = space_pieceY[i-1];
			console.log('localCheckY');
			console.log(localCheckY);
			break;
		}
	}
	for(let i=0; i<19;i++){
		if ((localCheckX == piecePositionX[i])&&(localCheckY == piecePositionY[i])){	
			movX = localCheckX;
			movY = localCheckY;
			if(i<8){
					let m =0;
					if (firstMoveWhite == true){m=3;}
					else{m=2}
					for(let n=1; n<m;n++){
						let checkTurn = true;
						for(let j=i+1; j<19; j++){
							console.log(whitePawns[i].x+box);
								console.log(piecePositionX[j]);
								console.log(whitePawns[i].y);
								console.log(piecePositionY[j]);								
								console.log(whitePawns[i]);
							if(((whitePawns[i].x)==(piecePositionX[j]))&&((whitePawns[i].y-box) ==(piecePositionY[j]))){
								checkTurn = false;
								}
						
						}
						console.log(checkTurn);
					}
				}
			}

		}
	

canvas.ondblclick= () =>{
	movX = -100,
	movY = -100
}	
console.log(localCheckX);
console.log(canvasX);
}