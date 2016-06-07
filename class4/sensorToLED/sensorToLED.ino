/* analog control of sensor

    LED is attached to pin 3 in series with a 220-ohm or higher resistor
    potentimeter is attached to pin A0

    prints values to the serial monitor
*/

int ledPin = 3; // led pin
int potPin = A0; // pot pin

int potVal;
int ledVal;

void setup() {
  pinMode(ledPin, OUTPUT);

  Serial.begin(9600); // start the serial monitor
}

void loop() {
  // read the value of the pot
  potVal = analogRead(potPin);
  delay(1) // slight delay to let ADC settle

  ledVal = potVal / 4; // divide analog input by 4 to fit into 8 bit number

  analogWrite(ledPin, ledVal); // write the value to the led Pin

  // print the led value to the serial monitor
  Serial.print("the pot val is : ");
  Serial.print(potVal);
  Serial.print(", the LED val is : ");
  Serial.println(ledVal);
}
