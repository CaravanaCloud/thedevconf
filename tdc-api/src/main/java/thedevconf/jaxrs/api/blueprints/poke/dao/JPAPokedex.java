package thedevconf.jaxrs.api.blueprints.poke.dao;

import java.util.List;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

@Dependent
public class JPAPokedex {
    @Inject
    EntityManager em;

    public List<Pokemon> findAll() {
        return em.createNamedQuery("pokemon.all", Pokemon.class).getResultList();
    }
}
