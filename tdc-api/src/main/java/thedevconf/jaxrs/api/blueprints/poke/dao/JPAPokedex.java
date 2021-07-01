package thedevconf.jaxrs.api.blueprints.poke.dao;

import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

@Dependent
public class JPAPokedex {
    @Inject
    EntityManager em;

    public List<Pokemon> findAll(){
        return em.createNamedQuery("pokemon.all", Pokemon.class).getResultList();
    }
}
