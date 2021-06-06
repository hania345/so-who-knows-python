/*
The case of the Python Syndicate
Stage 3


Officer: 1680135
CaseNum: 301-2-10643952-1680135

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Lina lovelace has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Lina lovelace object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_image;
var countess_hamilton_image;
var cecil_karpinski_image;
var bones_karpinski_image;
var lina_lovelace_image;
var robbie_kray_image;

var lina_lovelace_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	lina_lovelace_obj = {
		x: 408,
		y: 309,
		image: lina_lovelace_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_obj.image, lina_lovelace_obj.x, lina_lovelace_obj.y);

	image(rocky_kray_image, lina_lovelace_obj.x-293, lina_lovelace_obj.y-269);
	
	image(countess_hamilton_image, lina_lovelace_obj.x, lina_lovelace_obj.y-269);
	
	image(cecil_karpinski_image, lina_lovelace_obj.x+293, lina_lovelace_obj.y-269);
	
	image(bones_karpinski_image, lina_lovelace_obj.x-293, lina_lovelace_obj.y);
	
	image(robbie_kray_image, lina_lovelace_obj.x+293, lina_lovelace_obj.y);

}