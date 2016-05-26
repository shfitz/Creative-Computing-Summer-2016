void setup() {
  // put your setup code here, to run once:
  pinMode(8, OUTPUT); // configure pin8 as an output
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(8, HIGH); // put 5V on pin 8
  delay(1000); // wait for 500ms
  digitalWrite(8, LOW); // pull pin 8 to GND
  delay(1000); // wait for 500ms
  
}
