package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.User;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserSession;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Optional;

@ApplicationScoped
public class UserService {
    //TODO: Add functions to: Read, Update and Delete user data

    @Inject
    EntityManager em;

    @Inject
    UserService users;

    @Transactional
    public Optional<User> findBySession(UserSession session) {
        var user = (User) null;
        if (session.isAuthenticated()){
            user = findByEmail(session);
            session.setUser(user);
        }
        return Optional.ofNullable(user);
    }

    private User findByEmail(UserSession session) {
        User user;
        var email = UserEmail.findByEmail(session.getEmail());
        if (email.isPresent()){
            user = email.get().getUser();
        }else {
            user = newUserFromSession(session);
        }
        return user;
    }

    private User newUserFromSession(UserSession session) {
        var user = User.newFromSession(session);
        em.persist(user);
        return user;
    }

    @Transactional
    public void create(User user) {
        System.out.println(user);
        em.merge(user);
    }

    public UserSession currentSession() {
        var session = UserSession.getCurrent();
        var user = users.findBySession(session);
        return session;
    }

    public Optional<User> currentUser() {
        var session = currentSession();
        return session.getUser();
    }
}
