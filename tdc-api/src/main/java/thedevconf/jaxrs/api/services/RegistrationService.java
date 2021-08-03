package thedevconf.jaxrs.api.services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import thedevconf.jaxrs.api.entity.User;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserEmailPassword;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.validation.CustomConstraint;

@ApplicationScoped
public class RegistrationService {

    @Inject
    UserService users;

    @Inject
    PasswordGeneratorService passwordGeneratorService;

    @Transactional
    public void register(@NotNull @Valid RegistrationVO registration) {
        if (UserEmail.containsByEmail(registration
                                          .getEmailWithConfirmation().email)) {
            // defensive programming
            throw new IllegalStateException("this method should be not executed 'cause " +
                                                "the parameter should be validated by " +
                                                "the Bean Validation API. " +
                                                "Check the application configuration.");
        }
        User user = User.newTransientFromName(registration.getName());
        user.setAcceptedTerms(registration.getAcceptedTerms());
        user.persist();
        UserEmail userEmail = UserEmail.newFromEmailAndUser(
            registration.getEmailWithConfirmation().email,
            user
        );
        UserEmailPassword.createFrom(
            userEmail.getEmail(),
            registration.getPasswordWithConfirmation().password,
            passwordGeneratorService
        );
    }

    public boolean isRegistered(String mode) {
        var user = users.currentUser();
        if (user.isPresent()) {
            //TODO: Create Registration entity ( User <-> Mode )
            //TODO: Find Registration from User + Mode
        }
        return false;
    }

    public static class RegistrationValidator
        implements ConstraintValidator<CustomConstraint, RegistrationVO> {
        @Override
        public boolean isValid(
            final RegistrationVO registration,
            final ConstraintValidatorContext context
        ) {
            if (registration == null) {
                return true;
            }
            boolean alreadyRegistered = UserEmail
                .containsByEmail(registration.getEmailWithConfirmation().email);
            return !alreadyRegistered;
        }
    }
}
