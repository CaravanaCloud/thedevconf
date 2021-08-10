package thedevconf.jaxrs.api.services;

import java.util.Optional;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserSession;

@ApplicationScoped
public class PersonService {
    //TODO: Add functions to: Read, Update and Delete user data
    @Inject
    EntityManager em;
    @Inject
    PersonService users;

    @Transactional
    public Optional<Person> findBySession(UserSession session) {
        var user = (Person) null;
        if (session.isAuthenticated()) {
            user = findByEmail(session.getEmail())
                    .orElseGet(() -> newUserFromSession(session));
            session.setUser(user);
        }
        return Optional.ofNullable(user);
    }

    private Optional<Person> findByEmail(String email) {
        Optional<Person> userRef = Optional.empty();
        var emailRef = em.createNamedQuery(UserEmail.FIND_BY_EMAIL, UserEmail.class)
                .setParameter("email", email)
                .setMaxResults(1)
                .getResultStream()
                .findFirst();
        if (emailRef.isPresent()) {
            userRef = Optional.ofNullable(emailRef.get().getUser());
        }
        return userRef;
    }

    private Person newUserFromSession(UserSession session) {
        var user = Person.newFromSession(session);
        return user;
    }

    @Transactional
    public void create(Person user) {
        System.out.println(user);
        user.persist();
    }

    public UserSession currentSession() {
        var session = UserSession.getCurrent();
        var user = users.findBySession(session);
        return session;
    }

    public Optional<Person> currentUser() {
        var session = currentSession();
        return session.getUser();
    }

    @Transactional
    public Person of() {
        var person = Person.of();
        em.persist(person);
        return person;
    }
}
