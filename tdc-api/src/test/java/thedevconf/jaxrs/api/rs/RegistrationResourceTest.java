package thedevconf.jaxrs.api.rs;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import javax.inject.Inject;
import javax.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.Registration;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserEmailPassword;
import thedevconf.jaxrs.api.services.PasswordGeneratorService;
import thedevconf.jaxrs.api.vo.UserRegistrationByEmailAndPasswordRequest;
import thedevconf.jaxrs.api.vo.UserRegistrationByEmailAndPasswordResponse;
import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

@QuarkusTest
@TestMethodOrder(OrderAnnotation.class)
class RegistrationResourceTest {
    @Test
    @DisplayName("GET  /api/user/registration must return 200")
    void get() {
        given()
            .log().ifValidationFails()
            .when()
            .contentType(ContentType.JSON)
            .get("/api/user/registration")
            .then()
            .log().ifValidationFails()
            .statusCode(200);
    }

    @BeforeEach
    @Transactional
    public void beforeEach() {
        afterEach();
    }

    @AfterEach
    @Transactional
    public void afterEach() {
        UserEmail.deleteAll();
        UserEmailPassword.deleteAll();
        Registration.deleteAll();
        Person.deleteAll();
    }

    @Order(1)
    @Test
    @DisplayName("POST  /api/user/registration with a empty payload return 400")
    void postAnEmptyParamThenMustFail() {
        given()
            .log().ifValidationFails()
            .when()
            .contentType(ContentType.JSON)
            .body(Map.of())
            .post("/api/user/registration")
            .then()
            .log().ifValidationFails()
            .statusCode(400);
    }

    @Order(2)
    @ParameterizedTest(name = "[{index}] {0}")
    @DisplayName("POST /api/user/registration with an invalid payload then must return 400")
    @CsvSource(
        delimiterString = ";",
        value = {
            "like a empty registration;;;;;;",
            "with null values;null;null;null;null;null;null;",
            "without name, email, emailConfirmation, password, passwordConfirmation but with acceptTerms;;;;;;true",
            "without name, email, emailConfirmation, password but with passwordConfirmation, acceptTerms;;;;;test1234;true",
            "without name, email, emailConfirmation but with password, passwordConfirmation, acceptTerms;;;;test1234;test1234;true",
            "without name, email, but with emailConfirmation, password, passwordConfirmation, acceptTerms;;;tetete@teste.com;test1234;test1234;true",
            "without name but with email, emailConfirmation, password, passwordConfirmation, acceptTerms;;tetete@teste.com;tetete@teste.com;test1234;test1234;true",
            "without email but with name, emailConfirmation, password, passwordConfirmation, acceptTerms;John Doe;;tetete@teste.com;test1234;test1234;true",
            "without emailConfirmation but with name, email, password, passwordConfirmation, acceptTerms;John Doe;tetete@teste.com;;test1234;test1234;true",
            "without password but with name, email, emailConfirmation, passwordConfirmation, acceptTerms;John Doe;tetete@teste.com;tetete@teste.com;;test1234;true",
            "without passwordConfirmation but with name, email, emailConfirmation, password, acceptTerms;John Doe;tetete@teste.com;tetete@teste.com;test1234;;true",
            "without acceptTerms but with name, email, emailConfirmation, password, passwordConfirmation;John Doe;tetete@teste.com;tetete@teste.com;test1234;teste1234;false",
            "with different email and emailConfirmation;John Doe;tetet1e@teste.com;tetete@teste.com;test1234;test1234;true",
            "with different password and passwordConfirmation;John Doe;tetete@teste.com;tetete@teste.com;test1234;test4321;true",
        })
    void postingAnInvalidRegistrationThenMustFail(
        String scenario,
        String name,
        String email,
        String emailConfirmation,
        String password,
        String passwordConfirmation,
        String acceptTerms
    ) {
        UserRegistrationByEmailAndPasswordRequest registration = new UserRegistrationByEmailAndPasswordRequest();
        registration.setName(valueOf(name));
        registration.getEmailWithConfirmation().email = valueOf(email);
        registration.getEmailWithConfirmation().emailConfirmation = valueOf(
            emailConfirmation);
        registration.getPasswordWithConfirmation().password = valueOf(password);
        registration.getPasswordWithConfirmation().passwordConfirmation = valueOf(
            passwordConfirmation);
        registration.setAcceptedTerms(Boolean.valueOf(valueOf(acceptTerms)));
        given()
            .when()
            .contentType(ContentType.JSON)
            .body(registration)
            .post("/api/user/registration")
            .then()
            .statusCode(400);
    }

