package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import thedevconf.jaxrs.api.entity.Edition;
import thedevconf.jaxrs.api.entity.Mode;
import thedevconf.jaxrs.api.entity.Person;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
@TestInstance(Lifecycle.PER_CLASS)
public class OtherRegistrationServiceTest {
    private static final String EDITION = "SOMEEDITION";
    private static final String MODE = "SOMEPASS";

    @Inject
    RegistrationService registrations;

    @Inject
    PersonService people;

    @Inject
    EditionsService editions;

    @Inject
    ModesService modes;

    Person unregistered;
    Person registered;
    Edition edition;
    Mode mode;

    @BeforeAll
    public void beforeAll(){
        unregistered = people.of();
        registered = people.of();
        edition = editions.of(EDITION);
        mode = modes.of(MODE);
        assertNotNull(edition);
        assertNotNull(mode);
    }

    @Test
    public void testNotRegistered(){
        var isRegistered = registrations.isRegistered(unregistered, EDITION, MODE);
        assertFalse(isRegistered);
    }

    @Test
    public void testSimpleRegistration(){
        //given
        registrations.doRegistration(registered, EDITION, MODE);
        //when
        var isRegistered = registrations.isRegistered(registered, EDITION, MODE);
        //then
        assertTrue(isRegistered);
    }

}
