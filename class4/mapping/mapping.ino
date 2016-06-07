/*  mapping values

     Sometimes we have an analog sensor that doesn't
     exactly give us a full range of 1024 values, but we still want to
     map it to a different range.

     We can use the map() function to scale values
     from one range to another. This eample expects an
     analog sensor attached to pin A0, and an LED on pin 3

     the value of the sensor will fade the LED

     For pretend sake, we'll assume the low value I get from the 
     sensor is 100, and the high is 500. We'll want to map that 
     to 0-255 for the LED.
     
*/

// some constants that won't change
const int ledPin = 3;
const int sensorPin = A0;

// variables that do change
int ledVal;
int sensorVal;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorVal = analogRead(sensorPin); // read the input from the sensor

  ledVal = map(sensorVal, 100, 500, 0, 255); // here's where we map the values
  // map takes an input, the low of that input, the high of the input, the low of the
  // scaled number, and the high of the scaled number. In this case, we have
  // 100 as the low input, 500 as the high input, and 0-255 as the range for the output.

  ledVal = constrain(ledVal 0,255); // constrain the values to 0-255, just in case
                                    // our earlier scaling was off 

  analogWrite(ledPin, ledVal); // write out the scaled value to the LED


  // print the values to the serial monitor
  Serial.print("the sensor val is : ");
  Serial.print(sensorVal);
  Serial.print(", the mapped LED val is : ");
  Serial.println(ledVal);  
}
