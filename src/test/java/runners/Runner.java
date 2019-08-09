package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {"html:target/ExpensesModul","json:target/report.json"},
        features = "C:\\Users\\Customer\\IdeaProjects\\phoenixmonjuly15updated\\src\\test\\resources\\features\\expenses.feature",
        glue = "steps",
        tags = "@tHilal_3",
        dryRun = false
)
public class Runner {

}
