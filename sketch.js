var triggered = false;
var now, end;
var currentIndex = 0;
var nVideos = 5;
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
  print("Setup")

  ani = select("#forground")

  noCanvas();
  playVideo(currentIndex)
}

function draw() {

}

function trigger() {

  print("Trigger");

  stopGif(currentIndex);

  playGif(currentIndex);

}

function playGif(index) {

  print("Play Gif: " + index)

  ani = createImg(gif[index])
  ani.attribute('class', 'center')
  ani.attribute('src', gif[index]);
  ani.attribute('onclick', 'trigger()')

}

function stopGif(index) {

  print("Stop Gif: " + index)

  if (ani != null) {
    ani.remove()
  }

}

function playVideo(index) {

  print("Play: " + index)
  vid = select("#" + index.toString());

  vid.time(0)
  vid.play()
  vid.show();

}

function stopVideo(index) {

  if (vid != null) {

    vid.pause()
    vid.hide()

  }

}

function left() {

  stopVideo(currentIndex)
  stopGif(currentIndex)

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = nVideos - 1;
  }

  playVideo(currentIndex);

}

function right() {

  stopVideo(currentIndex)
  stopGif(currentIndex)

  currentIndex++;
  currentIndex %= nVideos;

  playVideo(currentIndex);

}