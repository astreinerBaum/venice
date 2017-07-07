function setup() {

}

function draw() {

}

function mousePressed(){
  var animation = select('.forground');
  animation.show();
  console.log(animation.attribute("opacity"))
}

function mouseReleased(){
  var animation = select('.forground');
  animation.hide();
}
