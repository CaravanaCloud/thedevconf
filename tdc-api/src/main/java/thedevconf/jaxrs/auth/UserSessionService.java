package thedevconf.jaxrs.auth;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.logging.Logger;

@ApplicationScoped
public class UserSessionService {
    static final Logger log = Logger.getLogger("UserSessionService");

    @Inject
    EntityManager em;

    @Transactional
    public UserSession ofClientId(String clientId) {
        UserSession user = em.find(UserSession.class, clientId);
        if (user == null) {
            user = UserSession.byClientId(clientId);
            user = em.merge(user);
        }
        return user;
    }


    @Transactional
    public UserSession authenticate(String clientId, String idTokenStr, String name, String email, boolean emailVerified,
                          String pictureUrl, String locale, String familyName, String givenName) {
        var session = findByEmail(email);
        if (session != null)
            return session;
        session = newUserSession(clientId,
                idTokenStr, name, email,
                emailVerified, pictureUrl, locale,
                familyName, givenName);
        session.setAccessTime(LocalDateTime.now());
        // Set User to Session
        return session;
    }

    UserSession newUserSession(String clientId, String idTokenStr, String name, String email, boolean emailVerified, String pictureUrl, String locale, String familyName, String givenName) {
        log.info("updateProfile()");
        UserSession user = this.ofClientId(clientId);
        user.setIdToken(idTokenStr);
        user.setName(name);
        user.setEmail(email);
        user.setEmailVerified(emailVerified);
        user.setPictureUrl(pictureUrl);
        user.setLocale(locale);
        user.setFamilyName(familyName);
        user.setGivenName(givenName);
        user.setModifiedTime(LocalDateTime.now());
        em.persist(user);
        return user;
    }

    UserSession findByEmail(String email) {
        var query = em.createNamedQuery("UserSession.byEmail");
        query.setParameter("email", email);
        query.setMaxResults(1);
        var results = (List<UserSession>) query.getResultList();
        if (! results.isEmpty()){
            return results.get(0);
        }
        return null;
    }
}