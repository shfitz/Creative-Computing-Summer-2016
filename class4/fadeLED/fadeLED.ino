/* fade an LED
 *  
 *  LED is attached to pin 3 
 *  inseries with a 220-ohm or higher resistor
 */

int ledPin = 3; // pin the LED is attached to
                // for PWM, it must be on pin 3, 5, 6, 9, 10, or 11

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT); // led pin is an output
}

void loop() {
  // put your main code here, to run repeatedly:
  for (int i = 0; i < 256; i++) { // loop 256 times, incrementig the variable "i" every time
    analogWrite(ledPin, i); // write the  value to the LED
    delay(10); // wait for 10ms before executing the next loop
  }

  for (int i = 255; i > 0; i--) { // loop 256 times, decrementing the variable "i" every time
    analogWrite(ledPin, i); // write the  value to the LED
    delay(10); // wait for 10ms before executing the next loop
  }
}
