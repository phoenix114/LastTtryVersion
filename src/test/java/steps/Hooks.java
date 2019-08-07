package steps;

import org.junit.Before;
import utilities.Config;
import utilities.Driver;

public class Hooks {
    @Before
public void logInPage(){
        Driver.getDriver().get(Config.getProperty("url"));
}
}
