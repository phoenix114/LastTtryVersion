package steps;

import cucumber.api.Scenario;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Config;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {
    @Before
public void logInPage(){
        Driver.getDriver().get(Config.getProperty("url"));
}

    @After
<<<<<<< HEAD
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
=======
    public void tearDown(Scenario scenario){
        if (scenario.isFailed()){
            byte[] screenshot = ((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }

        Driver.quitDriver();
    }
}
>>>>>>> master
