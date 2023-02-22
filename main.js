
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}
window.addEventListener("keydown", myKeydown);
function myKeydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed)
if(e.shiftKey && keyPressed == '80')
{
console.log("as telcas p e shift foram pressionadas juntas");
blockImageWidth = blockImageWidth + 10;
blockImageHeight = blockImageHeight + 10;
document.getElementById("currentWidth")
        .innerHTML = blockImageWidth;
document.getElementById("currentHeight")
        .innerHTML = blockImageHeight;
}
if(e.shiftKey && keyPressed == '77')
{
console.log("as telcas p e shift foram pressionadas juntas");
blockImageWidth = blockImageWidth - 10;
blockImageHeight = blockImageHeight - 10;
document.getElementById("currentWidth")
        .innerHTML = blockImageWidth;
document.getElementById("currentHeight")
        .innerHTML = blockImageHeight;
}
if(keyPressed == '38')
{
  up();
  console.log("up");
}
if(keyPressed == '40')
{
  down();
  console.log("down");
}
if(keyPressed == '37')
{
  left();
  console.log("left");
}
if(keyPressed == '39')
{
  right();
  console.log("right");
}
if(keyPressed == '87')
{
	newImage('wall.jpg');
	 console.log("w");
}
}
function up(){
playerY=playerY - blockImageHeight;
canvas.remove(playerObject);
playerUpdate();
}
function down(){
	playerY=playerY + blockImageHeight;
	canvas.remove(playerObject);
	playerUpdate();}

	function right(){
		playerX=playerX + blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();}

		function left(){
			playerX=playerX - blockImageHeight;
			canvas.remove(playerObject);
			playerUpdate();}