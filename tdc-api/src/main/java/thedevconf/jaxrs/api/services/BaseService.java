package thedevconf.jaxrs.api.services;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class BaseService {
    @Inject
    EntityManager em;
}
