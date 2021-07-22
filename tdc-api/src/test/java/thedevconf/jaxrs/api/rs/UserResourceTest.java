package thedevconf.jaxrs.api.rs;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
class UserResourceTest {
    @Test
    public void shouldAcceptPostsOfUserData() {
        given()
                .when()
                .contentType(ContentType.JSON)
                .body("{\"language\":\"Espanhol\",\"phone\":\"+1 (979) 329-4257\",\"company\":\"Mathews and Mccarthy " +
                        "Trading\",\"occupation\":\"Consequatur quaerat\",\"country\":\"Burkina\",\"city\":\"one\"," +
                        "\"gender\":\"Prefiro não responder\",\"ethnicity\":\"Prefiro não responder\",\"pcd\":\"Não " +
                        "se aplica" +
                        "\", " +
                        "\"acceptedTerms\": " +
                        "true}")
                .post("/api/user/user-data")
                .then().statusCode(200);
    }
}