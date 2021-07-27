package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.auth.UserSession;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class RegistrationService {
    public boolean isRegistered(UserSession user, String mode) {
        //TODO: get User from UserSession
        //TODO: Create Registration entity ( User <-> Mode )
        //TODO: Find Registration from User + Mode
        throw new UnsupportedOperationException("must be implemented!");
    }
}
