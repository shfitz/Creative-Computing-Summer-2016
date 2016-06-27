var serial; // variable to hold  the serialport library
var portName = '/dev/cu.usbmodem1421'; // use your serial port name
var inByte = 0;

var xPos = 0;

function setup() {

  createCanvas(400, 512);
  background(0);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  //serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.open(portName); // open a serial port
}

function draw() {
  // background(0);
  fill(0);
  rect(0, 0, width, 40);
  fill(255);
  text("sensor value: " + inByte, 30, 30);
  stroke(127, 34, 255);
  line(xPos, height, xPos, height - inByte/2);

  // at the edge of the screen, go back to the beginning:
  if (xPos >= width) {
    xPos = 0;
    background(0);
  } else {
    // increment the horizontal position:
    xPos++;
  }
}

function serialEvent() {
  var inString = serial.readStringUntil('\r\n'); // hold info in the buffer until you see the control characters, and store that in our inString variable
  inString = inString.trim();

  if (inString.length > 0) { //if we have any information, use it!
    inByte = Number(inString);
    print(inByte);
  }
}

function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function portClose() {
  println('The serial port closed.');
}