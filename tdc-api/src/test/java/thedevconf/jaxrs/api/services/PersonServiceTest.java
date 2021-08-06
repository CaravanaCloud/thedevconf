package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import javax.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import thedevconf.jaxrs.api.entity.AcceptedTerms;
import thedevconf.jaxrs.api.entity.Person;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import thedevconf.jaxrs.api.entity.Registration;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserEmailPassword;
import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
public class PersonServiceTest {
//TODO: Clean database after each test

    @Inject
    PersonService userService;

    @Inject
    EntityManager em;

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

    @Test
    public void testShouldCreateAnUser() {
        Person user = new Person(
                "Português-BR",
                "123456789",
                "Caravana Cloud",
                "Desenvolvedora",
                "Brasil",
                "Recife",
                "Prefiro não responder",
                "Prefiro não responder",
                "Não se aplica",
                AcceptedTerms.TRUE
        );
        userService.create(user);
        Person userFromDatabase = em.find(Person.class, user.getId());

        assertEquals(user.getLanguage(), userFromDatabase.getLanguage());
        assertEquals(user.getPhone(), userFromDatabase.getPhone());
        assertEquals(user.getCompany(), userFromDatabase.getCompany());
        assertEquals(user.getOccupation(), userFromDatabase.getOccupation());
        assertEquals(user.getCountry(), userFromDatabase.getCountry());
        assertEquals(user.getCity(), userFromDatabase.getCity());
        assertEquals(user.getGender(), userFromDatabase.getGender());
        assertEquals(user.getEthnicity(), userFromDatabase.getEthnicity());
        assertEquals(user.getPcd(), userFromDatabase.getPcd());
    }
}
