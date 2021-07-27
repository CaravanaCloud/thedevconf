package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.StringContains.containsString;



@QuarkusTest
public class SummaryTest {

    @Test
    public void testMustContainsResumoDoEvento() {
        given()
          .when().get("/user/summary")
          .then()
             .body(containsString("RESUMO DO EVENTO"));
    }

    @Test
    public void testMustContainsCodigoDeDesconto() {
        given()
          .when().get("/user/summary")
          .then()
             .body(containsString("RESUMO DO EVENTO"));
    }
}