    public String valueOf(String value) {
        return Optional.ofNullable(value).filter(v -> !"null".equals(v)).orElse(null);
    }

    @Inject
    PasswordGeneratorService passwordGeneratorService;

    @Order(3)
    @DisplayName("POST /api/user/registration - happy scenario")
    @Test
    void testHappyScenarios() {
        var johnDoeRegistration = new UserRegistrationByEmailAndPasswordRequest();
        johnDoeRegistration.setName("John Doe");
        johnDoeRegistration.getEmailWithConfirmation().email = "johndoe@johndoe.com";
        johnDoeRegistration
            .getEmailWithConfirmation().emailConfirmation = "johndoe@johndoe.com";
        johnDoeRegistration.getPasswordWithConfirmation().password = "test123";
        johnDoeRegistration.getPasswordWithConfirmation().passwordConfirmation = "test123";
        johnDoeRegistration.setAcceptedTerms(Boolean.TRUE);

        var userRegistration =
            given()
                .log().ifValidationFails()
                .when()
                .contentType(ContentType.JSON)
                .body(johnDoeRegistration)
                .post("/api/user/registration")
                .then()
                .log().ifValidationFails()
                .statusCode(200)
                .extract()
                .as(UserRegistrationByEmailAndPasswordResponse.class);

        assertThat(userRegistration,notNullValue(UserRegistrationByEmailAndPasswordResponse.class));
        assertThat(userRegistration.getEmail(),equalTo(johnDoeRegistration.getEmailWithConfirmation().email));
        assertThat(userRegistration.getCreateTime(),notNullValue(LocalDateTime.class));

        final var johnDoeEmailAndPasswordRef =
            UserEmailPassword.findByEmail(johnDoeRegistration.getEmailWithConfirmation().email);
        johnDoeEmailAndPasswordRef.ifPresentOrElse(
            johnDoeEmailAndPassword -> {
                assertTrue(
                    UserEmailPassword.matches(
                        johnDoeRegistration.getEmailWithConfirmation().email,
                        johnDoeRegistration.getPasswordWithConfirmation().password,
                        passwordGeneratorService
                    ),
                    "the UserEmailPassword entity has been stored wrongly!"
                );
                assertTrue(
                    UserEmail.containsByEmail(johnDoeEmailAndPassword.getEmail()),
                    "must be registered an UserEmail entity"
                );
                assertNotNull(UserEmail.findByEmail(johnDoeEmailAndPassword.getEmail()).get()
                                  .getUser(), "must be registered an User entity");
            },
            () ->
                fail("must be registered an UserEmailPassword entity " +
                         "for a valid registration with a non registered email")
        );
        given()
            .when()
            .contentType(ContentType.JSON)
            .body(johnDoeRegistration)
            .post("/api/user/registration")
            .then()
            .statusCode(400);
        //            "must fail when the registrationService receive a registration's email already registered"
        var maryDoeRegistration = new UserRegistrationByEmailAndPasswordRequest();
        maryDoeRegistration.setName("Mary Doe");
        maryDoeRegistration.getEmailWithConfirmation().email = "johndoe@johndoe.com";
        maryDoeRegistration
            .getEmailWithConfirmation().emailConfirmation = "johndoe@johndoe.com";
        maryDoeRegistration.getPasswordWithConfirmation().password = "test123";
        maryDoeRegistration.getPasswordWithConfirmation().passwordConfirmation = "test123";
        maryDoeRegistration.setAcceptedTerms(Boolean.TRUE);
        given()
            .when()
            .contentType(ContentType.JSON)
            .body(maryDoeRegistration)
            .post("/api/user/registration")
            .then()
            .statusCode(400);
        //            "must fail when the registrationService receive a registration's email already registered"
    }
}