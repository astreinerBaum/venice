var triggered = false;
var now, end;
var counter = 0;
var videolength = 5 - 1;
var ani;
var vid;

var gif = [
    "material/water.gif",
    "material/bridge.gif",
    "material/marco.gif",
    "material/aperol.gif",
    "material/pigeon.gif"
];

function setup() {
  noCanvas();
  ani = select("#forground");
  vid = select("#" + counter.toString());
  vid.show();
}

function draw() {

  now = millis();

  if(triggered == true && end-now <= 0){
    var ani = select('#forground');
    ani.attribute('src', '');
    triggered = false;
  }

}


function trigger(){
  if (triggered == false){
    var ani = select('#forground');
    ani.attribute('src', gif[counter]);
    releaseGif(5000);
  }
}

function releaseGif(milliseconds){
  if (triggered == false){
    end = millis() + milliseconds;
    triggered = true;
  }

}

function left(){
  if (counter > 0){
    vid = select("#" + counter.toString());
    vid.hide();
    counter--;
    vid = select("#" + counter.toString());
    vid.show();
  }else{
    vid = select("#" + counter.toString());
    vid.hide();
    counter = videolength;
    vid = select("#" + counter.toString());
    vid.show();
  }
}

function right(){
  if (counter < videolength){
    vid = select("#" + counter.toString());
    vid.hide();
    counter++;
    vid = select("#" + counter.toString());
    vid.show();
  }else{
    vid = select("#" + counter.toString());
    vid.hide();
    counter = 0;
    vid = select("#" + counter.toString());
    vid.show();
  }

}
