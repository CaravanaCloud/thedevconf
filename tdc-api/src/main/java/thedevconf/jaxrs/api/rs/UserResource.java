package thedevconf.jaxrs.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;
import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.services.RegistrationService;
import thedevconf.jaxrs.api.services.PersonService;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.UserSession;
import thedevconf.jaxrs.api.services.PersonService;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
 * API Resource for UserInformation, under Authentication
 */
@ApplicationScoped
public class UserResource {
    @Inject
    SummaryResource summary;
    //hibernate
    @Inject
    EntityManager em;
    //jdbc
    @Inject
    DataSource ds;
    @Inject
    PersonService userService;

    @Inject
    RegistrationResource registrationResource;

    @Path("summary")
    public SummaryResource getSummary() {
        return summary;
    }

    @Path("registration")
    public RegistrationResource getRegistrationResource() {
        return registrationResource;
    }

    @Path("user-data")
    @POST
    @Consumes(APPLICATION_JSON)
    @Produces(APPLICATION_JSON)
    public Person create(Person user) {
        userService.create(user);
        System.out.println(user);
        return user;
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("session")
    public UserSession getSession() {
        return userService.currentSession();
    }

    public Pokemon updateEmpresa(Pokemon p) {
        var session = userService.currentSession();
        var canUpdate = session.isAuthenticated(); // && isSameTrainer
        if (canUpdate) {
            // p.set...
            return em.merge(p);
        }
        return null;
    }
}
