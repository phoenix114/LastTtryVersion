package runners;

<<<<<<< HEAD

=======
>>>>>>> 29b2c5548eca793f83b17e47de083d125da77a59
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
<<<<<<< HEAD
@CucumberOptions(
        plugin = "html:target/cucumberreports",
        features = "src/test/resources/features",
        glue = "steps",
        tags = "@brite",
        dryRun = false
=======

@CucumberOptions(
        plugin = "html:target/ExpensesModul",
        features = "C:\\Users\\Lutor\\IdeaProjects\\phoenixmonjuly15\\src\\test\\resources\\feature",
        glue = "steps",
        tags = " @test" ,
        dryRun=false
>>>>>>> 29b2c5548eca793f83b17e47de083d125da77a59
)
public class Runner {

}
