package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = "html:target/ExpensesModul",
        features = "C:\\Users\\Lutor\\IdeaProjects\\phoenixmonjuly15\\src\\test\\resources\\feature",
        glue = "steps",
        tags = " @test" ,
        dryRun=false
)
public class Runner {

}
