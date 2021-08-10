package thedevconf.jaxrs.api.services;

import java.util.Optional;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.Registration;
import thedevconf.jaxrs.api.entity.UserEmail;
import thedevconf.jaxrs.api.entity.UserEmailPassword;
import thedevconf.jaxrs.api.vo.UserRegistrationByEmailAndPasswordRequest;
import thedevconf.jaxrs.api.vo.UserRegistrationByEmailAndPasswordResponse;
import thedevconf.jaxrs.validation.CustomConstraint;

@ApplicationScoped
public class RegistrationService extends BaseService {

    @Inject
    ModesService modes;

    @Inject
    EditionsService editions;

    @Inject
    PersonService users;

    @Inject
    PasswordGeneratorService passwordGeneratorService;

    public Optional<Registration> doRegistration(String editionCode, String modeCode) {
        var user = users.currentUser();
        if (user.isPresent()) {
            return doRegistration(user.get(), editionCode, modeCode);
        }
        return Optional.empty();
    }

    @Transactional
    public Optional<Registration> doRegistration(Person person, String editionCode, String modeCode) {
        Optional<Registration> registration = findFirst(person, editionCode, modeCode);
        if (registration.isPresent()) {
            return registration;
        }
        var edition = editions.byCode(editionCode);
        var mode = modes.byCode(modeCode);
        var arePresent = edition.isPresent() && mode.isPresent();
        if (arePresent) {
            var reg = Registration.of(
                    person,
                    edition.get(),
                    mode.get()
            );
            reg = em.merge(reg);
            return Optional.of(reg);
        } else {
            throw new IllegalArgumentException();
        }
    }

    public boolean isRegistered(String editionCode, String modeCode) {
        var user = users.currentUser();
        if (user.isPresent()) {
            var registered = isRegistered(user.get(), editionCode, modeCode);
            return registered;
        }
        return false;
    }

    public boolean isRegistered(Person person, String editionCode, String modeCode) {
        return findFirst(person, editionCode, modeCode)
                .isPresent();
    }

    private Optional<Registration> findFirst(Person person, String editionCode, String modeCode) {
        return em.createNamedQuery("registration.byPersonAndMode", Registration.class)
                .setParameter("person", person)
                .setParameter("editionCode", editionCode)
                .setParameter("modeCode", modeCode)
                .getResultStream()
                .findFirst();
    }

    @Transactional
    public UserRegistrationByEmailAndPasswordResponse registerUserByEmailAndPassword(
            @NotNull @Valid final UserRegistrationByEmailAndPasswordRequest registrationRequest
    ) {
        if (UserEmail.containsByEmail(registrationRequest
                .getEmailWithConfirmation().email)) {
            // defensive programming
            throw new IllegalStateException("this method should be not executed 'cause "
                    + "the parameter should be validated by "
                    + "the Bean Validation API. "
                    + "Check the application configuration.");
        }
        Person user = Person.newTransientFromName(registrationRequest.getName());
        user.setAcceptedTerms(registrationRequest.getAcceptedTerms());
        user.persist();
        UserEmail userEmail = UserEmail.newFromEmailAndUser(
                registrationRequest.getEmailWithConfirmation().email,
                user
        );
        var userEmailPassword = UserEmailPassword.createFrom(
                userEmail.getEmail(),
                registrationRequest.getPasswordWithConfirmation().password,
                passwordGeneratorService
        );

        return new UserRegistrationByEmailAndPasswordResponse(
                userEmailPassword.getEmail(),
                userEmailPassword.getCreateTime()
        );
    }

    public static class UserRegistrationByEmailAndPasswordRequestValidator
            implements ConstraintValidator<CustomConstraint, UserRegistrationByEmailAndPasswordRequest> {
        @Override
        public boolean isValid(
                final UserRegistrationByEmailAndPasswordRequest registration,
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
