#include <Wire.h>
#include <Adafruit_ADS1015.h>

Adafruit_ADS1115 ads(0x48);
const float FACTOR = 5;
const float multiplier = 0.125F;

void ImprimirMedidas(String prefix, float value, String postfix);

void setup()
{
  Serial.begin(9600);
  ads.setGain(GAIN_ONE);        
  ads.begin();
}
 
void loop()
{
 float CorrienteRMS = getCorriente();
 float Potencia = 220.0 * CorrienteRMS;
 
 ImprimirMedidas("Irms: ", CorrienteRMS, "A , Potencia: ", Potencia, "W");
}

void ImprimirMedidas(String prefix, float valueI, String postfix, float valueWats, String final)
{
 Serial.print(prefix);
 Serial.print(valueI, 3);
 Serial.print(postfix);
 Serial.print(valueWats, 3);
 Serial.println(final);
 EnviarSerial(valueI);
}

void EnviarSerial(float irms)
{
  Serial3.println(final);
}
 

float getCorriente()
{
 float Volt_diferencial;
 float corriente;
 float sum = 0;
 long tiempo = millis();
 int counter = 0;
 
 while (millis() - tiempo < 1000)
 {
   Volt_diferencial = ads.readADC_Differential_0_1() * multiplier;
   
   corriente = Volt_diferencial * FACTOR;
   corriente /= 1000.0;
 
   sum += sq(corriente);
   counter = counter + 1;
  }
 
 corriente = sqrt(sum / counter);
 return(corriente);
}