package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.QuarkusTestProfile;
import io.quarkus.test.junit.TestProfile;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserEmailPassword;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import thedevconf.jaxrs.api.entity.Edition;
import thedevconf.jaxrs.api.entity.Mode;
import thedevconf.jaxrs.api.entity.Person;

import javax.inject.Inject;
import javax.transaction.Transactional;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
//@TestMethodOrder(OrderAnnotation.class)
//@TestProfile(RegistrationServiceTestProfile.class)
class RegistrationServiceTest {

    @Inject
    RegistrationService registrationService;
    @Inject
    PasswordGeneratorService passwordGeneratorService;

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
        Person.deleteAll();
    }

    @Order(1)
    @Test
    @DisplayName("Given an null argument then the register method must fail")
    void givenAnNullParameterThenRegisterMethodMustFail() {
        assertThrows(ConstraintViolationException.class, () -> {
            registrationService.register(null);
        });
    }

    @Order(2)
    @ParameterizedTest(name = "[{index}] {0}")
    @DisplayName("Given an invalid registration then the register method must fail")
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
    void givenAnInvalidRegistrationThenRegisterMethodMustFail(
        String scenario,
        String name,
        String email,
        String emailConfirmation,
        String password,
        String passwordConfirmation,
        String acceptTerms
    ) {
        assertThrows(ConstraintViolationException.class, () -> {
            RegistrationVO registration = new RegistrationVO();
            registration.setName(valueOf(name));
            registration.getEmailWithConfirmation().email = valueOf(email);
            registration.getEmailWithConfirmation().emailConfirmation = valueOf(
                emailConfirmation);
            registration.getPasswordWithConfirmation().password = valueOf(password);
            registration.getPasswordWithConfirmation().passwordConfirmation = valueOf(
                passwordConfirmation);
            registration.setAcceptedTerms(Boolean.valueOf(valueOf(acceptTerms)));
            //TODO: RECOVER
            // registrationService.register(registration);
        }, "must fail when the given invalid registration comes " + scenario);
    }

    public String valueOf(String value) {
        return Optional.ofNullable(value).filter(v -> !"null".equals(v)).orElse(null);
    }



    @Order(3)
    @Test
    void testHappyScenarios() {
        var johnDoeRegistration = new RegistrationVO();
        johnDoeRegistration.setName("John Doe");
        johnDoeRegistration.getEmailWithConfirmation().email = "johndoe@johndoe.com";
        johnDoeRegistration
            .getEmailWithConfirmation().emailConfirmation = "johndoe@johndoe.com";
        johnDoeRegistration.getPasswordWithConfirmation().password = "test123";
        johnDoeRegistration.getPasswordWithConfirmation().passwordConfirmation = "test123";
        johnDoeRegistration.setAcceptedTerms(Boolean.TRUE);
        registrationService.register(johnDoeRegistration);
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
                                  .getPerson(), "must be registered an User entity");
            },
            () ->
                fail("must be registered an UserEmailPassword entity " +
                         "for a valid registration with a non registered email")
        );
        assertThrows(
            ConstraintViolationException.class,
            () -> {
                registrationService.register(johnDoeRegistration);
            },
            "must fail when the registrationService receive a registration's email already registered"
        );
        var maryDoeRegistration = new RegistrationVO();
        maryDoeRegistration.setName("Mary Doe");
        maryDoeRegistration.getEmailWithConfirmation().email = "johndoe@johndoe.com";
        maryDoeRegistration
            .getEmailWithConfirmation().emailConfirmation = "johndoe@johndoe.com";
        maryDoeRegistration.getPasswordWithConfirmation().password = "test123";
        maryDoeRegistration.getPasswordWithConfirmation().passwordConfirmation = "test123";
        maryDoeRegistration.setAcceptedTerms(Boolean.TRUE);
        assertThrows(
            ConstraintViolationException.class,
            () -> {
                registrationService.register(maryDoeRegistration);
            },
            "must fail when the registrationService receive a registration's email already registered"
        );
    }


    public static class RegistrationServiceTestProfile implements QuarkusTestProfile {
        @Override
        public Map<String, String> getConfigOverrides() {
            return Map.of(
                "quarkus.datasource.jdbc", "true",
                "quarkus.datasource.jdbc.url",
                "jdbc:h2:mem:tdcdb" +
                    UUID.randomUUID().toString().substring(0, 5) +
                    ";DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=false;MODE=MYSQL",
                "quarkus.datasource.db-kind", "h2",
                "quarkus.datasource.username", "sa",
                "quarkus.datasource.password", "",
                "quarkus.hibernate-orm.database.generation", "drop-and-create",
                "quarkus.flyway.clean-at-start", "false",
                "quarkus.flyway.migrate-at-start", "false"
                //                ,"quarkus.hibernate-orm.log.sql", "true"
            );
        }
    }
}