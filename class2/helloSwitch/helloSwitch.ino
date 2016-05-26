int switchPin = 3; // vairable for the switch pin
int ledPin = 8; // variable for the LED pin

int switchPos; // variable to hold switch value

void setup() {
  pinMode(ledPin, OUTPUT); // configure pin 8 as an output
  pinMode(switchPin, INPUT); // configure pin 3 as an input
}

void loop() {

  switchPos = digitalRead(switchPin); // read and store the value of the switch

  if (switchPos == HIGH) { // if the switch is pressed
    digitalWrite(ledPin, HIGH); // put 5V on pin 8
  } else { // otherwise
    digitalWrite(ledPin, LOW); // pull pin 8 to GND
  }
}
