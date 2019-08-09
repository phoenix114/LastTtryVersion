package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
<<<<<<< HEAD
        plugin = "html:target/ExpensesModul",


        features = "src/test/resources/feature/expenses.feature",

        glue = "steps",
        tags = " @test4" ,
        dryRun=false
=======
        plugin = {"html:target/ExpensesModul","json:target/report.json"},
        features = "C:\\Users\\Customer\\IdeaProjects\\phoenixmonjuly15updated\\src\\test\\resources\\features\\expenses.feature",
        glue = "steps",
        tags = "@tHilal_3",
        dryRun = false
>>>>>>> master
)
public class Runner {

}
