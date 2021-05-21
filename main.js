var canvas=new fabric.Canvas('Mycanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
 var player_object="";
 var block_image_object="";

function player_update(){
    fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object)
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftkey==true && keypressed=='80'){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }
    if(e.shiftkey==true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

if(keypressed=='38'){
    up();
    console.log("up");
}

if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='39'){
    right();
    console.log("right");
}

if(keypressed=='70'){
    new_image('spiderman.png');
    console.log("f");
}

if(keypressed=='82'){
    new_image('ironman_right_hand.png');
    console.log("r");
}

if(keypressed=='72'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}

if(keypressed=='66'){
    new_image('hulkd_body.png');
    console.log("b");
}

if(keypressed=='76'){
    new_image('ironman_legs.png');
    console.log("l");
}
}


function up(){
    if(player_y>=0){
    player_y=player_y-block_image_height;
    console.log("block_image_height"+block_image_height);
    console.log("when up arrow key is pressed="+player_x+",y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down(){
    if(player_y<=500){
    player_y=player_y+block_image_height;
    console.log("block_image_height"+block_image_height);
    console.log("when down arrow key is pressed="+player_x+",y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}


function left(){
    if(player_x>=0){
    player_x=player_x-block_image_width;
    console.log("block_image_width"+block_image_width);
    console.log("when left arrow key is pressed="+player_x+",y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right(){
    if(player_x<=850){
    player_x=player_x+block_image_width;
    console.log("block_image_width"+block_image_width);
    console.log("when right arrow key is pressed="+player_x+",y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}





 
