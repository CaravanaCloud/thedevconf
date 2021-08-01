package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.UserSession;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

@ApplicationScoped
public class RegistrationService {
    @Inject
    UserService users;

    public boolean isRegistered(String mode) {
        var user = users.currentUser();
        if (user.isPresent()){
            //TODO: Create Registration entity ( User <-> Mode )
            //TODO: Find Registration from User + Mode
        }
        return false;
    }
}
