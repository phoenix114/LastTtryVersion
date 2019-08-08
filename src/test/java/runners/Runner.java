package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = "html:target/ExpensesModul",


        features = "src/test/resources/feature/expenses.feature",

        glue = "steps",
        tags = " @test4" ,
        dryRun=false
)
public class Runner {

}
