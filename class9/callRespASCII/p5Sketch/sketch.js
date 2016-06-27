var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421'; // fill in your serial port name here
var xPos = 0;
var yPos = 0; // y location of the circle
var circleColor = 255; // color of the circle

function setup() {
  createCanvas(640, 480); // make canvas
  background(0); // black background
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
}


function draw(){
  background(255, 255, 0);
  fill(circleColor); // fill depends on the button
  ellipse(xPos, yPos, 50, 50); // draw the circle
  print("circle color: " + circleColor);
}


function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');

  //check to see that there's actually a string there:

  if (inString.length > 0) {

    if (inString !== "hello") {

      inString = inString.trim(); // get rid of whitepace

      var sensors = split(inString, ','); // split the string on the commas

      if (sensors.length > 1) { // if there are more than 1 element
        yPos = map(Number(sensors[0]), 0, 1023, 0, height); // element 0 is the ypos
        xPos = map(Number(sensors[1]), 0, 1023, 0, width); // element 1 is the xPos
        circleColor = 255 - (Number(sensors[2]) * 255); // element 2 is the button
      }
    }
    serial.write('x');
  }
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

function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}