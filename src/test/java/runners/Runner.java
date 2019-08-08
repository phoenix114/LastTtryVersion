package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
<<<<<<< HEAD
        plugin = "html:target/ExpensesModul",
        features = "src/test/resources/feature/expenses.feature",
=======
        plugin = "html:target/cucumber",
        features = "src/test/resources/feature/",
>>>>>>> delal
        glue = "steps",
        tags = "@test9",
        dryRun = false
)
public class Runner {

}
