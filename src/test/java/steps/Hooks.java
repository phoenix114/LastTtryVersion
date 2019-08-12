package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
<<<<<<< HEAD
import cucumber.api.java.Before;
=======
import org.junit.Before;
>>>>>>> ulugbek
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Config;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {
<<<<<<< HEAD
    @Before
public void logInPage(){

        Driver.getDriver().get(Config.getProperty("url"));
}
=======
//    @Before
//public void logInPage(){
//        Driver.getDriver().get(Config.getProperty("url"));
//}
>>>>>>> ulugbek

    @After

    public void teardown(Scenario scenario){
        System.out.println("This is our hooks clean up");
        System.out.println(scenario.getName());
        System.out.println(scenario.getStatus());

        if(scenario.isFailed()){
            byte [] screenshot = ((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }
        Driver.quitDriver();

    }
}


