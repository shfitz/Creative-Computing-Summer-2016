var serial;
var options = {
  baudrate: 9600
};
var portName = "/dev/cu.usbmodem1421"; // your serial port goes here
var mpos = 0;
var inData;

function setup() {
  createCanvas(600, 400);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
  serial.open(portName, options); // open a serial port
}

function draw() {
  background(0);
  fill(255);
  ellipse(mouseX, height / 2, 20, 20);
  textSize(36);
  text("Outgoing number: " + mpos, 20, height - 60);
  text("Servo Angle: " + inData, 20, height - 20);
}

function mouseDragged() {
  mpos = ceil(map(mouseX, 0, width, 0, 255));
  mpos = constrain(mpos, 0, 255);

  serial.write(mpos);
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function portClose() {
  println('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    println(i + " " + portList[i]);
  }
}

function serialEvent() {
  inData = Number(serial.read());
}

function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}