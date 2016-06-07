/*
   Simple sounds

   plays a tone out on pin 8. A piezo or speaker needs
   to be attached to pin 8, and the other end to ground.

   a potentiometer attached to A0 changes the frequency
   of the tone
*/

int potPin = A0;
int speaker = 8;

int potVal;

void setup() {
  // no need to call pinMode for a pin
  // that uses tone()
}

void loop() {
  potVal = analogRead(potPin); // read the value of the pot

  tone(speaker, potVal); // set the frequency of the tone on pin 8
  delay(250); // wait a quarter of a second
  noTone(speaker); // no tone will turn the sound off on the specified pin
  delay(1000);  //wait for a second
}
