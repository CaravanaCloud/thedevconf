package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.Person;
import thedevconf.jaxrs.api.entity.Registration;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.Optional;

@ApplicationScoped
public class RegistrationService extends BaseService {
    @Inject
    ModesService modes;

    @Inject
    EditionsService editions;

    @Inject
    PersonService users;

    public Optional<Registration> doRegistration(String editionCode, String modeCode){
        var user = users.currentUser();
        if (user.isPresent()){
            return  doRegistration(user.get(), editionCode, modeCode);
        }
        return Optional.empty();
    }

    @Transactional
    public Optional<Registration> doRegistration(Person person, String editionCode, String modeCode) {
        Optional<Registration> registration = findFirst(person, editionCode, modeCode);
        if (registration.isPresent()) return registration;
        var edition = editions.byCode(editionCode);
        var mode = modes.byCode(modeCode);
        var arePresent = edition.isPresent() && mode.isPresent();
        if (arePresent){
            var reg = Registration.of(
                    person,
                    edition.get(),
                    mode.get()
            );
            reg = em.merge(reg);
            return Optional.of(reg);
        } else throw new IllegalArgumentException();
    }

    public boolean isRegistered(String editionCode, String modeCode) {
        var user = users.currentUser();
        if (user.isPresent()){
            var registered = isRegistered(user.get(),editionCode, modeCode);
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

}
