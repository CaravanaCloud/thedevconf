package cloud.caravana;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

@QuarkusTest
public class SampleResourceTest {

    @Test
    public void testHelloEndpoint() {
        /*
        given()
          .when().get("/sample")
          .then()
             .statusCode(200)
             .body(is("Hello RESTEasy"));
         */
    }

}