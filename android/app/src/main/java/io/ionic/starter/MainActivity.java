package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    try {
      int result = 10 / 0; 
    } catch (ArithmeticException e) {
      e.printStackTrace();
      System.out.println("Error: División por cero.");
    }
  }
}
