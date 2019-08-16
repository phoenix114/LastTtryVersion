package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {"html:target/ExpensesModul","json:target/report.json"},
        features = "src/test/resources/features",
        glue = "steps",
        tags = "@test" ,
        dryRun = false

)
public class Runner {

}