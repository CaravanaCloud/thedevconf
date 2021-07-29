package thedevconf.jaxrs.api.rs;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class UserResourceTest {
//TODO: Clean database after each test

    @Inject
    EntityManager em;

    @Test
    public void testShouldPostUserData() {

        String userData = "{\"language\":\"Português-BR\"," +
                "\"phone\":\"123456789\"," +
                "\"company\":\"Caravana Cloud\"," +
                "\"occupation\":\"Desenvolvedora\"," +
                "\"country\":\"Brasil\"," +
                "\"city\":\"Recife\"," +
                "\"gender\":\"Prefiro não responder\"," +
                "\"ethnicity\":\"Prefiro não responder\"," +
                "\"pcd\":\"Não se aplica\", " +
                "\"acceptedTerms\": true}";

        given()
                .when()
                .contentType(ContentType.JSON)
                .body(userData)
                .post("/api/user/user-data")
                .then().statusCode(200);
    }
}
