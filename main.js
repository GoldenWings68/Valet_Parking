//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car_width = 70;
car_height = 125;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x = 5;
car_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		
		
}
function up()
{
    if (car_y >= 0) 
    {
        car_y = car_y - 10 ; 
        console.log("When up is pressed X = " + car_x + " | Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
    if (car_y <= 400) 
    {
        car_y = car_y + 10 ; 
        console.log("When down is pressed X = " + car_x + " | Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
    if (car_x >= 0) 
    {
        car_x = car_x - 10 ; 
        console.log("When left is pressed X = " + car_x + " | Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
    if (car_x <= 690) 
    {
        car_x = car_x + 10 ; 
        console.log("When right is pressed X = " + car_x + " | Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}