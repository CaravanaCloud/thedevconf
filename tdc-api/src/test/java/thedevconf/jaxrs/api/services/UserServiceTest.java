package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import thedevconf.jaxrs.api.entity.AcceptedTerms;
import thedevconf.jaxrs.api.entity.User;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
public class UserServiceTest {

    @Inject
    UserService userService;

    @Inject
    EntityManager em;

    @Test
    public void testShouldCreateAnUser() {
        User user = new User(
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
        User userFromDatabase = em.find(User.class, 1L);

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