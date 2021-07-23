package thedevconf.jaxrs.api.rs;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import thedevconf.jaxrs.api.entity.AcceptedTerms;
import thedevconf.jaxrs.api.entity.User;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
public class UserResourceTest {

    @Test
    public void testShouldAcceptPostsOfUserData() {
        String userData = "{\"language\":\"Português-BR\"," +
                "\"phone\":\"123456789\"," +
                "\"company\":\"Caravana Cloud\"," +
                "\"occupation\":\"Desenvolvedora\"," +
                "\"country\":\"Brasil\"," +
                "\"city\":\"Barcelona\"," +
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