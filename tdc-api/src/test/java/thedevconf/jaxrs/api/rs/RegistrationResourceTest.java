package thedevconf.jaxrs.api.rs;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.CoreMatchers.*;

@QuarkusTest
class RegistrationResourceTest {
    @Test
    void getRegistrationVO() {
        given()
            .when()
            .contentType(ContentType.JSON)
            .get("/api/user/registration")
            .then()
            .statusCode(200);
    }

    @Test
    void testGetRegistrationVO() {
    }
}