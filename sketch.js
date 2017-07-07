var triggered = false;
var now, end;
var counter = 0;
var ani;


var vid = [
  "material/water.mp4",
  "material/marco.mp4",
  "material/aperol.mp4",
  "material/pigeon.mp4"
];

var gif = [
  "material/water.gif",
  "material/marco.gif",
  "material/aperol.gif",
  "material/pigeon.gif"
];

function setup() {
  noCanvas();
  var bg = select('#background');
  ani = select('#forground');
  //bg.src = vid[2];

}

function draw() {

  now = millis();

  if(triggered == true && end-now <= 0){
    ani.attribute('src', '');
    triggered = false;
  }

}

function mousePressed(){

  if (triggered == false){
    ani.attribute('src', gif[counter]);
  }

}


function mouseReleased(){

  releaseGif(10000);

}

function releaseGif(milliseconds){
  if (triggered == false){
    end = millis() + milliseconds;
    triggered = true;
  }
}
