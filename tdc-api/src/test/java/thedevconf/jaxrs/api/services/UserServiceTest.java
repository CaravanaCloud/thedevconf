package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import thedevconf.jaxrs.api.entity.AcceptedTerms;
import thedevconf.jaxrs.api.entity.Person;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
public class UserServiceTest {
//TODO: Clean database after each test

    @Inject
    PersonService userService;

    @Inject
    EntityManager em;

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
        Person userFromDatabase = em.find(Person.class, 1L);

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
