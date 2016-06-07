/* Color Mixing with RGB Led

    LED is attached to pins 3, 5, & 6
    each leg is in series with a 220-ohm or higher resistor
    mixes the colors. How would you add in potentiometers
    to control the values for each channel?
*/

int rPin = 3; // red pin
int gPin = 5; // green pin
int bPin = 6; // blue pin

void setup() {
  pinMode(rPin, OUTPUT);
  pinMode(gPin, OUTPUT);
  pinMode(bPin, OUTPUT);

  analogWrite(rPin, 0); // initial value to the red component
  analogWrite(gPin, 0); // initial value to the green component
  analogWrite(bPin, 255); // initial value to the blue component
}

void loop() {
  // increase the red
  for (int r = 0; r < 256; r++) {
    analogWrite(rPin, r);
    delay(10);
  }

  // decrease the blue
  for (int b = 0; b > 0; b--) {
    analogWrite(bPin, b);
    delay(10);
  }

  // increase the green
  for (int g = 0; g < 256; g++) {
    analogWrite(gPin, g);
    delay(10);
  }

  // increase the blue
  for (int b = 0; b < 256; b++) {
    analogWrite(bPin, b);
    delay(10);
  }

  // decrease the red
  for (int r = 0; r > 0; r--) {
    analogWrite(rPin, r);
    delay(10);
  }
  
  // decrease the green
  for (int g = 0; g > 0; g--) {
    analogWrite(gPin, g);
    delay(10);
  }
}
