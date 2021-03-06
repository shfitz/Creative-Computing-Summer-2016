int ledPin = 13;
int potPin = A0;
int potVal;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);

  Serial.begin(9600); // open a serial connection
}

void loop() {
  // put your main code here, to run repeatedly:
  potVal = analogRead(potPin);
  potVal = potVal/4; // scale from 0- 1023 to 0 - 255

  digitalWrite(ledPin, HIGH);
  delay(potVal);
  digitalWrite(ledPin, LOW);
  delay(potVal);

  Serial.println(potVal); // send vals to the serial monitor

}
