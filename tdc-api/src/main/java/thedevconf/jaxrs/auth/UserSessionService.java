package thedevconf.jaxrs.auth;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.logging.Logger;

@ApplicationScoped
public class UserSessionService {
    static final Logger log = Logger.getLogger("UserSessionService");

    @Inject
    EntityManager em;

    @Transactional
    public void updateProfile(String clientId,
                                     String idToken,
                                     String email,
                                     boolean emailVerified,
                                     String pictureUrl,
                                     String locale,
                                     String familyName,
                                     String givenName) {
        log.info("updateProfile()");
        UserSession user = this.ofClientId(clientId);
        user.setIdToken(idToken);
        user.setEmail(email);
        user.setEmailVerified(emailVerified);
        user.setPictureUrl(pictureUrl);
        user.setLocale(locale);
        user.setFamilyName(familyName);
        user.setGivenName(givenName);
        user.setModifiedTime(LocalDateTime.now());
        user = em.merge(user);
    }

    @Transactional
    public UserSession ofClientId(String clientId){
        UserSession user = em.find(UserSession.class, clientId);
        if (user == null){
            user = UserSession.byClientId(clientId);
            user = em.merge(user);
        }
        return user;
    }
}
