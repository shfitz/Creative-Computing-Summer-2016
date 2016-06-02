int ledPin = 13;
int potPin = A0;
int potVal = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  potVal = analogRead(potPin);

  digitalWrite(ledPin, HIGH);
  delay(potVal);
  digitalWrite(ledPin, LOW);
  delay(potVal);

}
