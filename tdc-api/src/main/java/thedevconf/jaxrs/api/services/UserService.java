package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.AcceptedTerms;
import thedevconf.jaxrs.api.entity.User;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@ApplicationScoped
public class UserService {

    @Inject
    EntityManager em;

    @Transactional
    public void create(User user) {
        System.out.println(user);
        em.merge(user);
    }
}