int switchPin1 = 3; // switch connected to pin 3
int switchPin2 = 4; // switch connected to pin 4
int ledPin = 8; // LED connected to pin 8

int switchPos1;  // variable to hold the value of switch 1
int switchPos2;  // variable to hold the value of switch 2

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT); // configure pin8 as an output
  pinMode(switchPin1, INPUT); // configure pin 3 as an input
  pinMode(switchPin2, INPUT); // configure pin 4 as an input
}

void loop() {
  // put your main code here, to run repeatedly:

  switchPos1 = digitalRead(switchPin1); // read the value of switch 1 and store it
  switchPos2 = digitalRead(switchPin2); // read the value of switch 2 and store it

  //  if (switchPos1 == HIGH && switchPos2 == HIGH) { // if both switch 1 and switch 2 is pressed
  
  if (switchPos1 == HIGH || switchPos2 == HIGH) { // if switch 1 or switch 2 is pressed
    digitalWrite(ledPin, HIGH); // put 5V on pin 8, turning the LED on
  } else { // otherwise
    digitalWrite(ledPin, LOW); // pull pin 8 to GND, turning the LED off
  }
}
