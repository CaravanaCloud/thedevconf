package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserSession;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Optional;

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
        if (session.isAuthenticated()){
            user = findByEmail(session);
            session.setUser(user);
        }
        return Optional.ofNullable(user);
    }

    private Person findByEmail(UserSession session) {
        Person user;
        var email = em.createNamedQuery("User.byEmail", UserEmail.class)
                .setParameter("email", session.getEmail())
                .setMaxResults(1)
                .getResultStream()
                .findFirst();
        if (email.isPresent()){
            user = email.get().getUser();
        }else {
            user = newUserFromSession(session);
        }
        return user;
    }

    private Person newUserFromSession(UserSession session) {
        var user = Person.of(session);
        var email = UserEmail.of(session,user);
        em.persist(user);
        em.persist(email);
        return user;
    }

    @Transactional
    public void create(Person user) {
        System.out.println(user);
        em.merge(user);
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
